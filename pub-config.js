module.exports =
{
  'pub-pkg': 'pub-pkg-highlight',

  staticPaths: [
    { path:'./css/highlight-11.4.0-github.css', route:'/css', inject:true, maxAge:'30d' },
    { path:'./js/highlight-11.4.0.min.js', route:'/js', inject:true, maxAge:'30d' },
    { path:'./js/pub-pkg-highlight.js', route:'/js', inject:true, maxAge:'30d' }
  ],
}
