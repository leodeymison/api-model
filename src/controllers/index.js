const Models = require('../modules/index')
const Validate = require('../middleware/validation/data')
class Params{
    async GET_ALL(data){
        try{
            var response = await Models.GET_ALL(data)
            return {
                statusCode: response.statusCode,
                mensage: response.mensage
            }
        }
        catch(error){
            return {
                statusCode: 500,
                mensage: 'Erro na busca: '+error
            }
        }
    }
    async POST(data){
        // Validação dos dados
        data.validations.forEach(element => {
            var valid = Validate.Start(element) 
            if(valid.error !== false){
                return {
                    statusCode: valid.status,
                    mensage: valid.error
                }
            }
        });
        
        try{
            var response = await Models.POST(data)
            return {
                statusCode: response.statusCode,
                mensage: response.mensage
            }
        }
        catch(error){
            return {
                statusCode: 500,
                mensage: 'Erro na busca: '+error
            }
        }
    }
    async DELETE(data){
        try{
            var response = await Models.DELETE(data)
            return {
                statusCode: response.statusCode,
                mensage: response.mensage
            }
        }
        catch(error){
            return {
                statusCode: 500,
                mensage: 'Erro na busca: '+error
            }
        }
    }
    async PUT(data){
        try{
            var response = await Models.PUT(data)
            return {
                statusCode: response.statusCode,
                mensage: response.mensage
            }
        }
        catch(error){
            return {
                statusCode: 500,
                mensage: 'Erro na busca: '+error
            }
        }
    }
    async GET_ID(data){
        try{
            var response = await Models.GET_ID(data)
            return {
                statusCode: response.statusCode,
                mensage: response.mensage
            }
        }
        catch(error){
            return {
                statusCode: 500,
                mensage: 'Erro na busca: '+error
            }
        }
    }
    async GET_PAG(data){
        try{
            var response = await Models.GET_PAG(data)
            return {
                statusCode: response.statusCode,
                mensage: response.mensage
            }
        }
        catch(error){
            return {
                statusCode: 500,
                mensage: 'Erro na busca: '+error
            }
        }
    }
    async GET_SEARCH(data){
        try{
            var response = await Models.GET_SEARCH(data)
            return {
                statusCode: response.statusCode,
                mensage: response.mensage
            }
        }
        catch(error){
            return {
                statusCode: 500,
                mensage: 'Erro na busca: '+error
            }
        }
    }
}

module.exports = new Params()