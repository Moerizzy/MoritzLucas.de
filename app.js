(function () {

    window.onload = function(){
        if (localStorage.getItem("lightmode") === 'true') {
            document.body.classList.toggle("light-mode", true);
            localStorage.setItem("lightmode", "true")
        } else{
            localStorage.setItem("lightmode", "false")
        }
    };

    document.querySelector(".theme-btn").addEventListener("click", () => {
        if(localStorage.getItem("lightmode") === 'true') {
            localStorage.setItem("lightmode", "false");
            document.body.classList.toggle("light-mode", false);
        } else if (localStorage.getItem("lightmode") === 'false'){
            localStorage.setItem("lightmode", "true");
            document.body.classList.toggle("light-mode", true);
        } else {
            localStorage.setItem("lightmode", "false");
            document.body.classList.toggle("light-mode", false);
        }
    })

})();
