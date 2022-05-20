function changeSizeBySlider() {
    var cont = document.getElementsByTagName("p");

    var slider = document.getElementById("slider");
    // Set slider value as fontSize
    for (i = 0; i<cont.length; i++) 
    {
        cont[i].style.fontSize = slider.value/1.4 + "px";
        cont[i].style.lineHeight = slider.value + "px";
    }
    
}