document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        {
            title: "Landing Page",
            description: "A random but beautiful and animated landing page.",
            tags: ["HTML", "CSS", "JavaScript"],
            image: "images/landing-page.png",
            demo: "LandingPage.html"
        },
        {
            title: "Calculator",
            description: "On this project, I tried recreating a functional calculator.",
            tags: ["HTML", "CSS", "JavaScript"],
            image: "images/calculator.png",
            demo: "calculator.html"
        },
        {
            title: "Guess Game",
            description: "On this game, you get 5 chances to guess a number between 1 and 10. Good luck and have fun!",
            tags: ["HTML", "CSS", "JavaScript"],
            image: "images/guessGame.png",
            demo: "guess.html"
        }
    ];

    const projectsGrid = document.getElementById("projectsGrid");

    projects.forEach((project, index) => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");

        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join("")}
                </div>
                <div class="project-links">
                    <a href="${project.demo}" target="_blank">Live Demo</a>
                </div>
            </div>
        `;

        projectsGrid.appendChild(projectCard);

        // Delay visibility animation
        setTimeout(() => {
            projectCard.classList.add("visible");
        }, index * 200);

        
    });
});