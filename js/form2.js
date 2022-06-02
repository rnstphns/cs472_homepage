/*
@author mrstephens
@since 6/1/2022
*/
//submit new product form
window.onload = function () {

    const productForm = document.getElementById('product-form');
    productForm.addEventListener('submit', submit_form);

    function submit_form(event) {
        event.preventDefault();
        const prodNo = document.getElementById('inputProductNo').value;
        const quantity = document.getElementById('inputQuantity').value;
        const prodName = document.getElementById('inputName').value;
        const supplier = document.getElementById('inputSupplier').value;
        const price = document.getElementById('inputPrice').value;
        const date = document.getElementById('inputDate').value;
        alert("Product data entered: \n" + prodNo + "\n" + quantity + "\n" + prodName + "\n" + supplier + "\n" + price + "\n" + date);
        
    }

    const signoutButton = document.getElementById('sign-out-button');
    signoutButton.addEventListener('click', () => {
        if (window.confirm("Log Out?"))
            window.location = "login.html"
    });
}