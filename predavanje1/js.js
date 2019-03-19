window.addEventListener("load", function() {
    // alert("Loaded");
    var writ = function(writeln) {
        document.write(writeln);
    }
    writ("<p>sgsrsg</p>");
    var x = [];
    arr = [1, 2, 3];
    arr.push(4);
    writ("niz ima sledece elemente");
    for (let x in arr)
        writ(arr[x]);
    writ("<br>");
    writ("Niz ima " + arr.length + "vrijednosti ");
    let objectt = {};
    objectt.name = ["Pera", "Misa", "Jovan"];
    writ("<br>");
    writ(objectt.name);
    writ("<br>");

    var s = "";
    //writ(typeof(s));
    writ("<br>");
    writ("Ona je tipa: " + typeof(d));
});