function messages(Cmessage,Cstatus){
this.returnList = {message:Cmessage, status:Cstatus};
}

let mess = new messages("this is message",200);
module.exports = mess.returnList;