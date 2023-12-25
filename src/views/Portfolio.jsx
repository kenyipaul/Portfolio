import "../styles/portfolio.css"

export default function Portfolio() {

    return (
        <div id="portfolio">

            <nav>
                <h2>MY PROJECTS</h2>
            </nav>

            <section className="projects all">

                <Project />

            </section>
            <section className="projects responsive"></section>
            <section className="projects tools"></section>

        </div>
    )
}


function Project() {
    return (
        projects.map((data, key) => {
            return (
                <div className="project" key={key}>
                    <div className="cover" style={{ backgroundImage: `url(${data.cover})` }} />
                    <div className="info">
                        <h2>{data.name}</h2>
                        <p>{data.description}</p>
                        <a target="_blank" href={data.link}><button>Browse</button></a>
                    </div>
                </div>
            )
        })

    )
}


const projects = [
    {
        id: 1,
        name: "Binaural Beat",
        cover: "./src/assets/images/binaural.webp",
        description: "Binaural Beat, just as the name implies is a brain wave application mainly used for meditation. It utilizes the JavaScript AudioContext API to generate beat and carrier frequencies.",
        link: "https://kenyipaul-binaural.netlify.app"
    },
    {
        id: 2,
        name: "Just Weather",
        cover: "./src/assets/images/weather.webp",
        description: "Just Weather is weather forecast application with a simple and user-friendly interface. It uses HTML, CSS, React JS for the user-interface and the `Visual Crossing` API to fetch weather information",
        link: "https://kenyipaul-weather.netlify.app"
    },
    {
        id: 3,
        name: "Just Note",
        cover: "./src/assets/images/note.webp",
        description: "JustNote is a notepad application. It makes use of the Javascript Storage API and React JS for the user-interface",
        link: "https://kenyipaul-todo.netlify.app"
    },
    {
        id: 4,
        name: "Just Buy",
        cover: "./src/assets/images/justbuy.webp",
        description: "JustBuy is a static mock-up e-commerce website that. It uses HTML, CSS and React JS under the hood to deliver a responsive and visually appealing look.",
        link: ""
    },
    {
        id: 5,
        name: "Just Music",
        cover: "./src/assets/images/music.webp",
        description: "JustMusic is a music player build using HTML, CSS and Javascript",
        link: ""
    }
]