const cameraApi = "http://localhost:3000/api/cameras/"
const cameraProducts = new Products

cameraProducts.getProducts(cameraApi).then(result => {
    cameraProducts.displayAll(result)
})
