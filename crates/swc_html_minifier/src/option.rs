use serde::{Deserialize, Serialize};
use swc_cached::regex::CachedRegex;

#[derive(Debug, Serialize, Deserialize, Clone)]
#[serde(rename_all = "lowercase")]
#[serde(deny_unknown_fields)]
pub enum MinifierType {
    Js,
    Json,
    Css,
    Html,
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
#[serde(deny_unknown_fields)]
pub struct MinifyOptions {
    #[serde(default)]
    pub force_set_html5_doctype: bool,
    #[serde(default)]
    pub collapse_whitespaces: Option<CollapseWhitespaces>,
    #[serde(default = "true_by_default")]
    pub remove_comments: bool,
    #[serde(default = "default_preserve_comments")]
    pub preserve_comments: Option<Vec<CachedRegex>>,
    #[serde(default = "true_by_default")]
    pub minify_conditional_comments: bool,
    /// Prevent to remove empty attributes, by default we only remove attributes
    /// that are safe to remove (for example - empty a `style` attribute),
    /// but in edge cases it can be unsafe because some libraries can
    /// interact with DOM like with strings (i.e. don't use DOM API) and in this
    /// case strings will be different, which can break the work of
    /// libraries
    #[serde(default = "true_by_default")]
    pub remove_empty_attributes: bool,
    #[serde(default = "true_by_default")]
    pub remove_redundant_attributes: bool,
    #[serde(default = "true_by_default")]
    pub collapse_boolean_attributes: bool,
    /// Remove extra whitespace in space and comma separated attribute values
    /// (where it is safe) and remove `javascript:` prefix for event handler
    /// attributes
    #[serde(default = "true_by_default")]
    pub normalize_attributes: bool,
    #[serde(default = "true_by_default")]
    pub minify_js: bool,
    #[serde(default = "true_by_default")]
    pub minify_json: bool,
    #[serde(default = "true_by_default")]
    pub minify_css: bool,
    /// Allow to compress value of custom attributes,
    /// i.e. `<div data-js="myFunction(100 * 2, 'foo' + 'bar')"></div>`
    ///
    /// The first item is tag_name
    /// The second is attribute name
    /// The third is type of minifier
    #[serde(default)]
    pub minify_additional_attributes: Option<Vec<(CachedRegex, MinifierType)>>,
}

/// Implement default using serde.
impl Default for MinifyOptions {
    fn default() -> Self {
        serde_json::from_value(serde_json::Value::Object(Default::default())).unwrap()
    }
}

#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
#[serde(deny_unknown_fields)]
#[serde(rename_all = "kebab-case")]
pub enum CollapseWhitespaces {
    All,
    Smart,
    Conservative,
}

const fn true_by_default() -> bool {
    true
}

fn default_preserve_comments() -> Option<Vec<CachedRegex>> {
    Some(vec![
        // License comments
        CachedRegex::new("@preserve").unwrap(),
        CachedRegex::new("@copyright").unwrap(),
        CachedRegex::new("@lic").unwrap(),
        CachedRegex::new("@cc_on").unwrap(),
        // Allow to keep custom comments
        CachedRegex::new("^!").unwrap(),
        // Server-side comments
        CachedRegex::new("^\\s*#").unwrap(),
        // Conditional IE comments
        CachedRegex::new("^\\[if\\s[^\\]+]").unwrap(),
        CachedRegex::new("\\[endif]").unwrap(),
    ])
}
