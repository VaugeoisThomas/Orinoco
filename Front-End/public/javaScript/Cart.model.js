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

    /**
     * Set items on LocalStorage
     */
    save(){
        localStorage.setItem("item", JSON.stringify(this.content))
    }

    /**
     * Create an object for the LocalStorage
     * @param {*} result 
     */
    createLocalStorage(result){
        var name = document.querySelector('.card-name').textContent
        var price = document.querySelector('.card-price').textContent
        var description = document.querySelector('.card-text').textContent
        var lenses = document.querySelector('.lenses-selected').value

        console.log(lenses)

        let productSelected = {
            name: name,
            id: result._id,
            quantity: 1,
            lense: lenses,
            price: parseInt(price),
            img: result.imageUrl,
            description: description,
            total: parseInt(price)
        }
        return productSelected
    }

    /**
    * Allow to update cart when we get one or more product in it
    */
    update(){
        let quantity 
    
        if(this.content !== null){
            quantity = this.content.reduce(function(total, product){return total + product.quantity}, 0)
        }else{
        quantity = 0
        }
        document.getElementById('quantity').innerHTML = quantity
    }
    
    addProducts(result){

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
            }else{ //Else, we add a product in cart
                this.content.push(ls)
            }
            this.save()
            this.update()
        })

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
                window.location.reload()
            }else{
                quantityInCart.innerHTML = `Qty : ${product.quantity}`
                totalItems.innerHTML = `<strong>${product.price * product.quantity}</strong> €`
            }
            this.save()
            this.totalCard() // Calculate again the total price of the cart
        })
    }
    
    /**
     * Calculate the total of cart
     */
    totalCard(){
        if(this.content === null) { return }
        let totalWithoutTaxes = this.content.reduce(function(total, product){return total + product.total}, 0)
        document.getElementById("total").innerHTML = totalWithoutTaxes+' €'
    }

    displayOrder() {

        let btnOrdering = document.querySelector('#ordering-button')
        btnOrdering.addEventListener('click', () => {

            const contact = new Contact
            
            /** Registration of contact member */
            contact.createMember()

            /** Creation of a random order number  */
            //this.createRandomOrderNumber()
        
            /** Displaying the order with gratefull */

            // alert('Bravo')
        })
    }
}