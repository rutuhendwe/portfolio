function resumefile(){
    alert("Hired succesfully");
}


function changebg(){
    var scrollvalue = window.scrollY; //checking the scroll value
    // console.log("scrollvalue");
    
    var nav = document.getElementsByTagName("nav");
    if(scrollvalue < 150)
    {
        nav.classList.remove('bgcolor');
    }else{
        nav.classList.add('bgcolor');
    }

}
window.addEventListener('scroll', changebg);