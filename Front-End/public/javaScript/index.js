/**
* Definition of consts for our API
*/
import {url, camera, cart} from './main';

/**
 * We define an object Product from a result to our API then we display all products found.
 */
camera.getProducts(url).then(result => {
    camera.displayAll(result)
    cart.update()
})
    