import {cart} from './main'

let orderId = JSON.parse(sessionStorage.order)
let firstName = orderId[0].contact.firstName
let lastName = orderId[0].contact.lastName
let orderNumber = orderId[0].orderId
orderNumber.substr(25)

let messageName = document.querySelector(".confirmName")
let message = document.querySelector(".confirmOrder")

messageName.innerHTML = `${lastName} ${firstName}`
message.innerHTML = `<p class="orderNumer">Votre commande d'un montant de <span class="Order">${cart.totalCard()} €, portant le numéro ${orderNumber}, vous sera livrée dans 5 jours maximum !`
localStorage.removeItem("item")
sessionStorage.removeItem("order")