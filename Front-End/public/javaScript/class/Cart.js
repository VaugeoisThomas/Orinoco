class Cart{
    constructor(){
        this.itemInCart = JSON.parse(localStorage.getItem('item'))
    }
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
                        <div class="quantity-value">${product.quantity}</div>
                        <button class="quantity-add" id="item-add">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <div>
                </div> `
            document.getElementById('cart-title').insertAdjacentHTML("afterend", resume)
            this.totalCard();
        }
    }
    totalCard(){
        if(this.itemInCart === null) { return }
        let totalWithoutTaxes = this.itemInCart.reduce(function(total, product){
            return total + product.total
        }, 0)
        document.getElementById("total").innerHTML = totalWithoutTaxes + '€'
    }
}