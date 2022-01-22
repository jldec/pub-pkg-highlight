---- / ----
name: README

# pub-pkg-highlight

pub-server package for injecting browser-based syntax highlighting using [highlight.js](https://highlightjs.org/).

A website with examples can be found at https://jldec.github.io/pub-pkg-highlight

Includes support for 34 commonly used languages and a github-theme stylesheet.
See [highlightjs.org](https://highlightjs.org/download/) for details.

### installation

This package is included with pub-server.

To enable it, add `pub-pkg-highlight` to your pub-config `pkgs`.

### usage

Layout templates which use `{{{injectCss}}}` and `{{{injectJs}}}` will automatically link to:

- `/css/highlight-11.4.0-github.css`
- `/js/highlight-11.4.0.min.js`
- `/js/pub-pkg-highlight.js`

### credits
Syntax highlighting thanks to highlight.js [authors](https://github.com/highlightjs/highlight.js/blob/master/AUTHORS.txt).
Highlight.js is released under the BSD License.
