# pub-pkg-highlight

pub-server package for injecting browser-based syntax highlighting using [highlight.js](https://highlightjs.org/).

Includes support for the following languaes:

- Apache
- Bash
- C#
- C++
- CSS
- Diff
- Go
- HTML, XML
- HTTP
- Ini, TOML
- JSON
- Java
- JavaScript
- Makefile
- Markdown
- Nginx
- Objective-C
- PHP
- Perl
- Properties
- Python
- Ruby
- Rust
- SQL
- Shell Session
- Swift
- TypeScript
- YAML

A website with some examples can be found at https://jldec.github.io/pub-pkg-highlight

See highlight.js [downloads](https://highlightjs.org/download/) for additional languages.

### installation

This package is included with pub-server.

To enable it, add `pub-pkg-highlight` to your pub-config `pkgs`.

### usage

Layout templates which use `{{{injectCss}}}` and `{{{injectJs}}}` will automatically link to:

- `/css/highlight-9.15.6-default.css`
- `/js/highlight-9.15.6.min.js`
- `/js/pub-pkg-highlight.js`

### credits
Syntax highlighting thanks to highlight.js [authors](https://github.com/highlightjs/highlight.js/blob/master/AUTHORS.en.txt).
Highlight.js is released under the BSD License.
