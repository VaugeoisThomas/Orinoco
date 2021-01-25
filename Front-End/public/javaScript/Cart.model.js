class Cart{
    constructor(){
        this.content = JSON.parse(localStorage.getItem('item'))
    }
    /**
     * Initialyze the cart
     */
    initialyzeCart(){
        //If our cart don't exist we initialyze him.
        if(!this.content){
            console.log(this.content = [])
        }
    }

    save(){
        localStorage.setItem("item", JSON.stringify(this.content))
    }

    /**
     * Create an object for the LocalStorage
     * @param {*} result 
     */
    createLocalStorage(result){
        let productSelected = {
            name: result.name,
            id: result._id,
            quantity: 1,
            lense: result.lenses,
            price: result.price / 100,
            img: result.imageUrl,
            description: result.description,
            total: result.price / 100
        }
        return productSelected
    }

    addProduct(result){

        let ls = this.createLocalStorage(result)
        this.initialyzeCart()

        let button = document.getElementById('add-button')
        button.addEventListener('click', () => {

            //Check if the product is in cart
            let isProductInCart = this.content.find(result => result.name == ls.name)

            //If yes, we increment the quantity and, we calculate the total price
            if(isProductInCart){
                isProductInCart.quantity += 1
                ls.total = ls.price * isProductInCart.quantity
                this.save() // We define a localStorage about selected product
                this.update()
            }else{ //Else, we add a product in cart
                this.content.push(ls)
                this.save()
                this.update()
            }
        })

    }
    /**
     * Allow to update cart when we get one or more product in it
     */
    update(){
        if(this.content !== null){
            let quantity = this.content.reduce(function(total, product){
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
        if(this.content === null) { return }
        for(let product of this.content){
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
            this.addQuantity(product)
            this.removeQuantity(product)
            this.totalCard()
        }
    }

    /**
     * Calculate the total of cart
     */
    totalCard(){
        if(this.content === null) { return }
        let totalWithoutTaxes = this.content.reduce(function(total, product){
            return total + product.total
        }, 0)
        document.getElementById("total").innerHTML = totalWithoutTaxes+' €'
    }

    /**
     * Allow to add a product in a cart
     * @param {*} product 
     */

    addQuantity(product){
        let addButton = document.getElementById(`${product.name}-add`)
        addButton.addEventListener('click', () => { 
            let quantityInCart = document.getElementById(`${product.name}-quantity`)
            let totalItems = document.getElementById(`${product.name}-total`)
            product.quantity++
            product.total = product.quantity * product.price
            quantityInCart.innerHTML = `Qty : ${product.quantity}`
            totalItems.innerHTML = `<strong>${product.price * product.quantity}</strong> €`
            this.save()
            this.totalCard()
        })
    }

    /**
     * Allow to remove a product in a cart
     * @param {*} product 
     */
    removeQuantity(product){
        let removeButton = document.getElementById(`${product.name}-remove`)
        removeButton.addEventListener('click',  () => {
            let quantityInCart = document.getElementById(`${product.name}-quantity`)
            let totalItems = document.getElementById(`${product.name}-total`)
            product.quantity--
            product.total = product.quantity * product.price

            if(product.quantity == 0){
                let itemDeleted = this.content.indexOf(product); //Verifying if selected product belongs to array's product
                this.content.splice(itemDeleted, 1) // Remove our line 
                this.save() //Refresh the localStorage
                window.location.reload(); //Refresh the current page 
            }else{
                quantityInCart.innerHTML = `Qty : ${product.quantity}`
                totalItems.innerHTML = `<strong>${product.price * product.quantity}</strong> €`
                this.save()
            }
            this.totalCard() // Calculate again the total price of the cart
        })
    }
}