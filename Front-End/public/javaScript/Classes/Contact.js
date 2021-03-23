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

    verifyingForm(firstName, lastName, address, city, email){

        let checkFirstName = this.check(firstName, '[a-zA-ZéèêÉÈÊ\s\-]+')
        let checkLastName = this.check(lastName, '[a-zA-ZéèêÉÈÊ\s\-]+')
        let checkAddress = this.check(address, '[0-9a-zA-ZéèêÉÈÊ\s\-]+')
        let checkCity = this.check(city, '[a-zA-ZéèêÉÈÊ\s\-]+')
        let checkEmail = this.check(email, "[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)")

        let validation = false

        
        //Checking firstName
        if(checkFirstName[0] == true &&  checkLastName[0] == true && checkAddress[0] == true && checkCity[0] == true && checkEmail[0] == true){
            validation = true
        }else{
            document.querySelector('.form_error').innerHTML = `${checkFirstName[1]}`
        }
        return validation
    }


    check(data, regex){
        let errors = 0,
            message = "",
            result = true,
            arr = [ result = true , message = ""],
            query = new RegExp(regex);

        if(!data){
            errors++
            message = "Vous devez saisir une valeur"
        }else if(data.length < 3 || data.length >= 50){
            errors++
            message = "Votre saisie doit être comprise entre 3 et 50 caractères"
        }else if(!query.test(data)){
            errors++
            message = "Votre saisie n'est pas valide"
        }
        if(errors > 0){
            result = false
        }
    
        return arr = [result, message]

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