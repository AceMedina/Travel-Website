const readMoreButtons = document.querySelectorAll('.read-more-btn');

readMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        const destination = button.closest('.destination');
        const details = button.nextElementSibling; // The details section (destination-details)

        // Toggle only the clicked destination's details
        if (details.style.display === 'none' || details.style.display === '') {
            // If hidden, display and change button text to 'Read Less'
            details.style.display = 'block';
            button.textContent = 'Read Less';
        } else {
            // If shown, hide and change button text back to 'Read More'
            details.style.display = 'none';
            button.textContent = 'Read More';
        }
    });
});
