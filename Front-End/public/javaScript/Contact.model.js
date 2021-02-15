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
    
    setStreetName(streetName){
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

    verifyingForm(firstName, lastName, streetName, streetNumber, city, postalCode, email){

        let checkFirstName = this.checkString(firstName)
        let checkLastName = this.checkString(lastName)
        let checkStreetName = this.checkString(streetName)
        let checkCity = this.checkString(city)
        let checkStreetNumber = this.checkNumber(streetNumber)
        let checkPostalCode = this.checkNumber(postalCode)
        let checkEmail = this.checkEmail(email)

        let validation = false

        
        //Checking firstName
        if(checkFirstName[0] == true){
            this.setFirstName(firstName)
            validation = true
        }else{
            document.querySelector('#firstNameError').innerHTML = `${checkFirstName[1]}`
            validation = false
        }

        //Checking lastName
        if(checkLastName[0] == true){
            this.setlastName(lastName)
            validation = true
        }else{
            document.querySelector('#lastNameError').innerHTML = `${checkLastName[1]}`
            validation = false
        }

        //Checking streetName
        if(checkStreetName[0] == true){
            this.setStreetName(streetName)
            validation = true
        }else{
            document.querySelector('#streetNameError').innerHTML = `${checkStreetName[1]}`
            validation = false
        }

        //Checking city
        if(checkCity[0] == true){
            this.setCity(city)
            validation = true
        }else{
            document.querySelector('#cityNameError').innerHTML = `${checkCity[1]}`
            validation = false
        }

        //Checking streetNumber
        if(checkStreetNumber[0] == true){
            this.setStreetNumber(parseInt(streetNumber))
            validation = true
        }else{
            document.querySelector('#streetNumberError').innerHTML = `${checkStreetNumber[1]}`
            validation = false
        }

         //Checking postalCode
         if(checkPostalCode[0] == true){
            this.setPostalCode(parseInt(postalCode))
            validation = true
        }else{
            document.querySelector('#postalCodeError').innerHTML = `${checkPostalCode[1]}`
            validation = false
        }

        //Checking email
        if(checkEmail[0] == true){
            this.setEmail(email)
            validation = true
        }else{
            document.querySelector('#emailError').innerHTML = `${checkEmail[1]}`
            validation = false
        }
        return validation
    }

    /**
     * Do a checklist of a given string value and return an array
     * 
     * @param {string} data 
     * @return Array [bool, string]
     */
    checkString(data){
    
        let errors = 0
        let msg = ""
        let result = true
        let arr = []

        let query = new RegExp('[a-zA-ZéèêÉÈÊ\s\-]+')

        if(!data){
            errors++
            msg = "Vous devez saisir une valeur"
        }else if(data.length < 3 || data.length >= 50){
            errors++
            msg = "Votre saisie doit être comprise entre 3 et 50 caractères"
        }else if(!query.test(data)){
            errors++
            msg = "Votre saisie ne doit être composée que de lettres"
        }
        if(errors > 0){
            result = false
        }
    
        return arr = [result, msg]
    }
    
    /**
     * Do a checklist of a given number value and return an array
     * 
     * @param {number} data 
     * @return Array [bool, string]
     */
    checkNumber(data){
        let query = new RegExp('[0-9]+')
        let errors = 0
        let msg = ""
        let result = true
        let arr = []

        if(!data){
            errors++
            msg = "Vous devez saisir une valeur"
        }else if(data.length < 1 || data.length > 6 ){
            errors++
            msg = "Votre saisie doit être comprise entre 3 et 5 chiffres"
        }else if(!query.test(data)){
            errors++
            msg = "Votre saisie ne doit être composée que de chiffres"
        }

        if(errors > 0){
            result = false
        }

        return arr = [result, msg]
    }

    /**
     * Do a checklist of a given email value and return an array
     * 
     * @param {number} data 
     * @return Array [bool, string]
     */
    checkEmail(data){
        let query = new RegExp("[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)")
        let errors = 0
        let msg = ""
        let result = true
        let arr = []

        if(!data){
            errors++
            msg = "Vous devez saisir une valeur"
        }else if(!query.test(data)){
            errors++
            msg = "Votre email est invalide"
        }

        if(errors > 0){
            result = false
        }

        return arr = [result, msg]
    }

    /**
     * Create a member and send a new number of order
     */
    createMember(){
        
        var firstName = document.querySelector('#firstName').value
        var lastName = document.querySelector('#lastName').value
        var streetNumber = document.querySelector('#number').value
        var streetName = document.querySelector("#address").value
        var city = document.querySelector('#city').value
        var postalCode = document.querySelector('#postalCode').value
        var email = document.querySelector('#email').value

        /** Verifying form and create a member */

        let validation = this.verifyingForm(firstName, lastName, streetName, streetNumber, city, postalCode, email)

        if(validation == true){
            let number = this.createRandomOrderNumber(0, 100000000)
            this.setOrder(number)
        }else{
            return
        }
        
    }
    /**
     * Generate a rambom number between min and max
     * @param {*} min 
     * @param {*} max 
     */
    createRandomOrderNumber(min, max){
            return Math.floor(Math.random() * (max - min + 1 )) + min
    }

}