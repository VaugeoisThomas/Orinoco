class Contact {
    constructor(firstName, lastName, streetNumber, streetName, postalCode, city, email, order){
        this.firstName = firstName
        this.lastName = lastName
        this.streetNumber = streetNumber
        this.streetName = streetName
        this.postalCode = postalCode
        this.city = city
        this.email = email
        this.order = order
    }

    setFirstName(firstName){
        this.firstName = firstName
    }

    setlastName(lastName){
        this.lastName = lastName
    }

    setStreetNumber(streetNumber){
        this.streetNumber = streetNumber
    }
    
    setstreetName(streetName){
        this.streetName = streetName
    }

    setPostalCode(postalCode){
        this.postalCode = postalCode
    }

    setCity(city){
        this.city = city
    }

    setEmail(email){
        this.email = email
    }
    
    getOrder(){
        return order
    }

    setOrder(order){
        this.order = order
    }


    createMember(){

        /** Get all datas of form */
        
        var firstName = document.querySelector('#firstName').value
        var lastName = document.querySelector('#lastName').value
        var streetNumber = document.querySelector('#number').value
        var streetName = document.querySelector("#adress").value
        var city = document.querySelector('#city').value
        var postalCode = document.querySelector('#postalCode').value
        var email = document.querySelector('#email').value

        /** Verifying form and create a member */

        let form = document.querySelector("#form").checkValidity()

        console.log(form)

        if(form == true ){
            this.setFirstName(firstName)
            this.setlastName(lastName)
            this.setStreeNumber(streetNumber)
            this.setStreetName(streetName)
            this.setCity(city)
            this.setPostalCode(postalCode)
            this.setEmail(email)
        } else {
            return "Il y a des erreurs dans les coordonnées"
        }
    }

    createRandomOrderNumber(min, max){
            return Math.floor(Math.random() * (max - min + 1 )) + min
    }

    displayOrder() {
        let buttonOrdering = document.querySelector('#ordering-button')
        buttonOrdering.addEventListener('click', () => {

            /** Registration of contact member */
            this.createMember()

            /** Creation of a random order number  */
            this.createRandomOrderNumber()
            
            /** Displaying the order with gratefull */

            alert('Bravo')
            
        })
    }
}