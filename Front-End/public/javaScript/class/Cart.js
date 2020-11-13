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
                    <div class="cart-wrapper-information-description">${product.description}</div>
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
                    <div class="cart-wrapper-information-remove" id='${product.name}-delete'>
                </div> `
            document.getElementById('cart-title').insertAdjacentHTML("afterend", resume)
            this.addItem(product)
            this.removeItem(product)
            this.totalCard()
        }
        console.log(this.itemInCart)
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
     * @param {*} product 
     */
    addItem(product){
        let addButton = document.getElementById(`${product.name}-add`)
        addButton.addEventListener('click', function (){
            let quantityInCart = document.getElementById(`${product.name}-quantity`)
            let totalItems = document.getElementById(`${product.name}-total`)
            product.quantity++
            product.total = product.quantity * product.price

            quantityInCart.innerHTML = `Qty : ${product.quantity}`
            totalItems.innerHTML = `<strong>${product.price * product.quantity}</strong> €`
            localStorage.setItem('item', JSON.stringify(ourCart.itemInCart))
            ourCart.update()
            ourCart.totalCard()
        })
    }

    /**
     * Allow to remove a product in a cart
     * @param {*} product 
     */
    removeItem(product){
        let removeButton = document.getElementById(`${product.name}-remove`)
        removeButton.addEventListener('click', function (){
            let quantityInCart = document.getElementById(`${product.name}-quantity`)
            let totalItems = document.getElementById(`${product.name}-total`)
            product.quantity--
            product.total = product.quantity * product.price

            if(product.quantity == 0){
                let itemDeleted = ourCart.itemInCart.indexOf(product);
                console.log(ourCart.itemInCart.slice(itemDeleted, 1))
                localStorage.setItem('item', JSON.stringify(ourCart.itemInCart))
                ourCart.update()
                ourCart.totalCard()
                document.location.reload();
   
            }else{
                quantityInCart.innerHTML = `Qty : ${product.quantity}`
                totalItems.innerHTML = `<strong>${product.price * product.quantity}</strong> €`
                localStorage.setItem('item', JSON.stringify(ourCart.itemInCart))
                ourCart.update()
                ourCart.totalCard()
            }
        })
    }
}