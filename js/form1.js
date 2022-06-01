/*
@author mrstephens
@since 6/1/2022
*/
//submit login form
window.onload = function() {
    function submit_form() {
        const email = document.getElementById('inputEmail').value;
        const password = document.getElementById('inputPassword').value;
        const url = document.getElementById('inputURL').value;
        console.log("You entered: " + email + " " + password + " " + url);
        //alert("You entered: " + email + " " + password + " " + url);
    }
    const loginButton = document.getElementById("login-button");
    loginButton.addEventListener("submit", submit_form);
    //loginButton.addEventListener('submit', alert("working"));
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