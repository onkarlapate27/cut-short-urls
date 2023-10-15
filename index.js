// Function to handle URL shortening when the "Shorten" button is clicked
document.getElementById('shortenButton').addEventListener('click', function() {
    var urlInput = document.getElementById('urlInput').value;
    
    alert("Shortened URL for: " + urlInput);
});

// Function to handle email submission when the "Submit Email" button is clicked
document.getElementById('submitEmailButton').addEventListener('click', function() {
    var emailInput = document.getElementById('emailInput').value;
    
    alert("Submitted Email: " + emailInput);
});
