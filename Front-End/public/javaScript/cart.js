var cart =  new Cart
if(!cart.content | cart.content == 0){
    document.getElementById('cart').innerHTML = "Votre panier est vide"
}
cart.display()
cart.totalCard()