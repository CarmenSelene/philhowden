import React from "react";
import "./Contact.css";

function Contact() {
    return (
        <div className="contactblock">
        <nav className="contactNav" >
                    <ul>
                        <li><small>Contact Phillip</small></li>
                    </ul>
                </nav>
            <form id="contact" action="https://formspree.io/phillip.howden@gmail.com" method="post">
                <input type="hidden" name="_subject" value="Website Contact Form" className="hideMe" />
                <input type="hidden" name="_format" value="plain" className="hideMe" />
                <input type="text" name="_gotcha" className="hideMe" />
                <fieldset>
                    <input placeholder="Your Name" type="text" tabindex="1" required autofocus />
                </fieldset>
                <fieldset>
                    <input placeholder="Your Email" type="email" tabindex="2" required />
                </fieldset>
                <fieldset>
                    <input placeholder="Phone Number (optional)" type="tel" tabindex="3" />
                </fieldset>
                <fieldset>
                    <input placeholder="Web Site (optional)" type="url" tabindex="4" />
                </fieldset>
                <fieldset>
                    <textarea placeholder="Type your Message Here...." tabindex="5" required></textarea>
                </fieldset>
                <fieldset>
                    <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                </fieldset>
            </form>
        </div>
    );
}
export default Contact;