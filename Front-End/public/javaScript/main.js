/**
* Definition of consts for our API
*/
const Api = "http://localhost:3000/api/cameras/"

/**
 * We define an object Product from a result to our API then we display all products found.
 */
const Camera = new Products
const MyCart = new Cart

Camera.getProducts(Api).then(result => {
    Camera.displayAll(result)
    MyCart.update()
})
    