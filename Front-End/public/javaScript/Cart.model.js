class Cart{
    constructor(){
        this.content = JSON.parse(localStorage.getItem('item'))
    }

    async sendProducts(url, contact, products){
        const options = {
            method: 'POST',
            body: JSON.stringify({
                contact: contact,
                product: products
            }),
            header: {
                'Content-Type': 'application/json'
            }
        }
        try {
            let resp = await fetch(url, options)
            let res = await resp.json()
            return res
        }
        catch(error){
            console.log(error)
        }
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

    remove(){
        localStorage.removeItem('item')
        this.quantityInCart = 0
    }

    /**
     * Create an object for the LocalStorage
     * @param {*} result 
     */
    createLocalStorage(result){
        let name = document.querySelector('.card-name').textContent
        let price = document.querySelector('.card-price').textContent
        let description = document.querySelector('.card-text').textContent
        let lenseList = document.querySelector('.liste')
        let lenseSelected = lenseList.options[lenseList.selectedIndex].text

        let productSelected = {
            name: name,
            id: result._id,
            quantity: 1,
            lense: lenseSelected,
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
        document.querySelector('#quantity').innerHTML = quantity
    }
    
    addProducts(result){

        this.initialyzeCart()
        
        let button = document.getElementById('add-button')
        button.addEventListener('click', () => {
            
            let ls = this.createLocalStorage(result)
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
            this.totalCard()
            this.save()
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
        let total = document.querySelector("#total")
        if(!total){
            return totalWithoutTaxes
        }else{
            total.innerHTML = totalWithoutTaxes+' €'
        }
    }

    displayOrder() {

        let btnOrdering = document.querySelector('#ordering-button')
        btnOrdering.addEventListener('click', () => {


            const contact = new Contact

            /** Registration of contact member */
            contact.createMember()
            
            /** Displaying the order with gratefull */
        })


    }
}