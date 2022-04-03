document.querySelector("form").addEventListener('submit',myFunction);
console.log("Working")
    function myFunction()
    {
        event.preventDefault();
       var email =  document.querySelector("#username").value;
    //    var pass =  document.querySelector("#pass").value;
        console.log("Working")
       var data = JSON.parse(localStorage.getItem("database"));
       var isPresent = false;
       data.forEach(element => {
           if(email == element.email)
           {
               var msg = "Successful Login";
               alert(msg)
            //    document.querySelector("#status").textContent = "Successfully Logged In. Will be redirected to HOME";
            //    document.querySelector("#status").style.color = "#01ff29"
            //    setTimeout(function(){
            //     window.location.href ="index.html"
            //    },4000);
               isPresent = true;

               
               
               
           }
           
       });
       if(!isPresent)
       {
           alert("Wrong Credentials..!")
       }
    }