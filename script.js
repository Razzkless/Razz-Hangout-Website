document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");

    // Zorg ervoor dat de actieve klasse goed wordt ingesteld voor links
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            // Verwijder de 'active' klasse van alle links
            navLinks.forEach(link => link.classList.remove("active"));
            // Voeg de 'active' klasse toe aan de geklikte link
            link.classList.add("active");
        });
    });
});

// JavaScript voor de Twitch Stream Embed
document.addEventListener("DOMContentLoaded", function() {
    const streamEmbed = document.getElementById("stream-embed");
    const iframe = document.getElementById("twitch-iframe");
    const offlineMessage = document.getElementById("offline-message");

    // Twitch API-instellingen
    const twitchChannel = "razzkle"; // Vervang dit door je Twitch-kanaalnaam

    // Controleer of de stream live is
    fetch(`https://api.twitch.tv/helix/streams?user_login=${twitchChannel}`, {
        headers: {
            "Client-ID": "3hmt44kgzvi1crfp0pq7rh6d175ya1", // Vervang met je eigen Twitch Client-ID
            "Authorization": "Bearer your_oauth_token" // Vervang met je OAuth-token
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.data.length > 0) {
            // Als de stream live is, embed de stream
            iframe.src = `https://player.twitch.tv/?channel=${twitchChannel}&parent=www.jouwwebsite.com`;
            offlineMessage.style.display = "none"; // Verberg offline bericht
        } else {
            // Als de stream offline is, toon een offline bericht
            offlineMessage.style.display = "block";
            iframe.style.display = "none"; // Verberg de iframe als de stream offline is
        }
    })
    .catch(error => {
        console.error("Error fetching Twitch stream data:", error);
    });
});
