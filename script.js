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

    // Twitch Stream Embed
    const streamEmbed = document.getElementById("stream-embed");
    const iframe = document.getElementById("twitch-iframe");
    const offlineMessage = document.getElementById("offline-message");

    // Twitch API settings
    const twitchChannel = "razzkle"; // Replace with your Twitch channel name
    const clientId = "kj228ogrtqt0pi9u8u9hpnlrrrig09"; // Replace with your actual Client-ID
    const oauthToken = "lpgcptn3hgsaxhr54wzv4oiu9m32fr"; // Replace with your OAuth token (this can be obtained after logging in via Twitch API)

    // Check if the stream is live
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
            // If the stream is live, embed the stream
            iframe.src = `https://player.twitch.tv/?channel=razzkle&parent=https://razz-hangout-website.onrender.com/`; // Replace with your actual website URL in parent
            offlineMessage.style.display = "none"; // Hide the offline message
        } else {
            // If the stream is offline, show an offline message
            offlineMessage.style.display = "block";
            iframe.style.display = "none"; // Hide the iframe if the stream is offline
        }
    })
    .catch(error => {
        console.error("Error fetching Twitch stream data:", error);
        offlineMessage.innerText = "Error fetching stream data. Please try again later.";
        offlineMessage.style.display = "block";
        iframe.style.display = "none"; // Hide iframe in case of an error
    });
});

