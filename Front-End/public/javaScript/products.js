class Products {
    constructor(_id, name, price, description, imageUrl){
        this.id = _id
        this.name = name
        this.price = price
        this.description = description
        this.imageUrl = imageUrl
    }
    async getProducts(url){
        try{
            let response = await fetch(url)
            let result = await response.json()
            return result
        }catch (error){
            console.log(error)
        }
    }

    displayAll(result) {
        result.forEach(product => {
            const productList = document.getElementById("products")
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
                        <a href="product.html?id=${product._id}" class="btn"><i class="fas fa-plus-circle"></i></a>
                    </div>
                </div>`
            productList.insertAdjacentHTML("afterbegin", renderedUserInterface)
        })
    }
}