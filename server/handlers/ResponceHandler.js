
const HTTP = require('http-status');


class ResponceHandler {

    /**     
     * @param {Object} res 
     * @param {Object} data 
     */

    static handleList(res, data) {
        return res.status(HTTP.OK).json(data)
    }
  

    static handleDelete() {

    }

    static handleUpdate() {

    }

    static handleCreate() {

    }

    static handleGet(res, data) {
        console.log(data);
        return res.status(HTTP.OK).json(data)
    }
}


module.exports = ResponceHandler;

