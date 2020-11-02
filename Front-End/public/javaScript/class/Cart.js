class Cart{
    constructor(){
        this.cart = JSON.parse(localStorage.getItem('items'))
    }
    /**
     * Allow to add a product on the cart
     * @param {*} result 
     */
    getItemAddedToCart(result){
        //Definition of a LocalStorage with a selected item
        let selectedItem = {
            name: result.name,
            id: result._id,
            quantity: 1,
            price : result.price/100,
            description: result.description,
            total: result.price/100
        }
    }

    itemAddToCart(){
        // Definition of an 'addbutton' to add element on LocalStorage on button click;
        let addButton = document.getElementById("add-button")
        addButton.addEventListener('click', function(e){
            
            //If the cart is empty, we initialyze him.
            if(!cart) {
                cart = []
            }

            let itemInCart = cart.find(result => result.name == selectedItem.name)
            console.log(itemInCart)
            
            if(itemInCart){
                itemInCart.quantity++
                selectedItem.total = selectedItem.price * itemInCart.quantity
                localStorage.setItem('items', JSON.stringify(cart))
                cart.update()
            }else{
                itemStored.push(selectedItem)
                localStorage.setItem('items', JSON.stringify(cart))
                cart.update()
            }
        })
    }
    //Udpate
    update(){ 
        if(cart !== null){
            let quantity = cart.reduce(function(total, product){
                return total + product.quantity
            }, 0)
            let total = cart.reduce(function(total, product){
                return total + product.productPrice
            }, 0)
            document.getElementById('quantity').innerHTML = quantity
        } else {
            let quantity = 0
            document.getElementById('quantity').innerHTML = quantity
        }
    }
    //Display
    display(){
        if (cart === null) {
            return
        }

        /*for (let product of cart) {
            let cartRendered = `
            <div class="cart-wrapper">
                <div class="cart-wrapper-img">
                    <img src="${product.image}" alt="item's picture">
                </div>
                <div class="cart-wrapper-infos">
                    <div class="cart-wrapper-infos-name">${product.name}</div>
                    <div class="cart-wrapper-infos-price">${product.Price}€</div>
                    <div class="cart-wrapper-infos-counterAndModifier">
                        <div class="cart-wrapper-infos-counterAndModifier-modify">
                            <button class="cart-wrapper-infos-counterAndModifier-modify-removeOne" id='${product.name}Remove'>-</button>
                            <p class="cart-wrapper-infos-counterAndModifier-modify-quantityValue" id='${product.name}Qty'>${product.quantity}</p>
                            <button class="cart-wrapper-infos-counterAndModifier-modify-addOne" id='${product.name}Add'>+</button>
                        </div>
                        <div class="cart-wrapper-infos-counterAndModifier-totalPrice" id='${product.name}Total'><strong>${product.Price*product.quantity}</strong> €</div>
                        <div class="cart-wrapper-infos-counterAndModifier-remove" id='${product.name}Delete'>
                        </div>
                
                    </div>
                        
                </div>
            </div>`
            
            cartSection.insertAdjacentHTML("afterend", cartRendered);
              
            //ModifyQuantityProduct(product) 
            //TotalPrice()            
        }*/
    }
    //Remove

    //Send
}