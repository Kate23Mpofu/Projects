document.addEventListener("DOMContentLoaded", () => {
    const features = [
        {
            icon: "⚡",
            title: 'Lightning Fast',
            description: 'Optimized performance ensures your site loads quickly and runs smoothly across all devices.'
        },
        {
            icon: "🖥️",
            title: 'Responsive Design',
            description: 'Perfectly adapts to any screen size, from mobile phones to large desktop monitors.'
        },
        {
            icon: "👥",
            title: 'User-Centered',
            description: 'Designed with your users in mind, creating intuitive and engaging experiences.'
        },
        {
            icon: "📊",
            title: 'Analytics Ready',
            description: 'Built-in tracking and analytics to help you understand user behavior and optimize accordingly.'
        }
    ];

    const grid = document.querySelector("#features-grid");

    // Inject feature cards
    features.forEach((feature, index) => {
        const featureCard = document.createElement("div");
        featureCard.classList.add("feature-card");

        featureCard.innerHTML = `
            <div class="mb-4 p-4 bg-blue-50 inline-block rounded-lg">
                <span class="text-blue-600" style="font-size: 32px;">${feature.icon}</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">${feature.title}</h3>
            <p class="text-gray-600">${feature.description}</p>
        `;

        grid.appendChild(featureCard);

        // GSAP Animation for each card after it's added to the DOM
        gsap.fromTo(
            featureCard,
            {
                y: 100,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: featureCard,
                    start: 'top bottom-=100',
                    toggleActions: 'play none none reverse',
                },
                delay: index * 0.2,
            }
        );
    });

    // GSAP Animation for the title
    gsap.fromTo(
        '.features-title',
        {
            y: 50,
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.features-title',
                start: 'top bottom-=100',
                toggleActions: 'play none none reverse',
            },
        }
    );
});