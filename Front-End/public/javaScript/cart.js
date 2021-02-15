var cart =  new Cart

/**
 * Display the list of products which are on cart
 */
function display(){
    if(cart.content === null) { return }
    for(let product of cart.content){
        let resume = `
            <div class="cart-wrapper">
                <img class="cart-wrapper-img"src="${product.img}" alt="product's picture">
                <h4 class="cart-wrapper-name">${product.name}</h4>
                <h5 class="cart-wrapper-price">${product.price}€</h5>
                <i class="cart-wrapper-description">${product.description}</i>
                <p class="cart-wrapper-lense">Votre taille de lentille : ${product.lense}</p>
                <div class="cart-quantity">
                    <button class="quantity-remove" id="${product.name}-remove">
                        <i class="fas fa-minus"></i>
                    </button>
                    <div class="quantity-value" id="${product.name}-quantity">Qty : ${product.quantity}</div>
                    <button class="quantity-add" id="${product.name}-add">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
                <div class="cart-quantity-total" id="${product.name}-total"><strong>${product.price * product.quantity}</strong> €</div>
                <div class="cart-wrapper-remove" id='${product.name}-delete'>
            </div> `
        document.querySelector('#cart-title').insertAdjacentHTML("afterend", resume)
        cart.addQuantity(product)
        cart.removeQuantity(product)
        cart.totalCard()
    }
}
display()

if(!cart.content | cart.content == 0){
    document.querySelector('#cart').innerHTML = "Votre panier est vide"
    let contact = document.querySelector("#resume-order")
    let container = document.querySelector(".resume")
    container.removeChild(contact)

}

cart.displayOrder()