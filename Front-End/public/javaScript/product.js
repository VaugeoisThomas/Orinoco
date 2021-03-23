import {url, camera, cart} from './main';
/**
 * Definition of consts for our API
 */
let id_url_product = new URLSearchParams(window.location.search).get("id")
let url_product = url + id_url_product


/**
 * We define an object Product from a result to our API then we display one the product selected.
 * Then, we allow to push on the Cart
 */
camera.getProducts(url_product).then(result => {
    camera.displayOne(result)
    cart.addProducts(result)
})
    