/**
 * Definition of consts for our API
 */
var api = "http://localhost:3000/api/cameras/"
let idUrlProduct = new URLSearchParams(window.location.search).get("id")
let urlProduct = api + idUrlProduct

const cameraSelected = new Products

/**
 * We define an object Product from a result to our API then we display one the product selected.
 * Then, we allow to push on the Cart
 */
cameraSelected.getProducts(urlProduct).then(result => {
    cameraSelected.displayOne(result)
    cameraSelected.addToCart(result)
})

//cart.update()