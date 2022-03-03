class Validate {
    Start(element){
        var data;
        if(typeof(element.body) === 'number'){data = element.body}
        
        if(element.body !== null && typeof(element.body) == "string"){
            data = element.body.trim()

            // Undefined
            var resUndefined = this.Undefined(data, element.name, element.undefined)
            if(resUndefined.error !== false){return {
                error: resUndefined.error,
                status: resUndefined.status
            }}
        }
        
        // Null
        var resNull = this.Null(element.body, element.name, element.null)
        if(resNull.error !== false){return {
            error: resNull.error,
            status: resNull.status
        }}

        // Max
        var resMax = this.Max(element.body, element.name, element.max)
        if(resMax.error !== false){return {
            error: resMax.error, 
            max: resMax.max,
            status: resMax.status
        }}

        // Min
        var resMin = this.Min(element.body, element.name, element.min)
        if(resMin.error !== false){return {
            error: resMin.error, 
            min: resMin.min,
            status: resMin.status
        }}

        // E-mail
        var resEmail = this.Email(element.body, element.name, element.email)
        if(resEmail.error !== false){return {
            error: resEmail.error,
            status: resEmail.status
        }}

        var resNumber = this.Number(element.body, element.name, element.isNumber)
        if(resNumber.error !== false){return {
            error: resNumber.error,
            status: resNumber.status
        }}

        return{
            error: false,
            status: 200
        }
    }

    Undefined(data, name, typeError){
        if(typeError == false){
            if(typeof(data) == "number"){
                var string = `${data}`
                if(string.length > 0){
                    return {
                        error: false,
                        status: 200
                    }
                }
                else{
                    return {
                        error: `Campo ${name} obrigatório`,
                        status: 406
                    }
                }
                
            }
            if(typeof(data) == "string"){
                if(data == undefined || data == ""){
                    return {
                        error: `Campo ${name} obrigatório`,
                        status: 406
                    }
                }
                else{
                    return {
                        error: false,
                        status: 200
                    }
                }
            }
        }
        else{
            return {
                error: false,
                status: 200
            }
        }
    }

    Null(data, name, typeError){
        if(typeError == false){
            if(data == null){
                return {
                    error: `Campo ${name} obrigatório`,
                    status: 406
                }
            }
            else{
                return {
                    error: false,
                    status: 200
                }
            }
        }
        else{
            return {
                error: false,
                status: 200
            }
        } 
    }

    Max(data, name, typeError){
        typeError--
        if(typeError !== false){
            if(data.length >= typeError){
                return {
                    error: `Quantidade de caractéries no campo ${name} ultrapassada`,
                    max: typeError,
                    status: 406
                }
            }
            else{
                return {
                    error: false,
                    status: 200
                }
            }
        }
        else{
            return {
                error: false,
                status: 200
            }
        } 
    }

    Min(data, name, typeError){
        typeError--
        if(typeError !== false){
            if(data.length <= typeError){
                return {
                    error: `Quantidade de caractéries no campo ${name} muito baixa`,
                    min: typeError,
                    status: 406
                }
            }
            else{
                return {
                    error: false,
                    status: 200
                }
            }
        }
        else{
            return {
                error: false,
                status: 200
            }
        } 
    }

    Email(data, name, typeError){
        if(typeError !== false){
            var arroba = data.indexOf("@")
            if(arroba < 0){
                return {
                    error: `Campo ${name} não é um email`,
                    min: typeError,
                    status: 406
                }
            }
            else{
                return {
                    error: false,
                    status: 200
                }
            }
        }
        else{
            return {
                error: false,
                status: 200
            }
        }
    }

    Number(data, name, typeError){
        if(typeError !== false){
            if(typeof(data) !== "number"){
                return {
                    error: `Campo ${name} não é um número`,
                    status: 406
                }
            }
            else{
                return {
                    error: false,
                    status: 200
                }
            }
        }
        else{
            return {
                error: false,
                status: 200
            }
        } 
    }
}

// var validate = new Validate

// console.log(validate.Start({
//     name: "Projeto",
//     body: "123",
//     undefined: false,
//     null: false,
//     max: 11,
//     min: 1,
//     email: false,
//     isNumber: true
// }))


module.exports = new Validate()