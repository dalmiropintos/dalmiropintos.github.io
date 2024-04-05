const configButton = document.getElementById('config-button');
const emailButton = document.getElementById('email-button');
const blogButton = document.getElementById('blog-button');
const projectsButton = document.getElementById('projects-button');
const configTab = document.getElementById('access-info');
const emailTab = document.getElementById('email-tab');
const browserTab = document.getElementById('browser-card');


configButton.addEventListener('click', function () {
    if (configTab.style.display === 'none') {
        configTab.style.display = 'block'; // Show the tab
        // tab.classList.toggle('clicked');
        configTab.style.animation = 'party 2000ms';
    } else {
        setTimeout(function () {
            configTab.style.display = 'none'; // Hide the tab
        }, 1500);
        configTab.style.animation = 'close-tab 2000ms';
    }
});
emailButton.addEventListener('click', function () {
    if (emailTab.style.display === 'none') {
        emailTab.style.display = 'block';
        emailTab.style.animation = 'party 2000ms';
    } else {
        setTimeout(function () {
            emailTab.style.display = 'none';
        }, 1500);
        emailTab.style.animation = 'close-tab 2000ms';
    }
});

blogButton.addEventListener('click', function () {
    if (browserTab.style.display === 'none') {
        browserTab.style.display = 'block';
        browserTab.style.animation = 'party 2000ms';
        setTimeout(() => {
            browserTab.focus();
        }, 2050);
    } else {
        setTimeout(function () {
            browserTab.style.display = 'none';
        }, 1500);
        browserTab.style.animation = 'close-tab 2000ms';
    }
});

browserTab.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        setTimeout(function () {
            browserTab.style.display = 'none';
        }, 1500);
        browserTab.style.animation = 'close-tab 2000ms';
        blogButton.focus();
    }

})

browserTab.setAttribute('tabindex', '-1');


fetch('./entries/test.md')
    .then(response => response.text())
    .then(markdown => marked.parse(markdown))
    .then(html => {
        browserTab.innerHTML = html;
    })
    .catch(err => console.error('Error fetching markdown file:', err));