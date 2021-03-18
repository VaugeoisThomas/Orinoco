class Contact {
    constructor(firstName, lastName,adress , city, email){
        this.firstName = firstName
        this.lastName = lastName
        this.adress = adress
        this.city = city
        this.email = email
    }

    setFirstName(firstName){
        this.firstName = firstName
    }

    setlastName(lastName){
        this.lastName = lastName
    }

    setAddress(address){
        this.address = address
    }

    setCity(city){
        this.city = city
    }

    setEmail(email){
        this.email = email
    }

    setOrder(order){
        this.order = order
    }

    verifyingForm(firstName, lastName, adress, city, email){

        let checkFirstName = this.checkString(firstName)
        let checkLastName = this.checkString(lastName)
        let checkAddress = this.checkAddress(address)
        let checkCity = this.checkString(city)
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
        if(checkAddress[0] == true){
            this.setAddress(address)
            validation = true
        }else{
            document.querySelector("#addressError").innerHTML = `${checkAddress[1]}`
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

    checkAddress(data){
            
        let errors = 0
        let msg = ""
        let result = true
        let arr = []

        let query = new RegExp('[0-9a-zA-ZéèêÉÈÊ\s\-]+')

        if(!data){
            errors++
            msg = "Vous devez saisir une valeur"
        }else if(data.length < 3 || data.length >= 50){
            errors++
            msg = "Votre saisie doit être comprise entre 3 et 50 caractères"
        }else if(!query.test(data)){
            errors++
            msg = "Votre saisie n'est pas correcte"
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
     * Create a member
     */
    createMember(){
        
        var firstName = document.querySelector('#firstName').value
        var lastName = document.querySelector('#lastName').value
        var address = document.querySelector('#address').value
        var city = document.querySelector('#city').value
        var email = document.querySelector('#email').value

        /** Verifying form and create a member */

        let validation = this.verifyingForm(firstName, address, lastName, city, email)
        
        if(validation == true){
            this.setFirstName(firstName)
            this.setlastName(lastName)
            this.setAddress(address)
            this.setCity(city)
            this.setEmail(email)
        }
    }
}