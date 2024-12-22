document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");

    // Active link handling
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navLinks.forEach(link => link.classList.remove("active"));
            link.classList.add("active");
        });
    });

    // Twitch Stream Embed Logic
    const iframe = document.getElementById("twitch-iframe");
    const offlineMessage = document.getElementById("offline-message");
    const liveButton = document.getElementById("live-button");
    const offlineButton = document.getElementById("offline-button");

    const twitchChannel = "razzkle"; // Your Twitch channel name
    const clientId = "quziktlhrysy0f4qemjdk6ejulcthq"; // Replace with actual Client-ID
    const oauthToken = "ote69gjw40pak1u7r4o47yi74yec4s"; // Replace with actual OAuth token

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
        if (data.data.length > 0) {
            // Stream is live
            iframe.src = `https://player.twitch.tv/?channel=${twitchChannel}&parent=razz-hangout-website.onrender.com`; // Ensure correct parent URL for embedding
            iframe.style.display = "block"; // Show the iframe
            offlineMessage.style.display = "none"; // Hide the offline message
            liveButton.style.display = "block"; // Show live button
            offlineButton.style.display = "none"; // Hide offline button
        } else {
            // Stream is offline
            iframe.style.display = "none"; // Hide the iframe
            offlineMessage.style.display = "block"; // Show the offline message
            liveButton.style.display = "none"; // Hide live button
            offlineButton.style.display = "block"; // Show offline button
        }
    })
    .catch(error => {
        console.error("Error fetching stream data:", error);
        offlineMessage.innerText = "Error fetching stream data. Please try again later.";
        offlineMessage.style.display = "block";
        iframe.style.display = "none"; // Hide iframe if error occurs
        liveButton.style.display = "none"; // Hide live button
        offlineButton.style.display = "block"; // Show offline button
    });
});

