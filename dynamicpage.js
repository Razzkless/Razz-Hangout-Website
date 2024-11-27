const config =window.PAGE_CONFIG ?? {};

const title = document.querySelector ('#navbar__logo');
title.textContent = config.title ?? title.textContent;
