const fs=require('fs')
const fs1=require('fs').promises
function writeData(){
    let statusmsg="";

    try{
        fs.writeFileSync("student.txt","welcome to fs module")
        console.log("data is retrived")
        statusmsg="data is retrived";
    }
    catch(e){
        console.log("error is"+e)
        statusmsg="error is"+e;
    }
    return statusmsg;
}
module.exports=writeData;