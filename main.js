document.addEventListener("DOMContentLoaded", function() {
    let password = document.querySelector("#password");
    let confirmPassword = document.querySelector("#confirmPassword");
    let error = document.querySelector("#error");

    function checkPasswordMatch() {
        if (password.value === "" || confirmPassword.value === "") {
            error.innerHTML = "";
            password.classList.remove("input-error");
            confirmPassword.classList.remove("input-error");
        } else if (password.value === confirmPassword.value) {
            error.innerHTML = "";
            password.classList.remove("input-error");
            confirmPassword.classList.remove("input-error");
        } else {
            error.innerHTML = "*Passwords do not match";
            password.classList.add("input-error");
            confirmPassword.classList.add("input-error");
        }
    }

    password.addEventListener("input", checkPasswordMatch);
    confirmPassword.addEventListener("input", checkPasswordMatch);
});