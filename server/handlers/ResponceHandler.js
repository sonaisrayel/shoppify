
const HTTP = require('http-status');


class ResponceHandler {

    /**     
     * @param {Object} res 
     * @param {Object} data 
     */

    static handleList(res, data) {
        return res.status(HTTP.OK).json(data)
    }
    /**     
     * @param {Object} res 
     * @param {Object} data 
     */
    static handleDelete(res, data) {
        return res.status(HTTP.OK).json(data)
    }
     /**     
     * @param {Object} res 
     * @param {Object} data 
     */
    static handleUpdate(res, data) {
        return res.status(HTTP.OK).json(data)
    }
     /**     
     * @param {Object} res 
     * @param {Object} data 
     */
    static handleCreate(res, data) {
        return res.status(HTTP.CREATED).json(data)
    }
    /**     
     * @param {Object} res 
     * @param {Object} data 
     */
    static handleGet(res, data) {
        console.log(data);
        return res.status(HTTP.OK).json(data)
    }
}


module.exports = ResponceHandler;

