class Products {
    constructor(_id, name, price, description, imageUrl){
        this.id = _id
        this.name = name
        this.price = price
        this.description = description
        this.imageUrl = imageUrl
    }

    /**
     * Récupère de manière asynchrone les données de l'api
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
     * Retourne l'affichage de tous les articles 
     * @param {*} result
     */
    displayAll(result) {
        result.forEach(product => {
            const productList = document.getElementById("product")
            const ConvertedPrice = (product.price / 100)

            //On affiche les éléments dans l'élement avec l'Id "products"
            let renderedUserInterface = `
                <div class="card">
                    <img class="card-img" src="${product.imageUrl}" alt="Card Image" />
                    <div class="card-body">
                        <h3 class="card-title">${product.name}</h3>
                        <h4 class="card-title">${ConvertedPrice}€</h4>
                    </div>
                    <div class="card-footer">
                        <a href="product.html?id=${product._id}" class="btn stretched-link"><i class="fas fa-search-plus"></i></a>
                    </div>
                </div>`
            productList.insertAdjacentHTML("afterbegin", renderedUserInterface)
        })
    }

    /**
     * Retourne l'affichage d'un produit selectionné
     * @param {*} result 
     */
    displayOne(result){
        const productSelected = document.getElementById("product")
        const convertedPrice = (result.price / 100)
        
        let renderedUserInterface = `
            <div class="card one">
                <img class="card-img" src="${result.imageUrl}" alt="Card Image" />
                <div class="card-body">
                    <h3 class="card-title">${result.name}</h3>
                    <p class="card-text">${result.description}</p>
                    <h4 class="card-title">${convertedPrice}€</h4>
                </div>
                <div class="card-footer">
                    <button class="btn"><i class="fas fa-plus-circle"></i></button>
                </div>
            </div>`
        productSelected.insertAdjacentHTML("afterbegin", renderedUserInterface)
    }
}