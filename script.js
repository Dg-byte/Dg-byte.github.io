window.onscroll = function(e){
    console.log(window.scrollY)
    if(window.scrollY >= 969 && window.scrollY < 1200){
        document.querySelector(".abm").id ="fixed";
    }
    else if(window.scrollY >= 1200){
        document.querySelector(".abm").id="";
    }
}