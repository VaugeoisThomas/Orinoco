class Cart{
    constructor(){
        this.itemInCart = JSON.parse(localStorage.getItem('item'))
    }

    /**
     * Allow to update cart when we get one or more product in it
     */
    update(){
        if(this.itemInCart !== null){
            let quantity = this.itemInCart.reduce(function(total, product){
                return total + product.quantity}, 0)
  
            let totalPrice = this.itemInCart.reduce(function(total, product){
                return total + product.total
            }, 0)
            document.getElementById('quantity').innerHTML = quantity
        }else{
            let quantity = 0
            document.getElementById('quantity').innerHTML = quantity
        }
    }

    /**
     * Display the list of product which are on cart
     */
    display(){
        if(this.itemInCart === null) { return }
        for(let product of this.itemInCart){
            let resume = `
                <div class="cart-wrapper">
                    <img class="cart-wrapper-img"src="${product.img}" alt="product's picture">
                    <div class="cart-wrapper-information-name">${product.name}</div>
                    <div class="cart-wrapper-information-price">${product.price}€</div>
                    <div class="cart-quantity">
                        <button class="quantity-remove" id="item-remove">
                            <i class="fas fa-minus"></i>
                        </button>
                        <div class="quantity-value" id="add-${product.name}">${product.quantity}</div>
                        <button class="quantity-add" id="item-add">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div> `
            document.getElementById('cart-title').insertAdjacentHTML("afterend", resume)
            this.totalCard()
        }
    }

    /**
     * Calcul the total of cart
     */
    totalCard(){
        if(this.itemInCart === null) { return }
        let totalWithoutTaxes = this.itemInCart.reduce(function(total, product){
            return total + product.total
        }, 0)
        document.getElementById("total").innerHTML = totalWithoutTaxes + '€'
    }

    /**
     * Allow to add a product in a cart
     */
    addASelectedProductInACart(){
        
    }
}