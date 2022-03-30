window.onscroll = function() {myFunction()};

var header = document.querySelector("#header");

var sticky = header.offsetTop;





function myFunction()
{
   

    if(window.pageYOffset > sticky)
    {
        header.classList.add("sticky");
        console.log("Executed")

    }
    else
    {
        header.classList.remove("sticky")
    }



}
