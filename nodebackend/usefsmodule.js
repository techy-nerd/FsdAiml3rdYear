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
function readData(){
    let statusmsg="";
    try{
        const data=fs.readFileSync("student.txt",("utf-8"))
        statusmsg=data;
    }
    catch(e){

    }
}
function deleteFile(){
  try{
fs.unlinkSync('student.txt')
statusmsg="File deleted successfully"
  }
  catch(e){
    statusmsg=e

  }
  return statusmsg
}
function copyFile() {
    let statusmsg = "";

    try {
        const data = fs.readFileSync("studentcse.json", "utf-8");
        fs.writeFileSync("copy.json", data);

        statusmsg = "File copied successfully";
    }
    catch (e) {
        statusmsg = "Error is " + e.message;
    }

    return statusmsg;
}
const  obj={writeData,readData,deleteFile,copyFile}
module.exports=obj;