/*
@author mrstephens
@since 6/1/2022
*/
//submit new product form
window.onload = function() {
    function submit_form() {
        const prodNo = document.getElementById('inputProductNo').value;
        const quantity = document.getElementById('inputQuantity').value;
        const prodName = document.getElementById('inputName').value;
        const supplier = document.getElementById('inputSupplier').value;
        const price = document.getElementById('inputPrice').value;
        const date = document.getElementById('inputDate').value;
        alert(prodNo + "\n" + quantity + "\n" + prodName + "\n" + supplier + "\n" + price + "\n" + date + " entered.");
    }
    const submitButton = document.getElementById('submit-product-button');
    submitButton.addEventListener('click', submit_form);
}

window.onload = function() {
    const signoutButton = document.getElementById('sign-out-button');
    signoutButton.addEventListener('click', () => {
        if (window.confirm("Log Out?"))
            window.location = "login.html"
    });
}