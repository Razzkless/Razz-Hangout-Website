document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");

    // Ensure the active class is correctly set for links
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            // Remove the 'active' class from all links
            navLinks.forEach(link => link.classList.remove("active"));
            // Add the 'active' class to the clicked link
            link.classList.add("active");
        });
    });
});

// JavaScript for Twitch Stream Embed
document.addEventListener("DOMContentLoaded", function() {
    const streamEmbed = document.getElementById("stream-embed");
    const iframe = document.getElementById("twitch-iframe");
    const offlineMessage = document.getElementById("offline-message");

    // Twitch API settings
    const twitchChannel = "razzkle"; // Replace this with your Twitch channel name

    // Check if the stream is live
    fetch(`https://api.twitch.tv/helix/streams?user_login=${twitchChannel}`, {
        headers: {
            "Client-ID": "kj228ogrtqt0pi9u8u9hpnlrrrig09", // Replace with your own Twitch Client-ID
            "Authorization": "Bearer f16hgf8ckh8gv93x5e7ynmr4kio7ht" // Replace with your OAuth token
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.data.length > 0) {
            // If the stream is live, embed the stream
            iframe.src = `https://player.twitch.tv/?channel=${twitchChannel}&parent=https://razz-hangout-website.onrender.com/`;
            offlineMessage.style.display = "none"; // Hide the offline message
        } else {
            // If the stream is offline, show an offline message
            offlineMessage.style.display = "block";
            iframe.style.display = "none"; // Hide the iframe if the stream is offline
        }
    })
    .catch(error => {
        console.error("Error fetching Twitch stream data:", error);
    });
});
