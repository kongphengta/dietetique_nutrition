import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/omelette", "omelette", "/pages/omeletteauxepinards.html", []),
    new Route("/signin", "Connexion", "/pages/auth/signin.html", ["disconnected"], "/js/auth/signin.js"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html", ["disconnected"], "/js/auth/signup.js"),
    new Route("/account", "Mon compte", "/pages/auth/account.html", ["admin", "client"]),
    new Route("/editPassword", "Changement de mot de passe", "/pages/auth/editPassword.html", ["admin", "client"]),

];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Diététique & Nutrition";