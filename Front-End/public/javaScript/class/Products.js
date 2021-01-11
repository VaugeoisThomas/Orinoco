class Products {
    /**
     * Get in asychronous way data of API
     * @param {*} url 
     */
    async getProducts(url){
        try{
            let response = await fetch(url)
            let result = await response.json()
            return result
        }catch (error){
            console.log(error)
        }
    }
    
    /**
     * Return a display of all products
     * @param {*} result
     */
    displayAll(result) {
        /**
         * For each products, we take element with "product" id
         * We converte price
         * We display with a card element after the first element
         */
        result.forEach(product => {

            const products = document.querySelector("section")

            //Definition of the card component to display all products
            let renderedUserInterface = `
                <div class="card">
                    <img class="card-img" src="${product.imageUrl}" alt="Card Image" />
                    <div class="card-body">
                        <h3 class="card-title">${product.name}</h3>
                        <h4 class="card-title">${product.price / 100}€</h4>
                    </div>
                    <div class="card-footer">
                        <a href="product.html?id=${product._id}" title="Voir plus !" class="btn stretched-link"><i class="fas fa-search-plus"></i></a>
                    </div>
                </div>`
            products.insertAdjacentHTML("afterbegin", renderedUserInterface)
        })
    }

    /**
     * Return a display of a selected product
     * @param {*} result 
     */
    displayOne(result){
        const productSelected = document.querySelector("section")
        const lensesNumber = result.lenses.length
        
        let renderedUserInterface = `
            <div class="card card--selected">
                <img class="card-img" src="${result.imageUrl}" alt="Card Image" />
                <div class="card-body">
                    <h3 class="card-title">${result.name}</h3>
                    <p class="card-text">${result.description}</p>
                    <div id="product-selected">
                        <select name="lenses" id="lenses-selected">
                            <option value="">Tailles des lentilles</option>
                        </select>
                    </div>
                    <h4 class="card-title">${result.price / 100}€</h4>
                </div>
                <div class="card-footer">
                    <a href="" title="Ajouter au panier" class="btn stretched-link" id="add-button"><i class="fas fa-plus-circle"></i></a>
                </div>
            </div>`
        productSelected.insertAdjacentHTML("beforeend", renderedUserInterface)
        const lensesTag = document.getElementById("lenses-selected")
        for (let i = 0; i < lensesNumber; i++){
            lensesTag.insertAdjacentHTML('beforeend', `<option value="${result.lenses[i]}">${result.lenses[i]}</option>`)
        }
    }

    addASelectedProductInACart(result){
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
        let ourCart = new Cart
        let addButton = document.getElementById('add-button')
        addButton.addEventListener('click', function(e){

            //If our cart don't exist we initialyze him.
            if(!ourCart.itemInCart){
                console.log(ourCart.itemInCart = [])
            }
            //Check if the product is in cart
            let isProductInCart = ourCart.itemInCart.find(result => result.name == productSelected.name)

            //If yes, we increment the quantity and, we calculate the total price
            if(isProductInCart){
                isProductInCart.quantity += 1
                productSelected.total = productSelected.price * isProductInCart.quantity
                localStorage.setItem('item', JSON.stringify(ourCart.itemInCart)) // We define a localStorage about selected product
                ourCart.update()
            }else{ //Else, we add a product in cart
                ourCart.itemInCart.push(productSelected)
                localStorage.setItem('item', JSON.stringify(ourCart.itemInCart))
                ourCart.update()
            }
        })

    }
}