var arrayList = new Array();
var counter = 0;
function hide() {
    
    var TableID = document.getElementById("table");
    var button = document.getElementById("ToggleButton");
    if(button.value == "Hide") button.value = "Show";
    else button.value = "Hide";
    TableID.style.display = (TableID.style.display == 'none') ? "table" : "none";
    
}
function converter() {
    var x = document.getElementById("x").value;
    var result = document.getElementById("result");
    var list = document.getElementById("list");
    var dollar = x*6.57011;
    var euro = x*9.01;
    var dollarFixed = dollar.toFixed(2);
    var euroFixed = euro.toFixed(2);
    var reverse;
    
    if(!x)
    {
        result.innerHTML = "You cannot leave the field empty.";
        return false;
    }
    if(x === "0")
    {
        result.innerHTML = "You must use a number higher than 0.";
        return false;
    }
    if(isNaN(x))
    {
        result.innerHTML = "Please use a number, not another character.";
        return false;
    }
    else
    {
        result.innerHTML = 'Euro: ' + euroFixed + ' och i dollar: ' + dollarFixed + '.';
        
        arrayList.push(x + "SEK is worth " + euroFixed + " euro and " + dollarFixed + " dollar.<br>");
        reverse = arrayList.reverse();
        list.innerHTML = reverse.join("");
    }
}
function imageShow() {
    var imgArray = ["pics/1.jpg","pics/2.jpg","pics/3.jpg"];
    var img = document.getElementById("slideShow_image");
    if(counter === imgArray.length)
    {
        counter = 0;
    }
    if(counter <= imgArray.length)
    {
        img.src = imgArray[counter];
        counter++;
    }
}
function imageChange() {
    imageShow();
    setInterval(imageShow, 5000);
}
