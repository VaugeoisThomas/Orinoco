/**
 * Definition of consts for our API
 */
const cameraApi = "http://localhost:3000/api/cameras/"
let idUrlProduct = new URLSearchParams(window.location.search).get("id")
let urlProduct = cameraApi + idUrlProduct

const cameraProducts = new Products

/**
 * We define an object Product from a result to our API then we display one the product selected.
 * Then, we allow to push on the Cart
 */
cameraProducts.getProducts(urlProduct).then(result => {
    cameraProducts.displayOne(result)
    cameraProducts.addASelectedProductInACart(result)
})
