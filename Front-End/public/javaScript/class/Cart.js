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
     * Display the list of products which are on cart
     */
    display(){
        if(this.itemInCart === null) { return }
        for(let product of this.itemInCart){
            let resume = `
                <div class="cart-wrapper">
                    <img class="cart-wrapper-img"src="${product.img}" alt="product's picture">
                    <h4 class="cart-wrapper-name">${product.name}</h4>
                    <h5 class="cart-wrapper-price">${product.price}€</h5>
                    <i class="cart-wrapper-description">${product.description}</i>
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
            document.getElementById('cart-title').insertAdjacentHTML("afterend", resume)
            this.addItem(product)
            this.removeItem(product)
            this.totalCard()
        }
        console.log(this.itemInCart)
    }

    /**
     * Calculate the total of cart
     */
    totalCard(){
        if(this.itemInCart === null) { return }
        let totalWithoutTaxes = this.itemInCart.reduce(function(total, product){
            return total + product.total
        }, 0)
        document.getElementById("total").innerHTML = totalWithoutTaxes+' €'
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
                let itemDeleted = ourCart.itemInCart.indexOf(product); //Verifying if selected product belongs to array's product
                ourCart.itemInCart.slice(itemDeleted, 1) // Remove our line 
                localStorage.setItem('item', JSON.stringify(ourCart.itemInCart)) //Refresh the localStorage
                /*ourCart.update() // Update our cart
                ourCart.totalCard() // Calculate again the total price of the cart  
                window.location.reload(); //Refresh the current page  */ 
            }else{
                quantityInCart.innerHTML = `Qty : ${product.quantity}`
                totalItems.innerHTML = `<strong>${product.price * product.quantity}</strong> €`
                localStorage.setItem('item', JSON.stringify(ourCart.itemInCart))
                ourCart.update()
                ourCart.totalCard()
            }
        })
    }

    ordering(){
        let contactOrder = document.getElementById('submit-button').addEventListener('click', function(e){
            e.preventDefault()

            let firstName = document.getElementById('firstName').value
            let lastName = document.getElementById('lastName').value
            let streetNumber = document.getElementById('number').value
            let adress = document.getElementById('adress').value
            let zipCode = document.getElementById('zipCode').value
            let state = document.getElementById('state').value
            let email = document.getElementById('email').value

            if(ourCart == null){
                alert('Vous ne pouvez envoyer le formulaire : Votre panier est vide')
            }else{
                let contact = new contact(firstName, lastName, streetNumber, adress, zipCode, state, email)
            }
        })
    }
}