function toggleMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
}
function toggleAppointment() {
    document.querySelector(".appointment-container").classList.toggle("active");
    // document.querySelector("body").classList.toggle("appointment-open");
}

document.addEventListener("click", (event) => {
    if(event.target.classList.contains("services__accordion-button")){
        event.target.classList.toggle("rotate");
        event.target.nextElementSibling.classList.toggle("accordion-collapse");
    }
});