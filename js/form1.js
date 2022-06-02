/*
@author mrstephens
@since 6/1/2022
*/
window.onload = function () {
    const loginForm = document.getElementById("login-form");
    loginForm.addEventListener('submit', submit_form);

    //submit login form
    function submit_form(event) {
        event.preventDefault();
        const email = document.getElementById('inputEmail').value;
        const password = document.getElementById('inputPassword').value;
        const url = document.getElementById('inputURL').value;
        console.log("You entered: " + email + " " + password + " " + url);
        email.value = "";
        password.value = "";
        url.value = "";
        if (window.confirm("Logged in! Go to new product form?"))
            window.open("newProduct.html");
    }
}
// //link to new product page
// window.onload = function() {
//     function check_me_out() {
//         if (window.confirm("Go to new product form?"))
//             window.open("newProduct.html");
//     }
//     const productButton = document.getElementById('new-product-button');
//     productButton.addEventListener('click', check_me_out);
// }