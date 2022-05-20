function changeSizeBySlider() {
    var cont = document.getElementById("rangeSize");

    var slider = document.getElementById("slider");
    // Set slider value as fontSize
    cont.style.fontSize = slider.value + "px";
    cont.style.lineHeight = slider.value + "px";
}