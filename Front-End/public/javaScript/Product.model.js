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
         * We convert price
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
                        <i class="card-text">${product.description}</i>
                    </div>
                    <div class="card-footer">
                        <a href="product.html?id=${product._id}" title="Voir plus !" class="btn btn-primary stretched-link">Voir plus d'informations</a>
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
        productSelected.classList.add('products--selected')
        const lensesNumber = result.lenses.length
        
        let renderedUserInterface = `
            <h1>Voici le descriptif du "${result.name}"</h1>
            <div class="card card--selected">
                <img class="card-img" src="${result.imageUrl}" alt="Card Image" />
                <div class="card-body">
                    <i class="card-text">${result.description}</i>
                    <div id="product-selected">
                        <select name="lenses" id="lenses-selected">
                            <option value="">Tailles des lentilles</option>
                        </select>
                    </div>
                    <h4 class="card-title">${result.price / 100}€</h4>
                </div>
                <div class="card-footer">
                    <button title="Ajouter au panier" class="btn stretched-link" id="add-button">Ajouter au panier</button>
                </div>
            </div>`
        productSelected.insertAdjacentHTML("beforeend", renderedUserInterface)
        const lensesTag = document.getElementById('lenses-selected')

        for (let i = 0; i < lensesNumber; i++){
            lensesTag.insertAdjacentHTML('beforeend', `<option value="${result.lenses[i]}">${result.lenses[i]}</option>`)
        }
    }
}