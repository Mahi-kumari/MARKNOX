const projects = [
    {
        title: "Weather App",
        description: "A dynamic weather application with a 5-day forecast.",
        image: "weather.png",
        link: "e-commerce/weather/weather.html"
    },
    {
        title: "Digital Clock",
        description: "A real-time digital clock that shows the current time and updates every second",
        image: "portfolio.png",
        link: "e-commerce/weather/digitalclock/digitalclock.html"
    },
    {
        title: "E-commerce Platform",
        description: "An online shopping platform with secure payments and user-friendly UI.",
        image: "e-commerce.png",
        link: "e-commerce/e-commerce.html" 
    },
/*{
        title: "Blog CMS",
        description: "A content management system for publishing and managing blog posts.",
        image: "blog-cms.png",
        link: "#"
    }*/
];

const container = document.getElementById("projects-container");

projects.forEach(project => {
    const projectHTML = `
        <div class="col-md-6 col-lg-4">
            <div class="card bg-secondary text-light shadow-lg p-3">
                <img src="${project.image}" class="card-img-top rounded" alt="${project.title}">
                <div class="card-body">
                    <h3 class="card-title">${project.title}</h3>
                    <p class="card-text">${project.description}</p>
                    <a href="${project.link}" class="btn btn-primary">View Project</a>
                </div>
            </div>
        </div>
    `;
    container.innerHTML += projectHTML;
});