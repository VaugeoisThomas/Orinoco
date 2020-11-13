let ourCart = new Cart

if(!ourCart.itemInCart | ourCart.itemInCart == 0){
    document.getElementById('cart').innerHTML = "Votre panier est vide"
}
ourCart.display()
ourCart.update()
ourCart.totalCard()