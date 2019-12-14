import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm, { ContactInput } from "../components/contact-form"

class ContactPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Contact" keywords={[`nicole`, `morell`, `contact`]} />
        <h1 className="Main-title">Ask me a question or share what you're passionate about!</h1>
        <ContactForm name="contact">
          <ContactInput name="name" placeholder="Name*" required />
          <ContactInput name="email" placeholder="Email*" required />
          <ContactInput name="phone" placeholder="Phone*" required />
          <ContactInput is="textarea" name="message" placeholder="Join the campaign and share what you're passionate about!" />
          <input id="volunteer" name="volunteer" type="checkbox" value="Yes" className="ContactForm-checkBox" />
          <label htmlFor="volunteer">Would you like to volunteer?</label>
        </ContactForm>
      </Layout>
    )
  }
}

export default ContactPage
