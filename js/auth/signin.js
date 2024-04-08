const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials() {
    // Ici, il faudra appeler l'API pour v"rifeir le checkcredentials en BDD
    if (mailInput.value == "david@gmail.com" && passwordInput.value == "BelleFrance") {

        // Il faudra récupérer le vrai token
        const token = ("lmqdjilfhfnndsqknkjqshdksqHDJLKq");

        setToken(token);

        // Placer ce token en cookie
        setCookie(RoleCookieName, "client", 7);

        window.location.replace("/");
    } else {
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}