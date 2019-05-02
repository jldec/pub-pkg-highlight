module.exports =
{
  'pub-pkg': 'pub-pkg-highlight',

  staticPaths: [
    { path:'./css/highlight-9.15.6-default.css', route:'/css', inject:true, maxAge:'30d' },
    { path:'./js/highlight-9.15.6.min.js', route:'/js', inject:true, maxAge:'30d' },
    { path:'./js/pub-pkg-highlight.js', route:'/js', inject:true, maxAge:'30d' }
  ],
}
