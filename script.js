document.addEventListener("DOMContentLoaded", function() {
    // Select necessary DOM elements
    const navLinks = document.querySelectorAll(".nav-link");
    const iframe = document.getElementById("twitch-iframe");
    const offlineMessage = document.getElementById("offline-message");
    const liveButton = document.getElementById("live-button");
    const offlineButton = document.getElementById("offline-button");

    // Twitch configuration
    const twitchChannel = "razzkle"; // Your Twitch channel name
    const clientId = "quziktlhrysy0f4qemjdk6ejulcthq"; // Replace with your actual Client-ID
    const oauthToken = "ote69gjw40pak1u7r4o47yi74yec4s"; // Replace with your actual OAuth token

    // Active link handling (for navigation)
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navLinks.forEach(link => link.classList.remove("active"));
            link.classList.add("active");
        });
    });

    // Fetch the stream status from Twitch API
    fetch(`https://api.twitch.tv/helix/streams?user_login=${twitchChannel}`, {
        method: 'GET',
        headers: {
            "Client-ID": clientId,
            "Authorization": `Bearer ${oauthToken}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const isStreamLive = data.data.length > 0;

        if (isStreamLive) {
            // Stream is live: Show the stream iframe and relevant buttons
            iframe.src = `https://player.twitch.tv/?channel=${twitchChannel}&parent=razz-hangout-website.onrender.com`;
            iframe.style.display = "block"; // Show the iframe
            offlineMessage.style.display = "none"; // Hide the offline message
            liveButton.style.display = "block"; // Show live button
            offlineButton.style.display = "none"; // Hide offline button
        } else {
            // Stream is offline: Show offline message and button
            iframe.style.display = "none"; // Hide the iframe
            offlineMessage.style.display = "block"; // Show offline message
            liveButton.style.display = "none"; // Hide live button
            offlineButton.style.display = "block"; // Show offline button
        }
    })
    .catch(error => {
        console.error("Error fetching stream data:", error);
        offlineMessage.innerText = "Error fetching stream data. Please try again later.";
        offlineMessage.style.display = "block"; // Show error message
        iframe.style.display = "none"; // Hide iframe on error
        liveButton.style.display = "none"; // Hide live button
        offlineButton.style.display = "block"; // Show offline button
    });
});

