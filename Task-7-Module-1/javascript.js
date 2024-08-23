
const menu1 = document.getElementById("mn1");
const close1 = document.getElementById("cl");

menu1.addEventListener("click", function(event) {
    menu1.style.display = "none";
    close1.style.display = "block";
    event.stopPropagation(); // Prevent the event from bubbling up to the button
});

close1.addEventListener("click", function(event) {
    close1.style.display = "none";
    menu1.style.display = "block";
    event.stopPropagation(); // Prevent the event from bubbling up to the button
});