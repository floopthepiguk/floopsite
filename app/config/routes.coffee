@app.config [
  "$routeProvider",
  ($routeProvider) ->
    $routeProvider
    .when("/",              templateUrl: "app/views/home.html")
    .when("/about",         templateUrl: "app/views/about.html")
    .when("/installations", templateUrl: "app/views/installations.html")
    .when("/faq",           templateUrl: "app/views/faq.html")
    .otherwise redirectTo: "/"
]
