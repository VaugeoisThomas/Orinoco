var api = "http://localhost:3000/api/cameras/"
let idUrlProduct = new URLSearchParams(window.location.search).get("id")
let urlProduct = api + idUrlProduct

const cameraSelected = new Products

cameraSelected.getProducts(urlProduct).then(result => {
    cameraSelected.displayOne(result)
    cameraSelected.addToCart(result)
})