function hide() {
    
    var TableID = document.getElementById("table");
    var button = document.getElementById("ToggleButton");
    if(button.value == "Hide") button.value = "Show";
    else button.value = "Hide";
    TableID.style.display = (TableID.style.display == 'none') ? "table" : "none";
    
}