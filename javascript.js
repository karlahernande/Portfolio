
// Dropdown wannabe

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content")
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


// Wannabe coursal

// let slideIndex = 1;
// showSlides(slideIndex)

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("myphotos");
//     let dots = document.getElementsByClassName("dot");
//     if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className += " active";
// }

// automatic slideshow

let slideIndex = 0
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("myphotos");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex >slides.length) {slideIndex =1 }
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); 
}

function sendEmail() {
    sendEmail.send({
        Host : "smtp.mailslurp.com",
        Username : "<mailslurp username",
        Password : "<mailslurp password>",
        To : 'recipient@example.com',
        Form : "sender@example.com",
        Subject : "Test email",
        Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em></html>"
    }).then(message --> alert(message)
    );
}