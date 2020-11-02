class Products {
    constructor(_id, name, price, description, imageUrl){
        this.id = _id
        this.name = name
        this.price = price
        this.description = description
        this.imageUrl = imageUrl
    }
    
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

            const productList = document.getElementById("product")
            const ConvertedPrice = (product.price / 100)

            //Definition of the card component to display all products
            let renderedUserInterface = `
                <div class="card">
                    <img class="card-img" src="${product.imageUrl}" alt="Card Image" />
                    <div class="card-body">
                        <h3 class="card-title">${product.name}</h3>
                        <h4 class="card-title">${ConvertedPrice}€</h4>
                    </div>
                    <div class="card-footer">
                        <a href="product.html?id=${product._id}" title="Voir plus !" class="btn stretched-link"><i class="fas fa-search-plus"></i></a>
                    </div>
                </div>`
            productList.insertAdjacentHTML("afterbegin", renderedUserInterface)
        })
    }

    /**
     * Return a display of a selected product
     * @param {*} result 
     */
    displayOne(result){
        const productSelected = document.getElementById("product")
        const convertedPrice = (result.price / 100)
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
                    <h4 class="card-title">${convertedPrice}€</h4>
                </div>
                <div class="card-footer">
                    <button class="btn stretched-link product-add-cart" id="add-button" title="Ajouter au panier"><i class="fas fa-plus-circle"></i></button>
                </div>
            </div>`
        productSelected.insertAdjacentHTML("beforeend", renderedUserInterface)
        const lensesTag = document.getElementById("lenses-selected")
        for (let i = 0; i < lensesNumber; i++){
            lensesTag.insertAdjacentHTML('beforeend', `<option value="${result.lenses[i]}">${result.lenses[i]}</option>`)
        }
    }

    /**
     * Allow to add a product on a cart
     * @param {*} result 
     */
    addToCart(result){
        //Definition of a LocalStorage with a selected item
        let selectedItem = {
            name: result.name,
            id: result._id,
            quantity: 1,
            price : result.price/100,
            description: result.description,
            total: result.price/100
        }

        const cart = new Cart()

        // Definition of a 'addbutton' to add element on LocalStorage on button click;
        let addButton = document.getElementById("add-button")
        addButton.addEventListener('click', function(e){
            let itemStored = JSON.parse(localStorage.getItem('items'))
            if(!itemStored){
                itemStored = []
            }    
            const itemInCart = itemStored.find(result => result.name == selectedItem.name)
            
            if(itemInCart){
                itemInCart.quantity++
                selectedItem.total = selectedItem.price * itemInCart.quantity
                var item = localStorage.setItem('items', JSON.stringify(itemStored))
                cart.update()
            }else{
                itemStored.push(selectedItem)
                var item = localStorage.setItem('items', JSON.stringify(itemStored))
                cart.update()
            }
        })
    }
}