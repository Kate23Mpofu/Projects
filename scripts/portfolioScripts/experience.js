document.addEventListener("DOMContentLoaded", function () {
    const experiences = [
        {
            title: "Bachelor of Science in Information Technology",
            company: "Richfield College",
            period: "Jan 2023 - Present",
            description: "Currently in my final year and expected to graduate next year(2026). My coursework has equipped me with skills in HTML, CSS, JavaScript. I am also knowledgeable in languages like PHP, JAVA, C++, C#, and Python.",
            type: "education",
        },
        {
            title: "Web Development Intern",
            company: "Oasis Infobyte",
            period: "March 2025 - April 2025",
            description: "For this internship, I chose to build my personal portfolio. I focused on HTML, CSS, and JavaScript to make it more animated, beautiful and interactive.",
            type: "work",
        },
        {
            title: "Web Development Intern",
            company: "FNB App Academy",
            period: "April 2025 - Present",
            description: "It is focused on web development, software engineering, and database management. This internship will help me polish my skills in web development.",
            type: "work",
        },
    ];

    const timelineEntries = document.getElementById("timelineEntries");

    experiences.forEach((exp, index) => {
        const entry = document.createElement("div");
        entry.classList.add("timeline-entry");

        // Alternate left and right
        if (index % 2 === 0) {
            entry.classList.add("left");
        }

        entry.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <span class="timeline-period">${exp.period}</span>
                <h3>${exp.title}</h3>
                <h4>${exp.company}</h4>
                <p>${exp.description}</p>
            </div>
        `;

        timelineEntries.appendChild(entry);
    });

    // Animate when in view
    function revealOnScroll() {
        const entries = document.querySelectorAll(".timeline-entry");
        const triggerBottom = window.innerHeight * 0.85;

        entries.forEach((entry, index) => {
            const entryTop = entry.getBoundingClientRect().top;

            if (entryTop < triggerBottom) {
                setTimeout(() => {
                    entry.classList.add("visible");
                }, index * 200);
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});