module.exports =
{
  'pub-pkg': 'pub-pkg-highlight',

  staticPaths: [
    { path:'./css/highlight-github-0.2.3.css', route:'/css', inject:true, maxAge:'30d' },
    { path:'./js/highlight-0.2.3.min.js', route:'/js', inject:true, maxAge:'30d' },
    { path:'./js/pub-pkg-highlight-0.2.3.js', route:'/js', inject:true, maxAge:'30d' }
  ],
}