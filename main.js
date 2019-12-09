var cache = null;

function addToMemory(someThing) {
    document.getElementById("memory").innerHTML = someThing;
}

function clickbutton(x) {

    document.getElementById("result").value += x;

    if (document.getElementById("plusBtn").classList.contains("turnon")
        (document.getElementById("minusBtn").classList.contains("turnon"))
    ) {
        resetDisplay();
        cache = document.getElementById("result").value;
        document.getElementById("result").value = "";
    }
    document.getElementById("result").value += x;
}

function reset() {
    document.getElementById("result").value = "";
    cache = null;

    resetDisplay();
}

function plus() {
    var res = Number(document.getElementById("result").value);
    result += Number(cache);
    document.getElementById("result").value = res;

    resetDisplay();
    document.getElementById("plusBtn").classList.add("turnon");


}

function minus() {

    if (cache != null) {
        var res = Number(document.getElementById("result").value);
        result = cache - result;
        document.getElementById("result").value = res;
    }

    resetDisplay();
    document.getElementById("minusBtn").classList.add("turnon");
}

function resetDisplay() {

    document.getElementById("plusBtn").classList.remove("turnon");
    document.getElementById("minusBtn").classList.remove("turnon");
}