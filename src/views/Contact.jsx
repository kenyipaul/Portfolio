import "../styles/contact.css"

export default function Contact() {
    return (
        <div id="contact">

    <div className="content">
        
        <section>

            <h2>CONTACT ME</h2>
            <h3>Let's stay connected</h3>
            <h1>Tell me about your project</h1>

            <div className="contact">
                <div className="profile" style={{ backgroundImage: 'url(./src/assets/icons/gmail.webp)', backgroundSize: '35px' }} />
                <div className="info">
                    <p><strong>Mail Me at</strong></p>
                    <p>kenyipaul69@gmail.com</p>
                </div>
            </div>

            <div className="contact">
                <div className="profile" style={{ backgroundImage: 'url(./src/assets/icons/phone-call.webp)' }} />
                <div className="info">
                    <p><strong>Call Me</strong></p>
                    <p>(+256) 780 4619 45</p>
                </div>
            </div>
            
        </section>

        <section>


            <form action="#">
                <h1>Send Me a message</h1>
                <input type="text" name="name" id="name" placeholder="Your Name"/>
                <input type="email" name="email" id="email" placeholder="Email Address"/>
                <input type="text" name="subject" id="subject" placeholder="Subject"/>
                <textarea name="message" id="" cols="30" rows="10" placeholder="Write message here..."></textarea>
                <button>SEND MESSAGE</button>
            </form>

        </section>
        
    </div>

        </div>
    )
}