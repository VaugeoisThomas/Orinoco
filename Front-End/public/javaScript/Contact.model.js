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

    /**
     * Do a checklist of a given string value and return an array
     * 
     * @param {string} value 
     * @return Array [bool, string]
     */
    checkString(value){

        
        let errors = 0
        let msg = ""
        let result = true
        let arr = []

        let query = new RegExp('[a-zA-ZéèêÉÈÊ\s\-]+')
           
        if(value == ""){
            errors++
            msg = "Vous devez saisir une valeur"
        }
        if(value.length < 3  && value.length >= 50){
            errors++
            msg = "Votre saisie doit être comprise entre 3 et 50 caractères"
        }
        if(!query.test(value)){
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
     * @param {number} value 
     * @return Array [bool, string]
     */
    checkNumber(value){
        let query = new RegExp('[0-9]+')
        let errors = 0
        let msg = ""
        let result = true
        let arr = []

        if(value == ""){
            errors++
            msg = "Vous devez saisir une valeur"
        }
        if(value.length < 1 && value.length > 5 ){
            errors++
            msg = "Votre saisie doit être comprise entre 3 et 5 chiffres"
        }
        if(!query.test(value)){
            errors++
            msg = "Votre saisie ne doit être composée que de chiffres"
        }

        if(errors > 0){
            result = false
        }

        return arr = [result, msg]
    }

    checkEmail(value){
        let query = new RegExp("[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)")
        let errors = 0
        let msg = ""
        let result = true
        let arr = []

        if(value == ""){
            errors++
            msg = "Vous devez saisir une valeur"
        }
        if(!query.test(value)){
            errors++
            msg = "Votre saisie ne doit être composée que de chiffres"
        }

        if(errors > 0){
            result = false
        }

        return arr = [result, msg]
    }

    createMember(){
        
        var firstName = document.querySelector('#firstName').value
        var lastName = document.querySelector('#lastName').value
        var streetNumber = parseInt(document.querySelector('#number').value)
        var streetName = document.querySelector("#address").value
        var city = document.querySelector('#city').value
        var postalCode = parseInt(document.querySelector('#postalCode').value)
        var email = document.querySelector('#email').value

        /** Verifying form and create a member */

        let checkFirstName = this.checkString(firstName)
        let checkLastName = this.checkString(lastName)
        let checkStreetName = this.checkString(streetName)
        let checkCity = this.checkString(city)
        let checkStreetNumber = this.checkNumber(streetNumber)
        let checkPostalCode = this.checkNumber(postalCode)
        let checkEmail = this.checkEmail(email)


        //Checking firstName
        if(checkFirstName[0] == true){
            this.setFirstName(firstName)
        }else{
            document.querySelector('#firstNameError').innerHTML = `${checkFirstName[1]}`
        }

        //Checking lastName
        if(checkLastName[0] == true){
            this.setlastName(lastName)
        }else{
            document.querySelector('#lastNameError').innerHTML = `${checkLastName[1]}`
        }

        //Checking streetName
        if(checkStreetName[0] == true){
            this.setStreetName(streetName)
        }else{
            document.querySelector('#streetNameError').innerHTML = `${checkStreetName[1]}`
        }

        //Checking city
        if(checkCity[0] == true){
            this.setCity(city)
        }else{
            document.querySelector('#cityNameError').innerHTML = `${checkCity[1]}`
        }

        //Checking StreetNumber
        if(checkStreetNumber[0] == true){
            this.setStreetNumber(streetNumber)
        }else{
            document.querySelector('#streetNumberError').innerHTML = `${checkStreetNumber[1]}`
        }

         //Checking postalCode
         if(checkPostalCode[0] == true){
            this.setPostalCode(postalCode)
        }else{
            document.querySelector('#postalCodeError').innerHTML = `${checkPostalCode[1]}`
        }

        if(checkEmail[0] == true){
            this.setEmail(email)
        }else{
            document.querySelector('#emailError').innerHTML = `${checkEmail[1]}`
        }
        console.log(this)
    }


    createRandomOrderNumber(min, max){
            return Math.floor(Math.random() * (max - min + 1 )) + min
    }

}