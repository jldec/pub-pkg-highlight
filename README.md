# pub-pkg-highlight

pub-server package for injecting [highlight.js](https://github.com/isagalaev/highlight.js)

### installation

This package is included with pub-server and used together with the default markdown-rendering theme [pub-theme-gfm]

```sh
npm install -g pub-server
```

### usage

Layout templates which use `{{{injectCss}}}` and `{{{injectJs}}}` will automatically link to:

- `/css/highlight-github-0.2.3.css`
- `/js/highlight-0.2.3.min.js`
- `/js/pub-pkg-highlight-0.2.3.js`

The version numbers listed above will be updated over time, and will be tracked by
the version number of this npm module.


### credits
syntax highlighting thanks to https://github.com/isagalaev/highlight.js
