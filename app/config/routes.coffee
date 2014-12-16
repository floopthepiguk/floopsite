@app.config [
  "$routeProvider"
  ($routeProvider) ->
    $routeProvider.when("/about",
      templateUrl: "app/views/about.html"
    ).when("/installations",
      templateUrl: "app/views/installation-list.html"
    ).when("/faq",
      templateUrl: "app/views/faq.html"
    ).otherwise redirectTo: "/about"
]
