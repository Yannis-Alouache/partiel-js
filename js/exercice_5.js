function exercice_5() {
    window.addEventListener('unload', function() {
        let htmlElement = document.getElementById("chrono");
        let data = htmlElement.innerHTML;

        let dataSplit = data.split(':', 2);
        localStorage.setItem("minutes", dataSplit[0]);
        localStorage.setItem("seconds", dataSplit[1]);
    });
}

export default exercice_5;