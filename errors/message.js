class Messages {
    constructor(message,status){
        this.message = message;
        this.status = status;
        this.returnList = {message:this.message, status:this.status};
    }
returnMsg(){
    return this.returnList;
}
}

let mess = new Messages("this is messages",200);
module.exports = mess.returnMsg();