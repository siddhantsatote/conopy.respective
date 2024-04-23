document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('card__form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // You can perform additional actions here, such as sending form data to a server

        console.log('Form submitted successfully!'); // Example alert

        // Optionally, you can reset the form after submission
        this.reset();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Show the preloader initially
    const preloader = document.getElementById("preloader");

    // Set a timeout to hide the preloader after a certain duration (e.g., 3000 milliseconds)
    setTimeout(function () {
        preloader.style.display = "none";
    }, 2000); // Adjust the duration as needed (in milliseconds)
});