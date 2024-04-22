document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('card__form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // You can perform additional actions here, such as sending form data to a server

        console.log('Form submitted successfully!'); // Example alert

        // Optionally, you can reset the form after submission
        this.reset();
    });
});