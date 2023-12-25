import "../styles/home.css"
import { useEffect } from "react"

export default function Home() {

    useEffect(() => {

        new Typed(".title", {
            strings: [
                'I\'m a <span class="bracket">( </span><span class="string">"Web Developer"</span><span class="bracket"> )</span>',
                'I\'m a <span class="bracket">( </span><span class="string">"Front-End Web Developer"</span><span class="bracket"> )</span>',
                '<span class="function">console</span>.<span class="call">log</span><span class="bracket">(</span><span class="string">"Web Developer"</span><span class="bracket">)</span>', 
                '<span class="function">const</span> <span class="variable">developer</span> = { <br/> <span class="bracket">name</span>: <span class="string">"Paul Kenyi"</span>, <br /> <span class="bracket">email</span>: <span class="string">"kenyipaul69@gmail.com"</span> <br />}'],
            typeSpeed: 80,
            backSpeed: 20,
            backDelay: 4000,
            smartBackspace: true,
            cursorChar: '',
            loop: true
        })

        particlesJS.load('home', './src/assets/particle/particles.json', function() {})

    }, [])

    return (
        <div id="home">

            <div className="content">
                
                <p>HELLO WORLD!, I AM</p>
                <h1>PAUL <span>KENYI</span></h1>
                <h2> I'M A FRONT-END WEB DEVELOPER</h2>

                <div className="code">
                    <code className="title"></code>
                    <a href="#resume"><button>RESUME</button></a>
                </div>

            </div>

            <img src="./src/assets/images/profile.png" alt="" />

        </div>
    )
}