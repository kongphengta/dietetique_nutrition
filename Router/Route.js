export default class Route {
    constructor(url, title, pathHtml, authorize, pathJS = "") {
        this.url = url;
        this.title = title;
        this.pathHtml = pathHtml;
        this.pathJS = pathJS;
        this.authorize = authorize;
    }
}
/*
[] -> Tout le mode peut y accéder
["disconnected"] -> Résever aux utilisateurs déconnectés
["client"] -> Résever aux utilisateurs avec le rôle client 
["admin"] -> Résever aux utilisateurs avec le rôle admin
["admin", "client"] -> Résever aux utilisateurs avec le rôle admin ou client
*/
