function checkPassword(){
    
   var password = document.getElementById("psw").value;
   var rePassword = document.getElementById("psw-repeat").value;

   if (password == "") {
       alert("โปรดกรอกไอสัส");
   }else{
       if(password == rePassword){
           alert("go");
           document.location.href = "./home.html";
       }else{
            alert("พาสมึงกรอกไม่ตรงกัน");
       }
   }
}