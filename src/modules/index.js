const db = require("../database/connection");
const Op = db.Sequelize.Op;
class Models{
    async GET_ALL(datas){
        try{
            var response = await datas.table.findAll()
            return {
                statusCode: 200,
                mensage: response
            }
        }
        catch(error){
            return {
                statusCode: 500,
                mensage: 'Erro no servidor: '+error
            }
        }
    }
    async POST(datas){
        try{
            var response = await datas.table.create(datas.params)
            return {
                statusCode: 200,
                mensage: response
            }
        }
        catch(error){
            return {
                statusCode: 500,
                mensage: 'Erro no servidor: '+error
            }
        }
    }
    async PUT(datas){
        try{
            var response = await datas.table.update(datas.params, {
                where: {
                    id: datas.id
                }
            })
            return {
                statusCode: 200,
                mensage: response
            }
        }
        catch(error){
            return {
                statusCode: 500,
                mensage: 'Erro no servidor: '+error
            }
        }
    }
    async DELETE(datas){
        try{
            var response = await datas.table.destroy({
                where: {
                    id: datas.id
                }
            })
            return {
                statusCode: 200,
                mensage: response
            }
        }
        catch(error){
            return {
                statusCode: 500,
                mensage: 'Erro no servidor: '+error
            }
        }
    }
    async GET_ID(datas){
        try{
            var response = await datas.table.findOne({
                where:{
                    id: datas.id
                }
            })
            return {
                statusCode: 200,
                mensage: response
            }
        }
        catch(error){
            return {
                statusCode: 500,
                mensage: 'Erro no servidor: '+error
            }
        }
    }
    async GET_PAG(datas){
        try{
            var response = await datas.table.findAndCountAll({
                limit: datas.config.limit,
                offset: (datas.config.pag - 1) * datas.config.limit
            })
            return {
                statusCode: 200,
                mensage: response
            }
        }
        catch(error){
            return {
                statusCode: 500,
                mensage: 'Erro no servidor: '+error
            }
        }
    }
    async GET_SEARCH(datas){
        var search = datas.search.replace(/ /g, "%")
        try{
            var response = await datas.table.findAll({
                where: { 
                    search: { 
                        [Op.like]: `%${search}%`
                    }
                }
            })
            return {
                statusCode: 200,
                mensage: response
            }
        }
        catch(error){
            return {
                statusCode: 500,
                mensage: 'Erro no servidor: '+error
            }
        }
    }
}

module.exports = new Models()