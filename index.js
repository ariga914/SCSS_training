const checkInput = () => {
    const button = document.getElementById('button');
    const password = document.getElementById('password');
    const email = document.getElementById('email');


    if (password.value.length > 6 && email.value.includes("@")) {
        button.removeAttribute("disabled");
    } else {
        button.setAttribute("disabled", "disabled");
    }
};