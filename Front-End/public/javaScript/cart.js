var cart =  new Cart


if(!cart.content || cart.content == 0){
    document.querySelector('#cart').innerHTML = "Votre panier est vide"
    let contact = document.querySelector("#resume-order")
    let container = document.querySelector(".resume")
    container.removeChild(contact)
}else {
    cart.display()
}

cart.displayOrder()

