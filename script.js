var element = document.body;
var theme = document.getElementById("theme");
if (element.classList.contains("dark-mode")) {
    theme.innerHTML = "Light";
} else {
    theme.innerHTML = "Dark";
}
function myFunction() {
    element.classList.toggle("dark-mode");
    if (element.classList.contains("dark-mode")) {
        theme.innerHTML = "Light";
    } else {
        theme.innerHTML = "Dark";
    }

}
