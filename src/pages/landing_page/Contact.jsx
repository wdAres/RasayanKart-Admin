function Contact() {
    return (
        <section id="landing-sec-6">
            <div className="flex-row">
                <div className="flex-50">
                    <h1>Buy. Sell. <br /> Market on Rasayan Cart</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi velit vel ex rerum porro ducimus odio impedit illo, consequatur corporis?
                    </p>
                </div>
                <div className="flex-50">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
function ContactForm() {
    return (
    <form action="">
        <div className="form-heading">Rech out to us We'll get back to <br /> you</div>
        <input type="text" placeholder='Name' name='Name' />
        <input type="email" placeholder='Email' name='email' />
        <textarea name="description" id="" placeholder='Description'></textarea>
        <button type='submit'>Send Message</button>
    </form>
    );
}



export default Contact;