class Cart{
    constructor(){

    }
    //Udpate
    update(){
        let cart = JSON.parse(localStorage.getItem('items'))
        if(cart !== null){
            let quantity = cart.reduce(function(total, product){
                return total + product.quantity
            }, 0)
            let total = cart.reduce(function(total, product){
                return total + product.productPrice
            }, 0)
            document.getElementById('quantity').innerHTML = quantity
        } else {
            let quantity = 0
            document.getElementById('quantity').innerHTML = quantity
        }
    }
    //Display
    /*display(){
        if (cart === null) {
            return
        }
        console.log(cart)
        let cartSection = document.getElementById("cart-title")
        console.log(cartSection)

        for (let product of cart) {
            let cartRendered = `
            <div class="cart-wrapper">
                <div class="cart-wrapper-img">
                    <img src="${product.image}" alt="item's picture">
                </div>
                <div class="cart-wrapper-infos">
                    <div class="cart-wrapper-infos-name">${product.name}</div>
                    <div class="cart-wrapper-infos-price">${product.Price}€</div>
                    <div class="cart-wrapper-infos-counterAndModifier">
                        <div class="cart-wrapper-infos-counterAndModifier-modify">
                            <button class="cart-wrapper-infos-counterAndModifier-modify-removeOne" id='${product.name}Remove'>-</button>
                            <p class="cart-wrapper-infos-counterAndModifier-modify-quantityValue" id='${product.name}Qty'>${product.quantity}</p>
                            <button class="cart-wrapper-infos-counterAndModifier-modify-addOne" id='${product.name}Add'>+</button>
                        </div>
                        <div class="cart-wrapper-infos-counterAndModifier-totalPrice" id='${product.name}Total'><strong>${product.Price*product.quantity}</strong> €</div>
                        <div class="cart-wrapper-infos-counterAndModifier-remove" id='${product.name}Delete'>
                        </div>
                
                    </div>
                        
                </div>
            </div>`
            
            cartSection.insertAdjacentHTML("afterend", cartRendered);
              
            //ModifyQuantityProduct(product) 
            //TotalPrice()            
        }
    }*/
    //Remove

    //Send
}