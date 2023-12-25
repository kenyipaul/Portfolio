import "../styles/about.css"
import { HTML, JAVASCRIPT, CSS, REACT } from "../assets/Icons"

export default function About() {
    return (
        <div id="about">

            <div className="content">

                <section className="first-section">

                    <div className="about-me">

                    <img src="./src/assets/images/profile.png" alt="" />
                    
                    <div>
                        <h2>ABOUT ME</h2>

                        <table>
                            <tbody>
                                <tr>
                                    <th>Full Name</th>
                                    <th>Gender</th>
                                    <th>Nationality</th>
                                    <th>Spoken Languages</th>
                                    <th>Written Languages</th>
                                </tr>
                                <tr>
                                    <td>Kenyi Paul Dilla</td>
                                    <td>Male</td>
                                    <td>South Sudanese</td>
                                    <td>English, Arabic</td>
                                    <td>English</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    </div>

                    <div className="whoami">
                        <h2>WHO AM I ?</h2>
                        <p>I am a dedicated and enthusiastic self-taught web developer with a strong foundation in front-end technologies. I am deeply passionate about crafting beautiful and responsive user interfaces that provide an exceptional user experience. My journey in web development has been marked by self-driven learning, problem-solving, and commitment to writing clean and maintainable code. With a blend of creativity and technical acumen, I am excited to take on new challenges and bring innovative ideas to life.</p>
                        <a href="#contact"><button>CONTACT ME</button></a>
                    </div>

                </section>

                <section className="second-section">

                    <div>
                        <h2>SERVICES</h2>

                        <div className="service-grid">
                            <div className="service">
                                <header>
                                    <h1>Web Development</h1>
                                </header>
                                <p>Transforming your ideas into functional, user-friendly websites and web applications that captivate your audience</p>
                            </div>

                            <div className="service">
                                <header>
                                    <h1>Responsive Design</h1>
                                </header>
                                <p>Crafting websites that adapt seamlessly to desktops, tablets and mobile devices, ensuring a consistent user experience</p>
                            </div>

                            <div className="service">
                                <header>
                                    <h1>Version Control</h1>
                                </header>
                                <p>Collaborating seamlessly with development teams using Git for version control and efficient project management</p>
                            </div>

                            <div className="service">
                                <header>
                                    <h1>Code Quality</h1>
                                </header>
                                <p>Writing clean, maintainable code with comprehensive documentation to simplify future updates</p>
                            </div>
                        </div>
                    </div>


                    <div>
                        <h2>DEV STACK</h2>
                        <div className="skills">

                            <Skill title="HTML5" percentage="85" color="#ff9100" bg="#ff9100"><HTML /></Skill>
                            <Skill title="CSS3" percentage="90" color="#0095fa" bg="#0095fa"><CSS /></Skill>
                            <Skill title="JAVASCRIPT" percentage="75" color="#ffef00" bg="#ffef00"><JAVASCRIPT /></Skill>
                            <Skill title="REACT JS" percentage="80" color="#02D1FA" bg="#02D1FA"><REACT /></Skill>

                        </div>
                    </div>

                </section>

            </div>
            
        </div>
    )
}


function Skill(props) {
    return (
        <div className="skill" style={{ background: `conic-gradient(${props.bg ? props.bg : '#ff0053'} ${props.percentage ? props.percentage + '%' : '50%'}, var(--darker) 50%)` }}>
            <div className="info">
                {props.children}
                <p style={{color: props.color}}>{props.title}</p>
            </div>
        </div>
    )
}