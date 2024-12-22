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
    const oauthToken = "wc58sjn9vuvzkvedgd547j15i6xvqb"; // Replace with your OAuth token (this can be obtained after logging in via Twitch API)

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
        console.log("Twitch API Response: ", data); // Log the response to check the data structure
        if (data.data.length > 0) {
            // If the stream is live, embed the stream
            iframe.src = `https://player.twitch.tv/?channel=${twitchChannel}&parent=razz-hangout-website.onrender.com`; // Ensure the parent URL matches your actual website
            offlineMessage.style.display = "none"; // Hide the offline message
            iframe.style.display = "block"; // Ensure the iframe is visible
        } else {
            // If the stream is offline, show an offline message
            offlineMessage.style.display = "block";
            iframe.style.display = "none"; // Hide iframe if stream is offline
        }
    })
    .catch(error => {
        console.error("Error fetching Twitch stream data:", error);
        offlineMessage.innerText = "Error fetching stream data. Please try again later.";
        offlineMessage.style.display = "block";
        iframe.style.display = "none"; // Hide iframe in case of an error
    });
});

