var count = 0;

function get_value() {
    count = count + 1;
    var input = document.getElementById("input").value;
    document.getElementById("output").innerHTML += "<li id='value_" + count + "'>" + input + " <button id='button_" + count + "'> x </button> </li> <br>";

};

document.getElementById("hallo").addEventListener("click", function() {
    alert("Test");
});

//to do 
// verknüpfen von löschen button mit id des values
    //info für zugehörigen value schon in button gespeichert?
//löschen


