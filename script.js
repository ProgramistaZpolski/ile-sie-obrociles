window.onload = function () {
    var metry = 0;
    var idInterwalu = window.setInterval(function () {
        var smieci = document.getElementById("hahaile")
        metry += 46;
        smieci.innerHTML = metry + " metrów"
    }, 100);
}