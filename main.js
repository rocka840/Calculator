var cache = 0;

function clickbutton(x) { //alert("You clicked on " + x)

    document.getElementById("result").value += x;

    if (document.getElementById("plusBtn").classList.contains("turnon")) { // Check if button contains the class "turnon"
        cache = document.getElementById("result") // If true, the button needs to be disabled and is turned off                              
        document.getElementById("plusBtn").classList.remove("turnon"); // removing the class turns the button off
    }
}

function reset() {
    document.getElementById("result").value = "";
    cache = 0;
    document.getElementById("result").value = resal;
}

function plus() {
    var resal = Number(document.getElementById("result").value);
    result += Number(cache);
    document.getElementById("result").value = resal;
    document.getElementById("plusBtn").classList.add("turnon");

}