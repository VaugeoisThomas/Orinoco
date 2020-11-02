/**
 * Definition of consts for our API
 */
const cameraApi = "http://localhost:3000/api/cameras/"
const cameraProducts = new Products
let ourCart = new Cart

/**
 * We define an object Product from a result to our API then we display all products found.
 */
cameraProducts.getProducts(cameraApi).then(result => {
    cameraProducts.displayAll(result)
    ourCart.update()

})