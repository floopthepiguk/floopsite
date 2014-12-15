@app.config [
  "$routeProvider"
  ($routeProvider) ->
    $routeProvider.when("/about",
      templateUrl: "views/about.html"
    ).when("/installations",
      templateUrl: "views/installation-list.html"
    ).when("/faq",
      templateUrl: "views/faq.html"
    ).otherwise redirectTo: "/about"
]
