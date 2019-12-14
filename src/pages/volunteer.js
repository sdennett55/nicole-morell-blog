import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm, { ContactInput } from "../components/contact-form"

const VolunteerPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`nicole`, `morell`, `volunteer`]} />
    <h1 className="Main-title">Sign up to Volunteer</h1>
    <ContactForm name="volunteer">
      <ContactInput name="name" placeholder="Name*" isFullWidth required />
      <ContactInput name="email" placeholder="Email*" isFullWidth required />
      <ContactInput is="textarea" name="message" placeholder="How would you like to volunteer?" required />
    </ContactForm>
  </Layout>
)

export default VolunteerPage
