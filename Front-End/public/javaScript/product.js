/**
 * Definition of consts for our API
 */
const Api = "http://localhost:3000/api/cameras/"
let idUrlProduct = new URLSearchParams(window.location.search).get("id")
let urlProduct = Api + idUrlProduct

const CameraProducts = new Products
const MyCart = new Cart


/**
 * We define an object Product from a result to our API then we display one the product selected.
 * Then, we allow to push on the Cart
 */
CameraProducts.getProducts(urlProduct).then(result => {
    CameraProducts.displayOne(result)
    MyCart.addProduct(result)
    MyCart.update()
})
