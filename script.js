window.addEventListener("DOMContentLoaded", () => {
    // Create snowflakes
    for (let i = 0; i < 50; i++) {  // Create 50 snowflakes
        const snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");
        snowflake.innerHTML = "&#10052;";  // Snowflake character
        snowflake.style.fontSize = `${Math.random() * 20 + 10}px`; // Randomize size
        snowflake.style.left = `${Math.random() * 100}vw`; // Randomize initial position
        snowflake.style.animationDuration = `${Math.random() * 3 + 7}s`; // Random animation speed
        snowflake.style.animationDelay = `${Math.random() * 5}s`; // Random delay

        // Randomize horizontal drift
        const xValue = (Math.random() * 30 - 15) + 'vw'; // Random X drift between -15vw and 15vw
        snowflake.style.setProperty('--x', xValue);

        // Add snowflake to the body
        document.body.appendChild(snowflake);
    }

    // Array of sample news items
    const newsItems = [
        { title: "Join Razz's stream for a special event tonight!", link: "#" },
        { title: "New Discord update: Check out the latest features.", link: "#" },
        { title: "Razz is now live on Twitch, come hang out!", link: "https://www.twitch.tv/razzkle" },
        { title: "Exclusive behind-the-scenes content now available on Discord.", link: "#" },
        { title: "Stay tuned for a giveaway this weekend during the stream!", link: "#" },
    ];

    // Get the news container
    const newsContainer = document.querySelector(".news-container");

    // Create and append news items
    newsItems.forEach(item => {
        const newsItem = document.createElement("div");
        newsItem.classList.add("news-item");

        // Create clickable link
        const newsLink = document.createElement("a");
        newsLink.href = item.link;
        newsLink.target = "_blank";
        newsLink.textContent = item.title;

        newsItem.appendChild(newsLink);
        newsContainer.appendChild(newsItem);
    });
});
