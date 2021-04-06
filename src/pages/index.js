import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import addToMailchimp from "gatsby-plugin-mailchimp"
import { Image1 } from "../components/image"
import cx from "classnames"

class IndexPage extends React.Component {
  state = {
    result: "",
    EMAIL: "",
    MONTH: "",
    DAY: "",
    BIRTHDAY: "",
    listFields: {},
  }

  handleSubmit = async e => {
    e.preventDefault()
    const result = await addToMailchimp(this.state.EMAIL, this.state.listFields)
    this.setState({ result })
  }

  handleChange = e => {
    const val = e.target.value
    const name = e.target.name

    this.setState({ [name]: val }, () => {
      const listFields = {
        ...this.state.listFields,
        [name]: val,
        BIRTHDAY: `${this.state.MONTH}/${this.state.DAY}`,
      }
      this.setState(() => ({ listFields }))
    })
  }

  render() {
    return (
      <Layout>
        <SEO
          title="Home"
          keywords={[`nicole`, `morell`, `medford`, `city`, `council`]}
        />
        <div className="Body-copy">
          <h1 className="Main-title">I’m running for re-election.</h1>
          <p>
            Why?
          </p>
          <p>
            In 2019, Medford residents elected me to my first term as city councilor. You gave me a chance to serve based on countless conversations on doorsteps, phone calls, events, and word of mouth.
          </p>
          <p>
            In my first term, I have worked hard to deliver for Medford.</p>
          <p>In my first year on the council I introduced and passed a resolution for an expansion of eligibility for the senior tax deferral program.</p>
          <p>I submitted the amendment adding language for brewpubs to the new brewery zoning amendment, paving the way for breweries and brewpub restaurants to open in Medford.</p>
          <p>I advocated for better pedestrian and bike infrastructure in Medford through multiple resolutions.</p>
          <p>
            I pushed for budget inclusion and funding of translation services for city communications.
          </p>
          <p>I fought for preserving historic buildings and open space in our community.</p>
          <p>I co-sponsored the resolution classifying systemic racism as a public health crisis in Medford.</p>
          <p>I’ve pushed the council to take action on preserving our tree canopy and elevating a diverse set of voices through the proposed Gender Equity Commission.</p>
          <p>I fought to give the local anti-poverty community action agency the money they need to administer emergency rental assistance for those facing housing insecurity in Medford.</p>
          <p>I pushed for monthly updates and information on Medford's fight against the coronavirus.</p>
          <p>I voted against a budget that I felt forced our schools to bear too much of the burden for a lean year.</p>
          <p> I made a commitment to voters to be your voice on the council, and I believe I have done that. </p>
          <p>
            But my work is not done yet, which is why I’m running for re-election and asking for your vote.
          </p>
        </div>
        <Image1 className="Body-image" />
        <h2 className="Main-title Main-title--sub">
          Subscribe to my mailing list
        </h2>
        <form onSubmit={e => this.handleSubmit(e)}>
          <p>
            <input
              className="ContactForm-input"
              placeholder="Email*"
              type="email"
              onChange={e => this.handleChange(e)}
              name="EMAIL"
              required
            />
          </p>
          <p>
            <input
              className="ContactForm-input"
              placeholder="First Name*"
              type="text"
              onChange={e => this.handleChange(e)}
              name="FNAME"
              required
            />
          </p>
          <p>
            <input
              className="ContactForm-input"
              placeholder="Last Name*"
              type="text"
              onChange={e => this.handleChange(e)}
              name="LNAME"
              required
            />
          </p>
          <fieldset className="ContactForm-fieldSet">
            <legend className="ContactForm-label">Birthday</legend>
            <p>
              <input
                className="ContactForm-input ContactForm-input--birthday"
                placeholder="MM"
                type="tel"
                pattern="[0-9]*"
                onChange={e => this.handleChange(e)}
                size="2"
                maxLength="2"
                name="MONTH"
              />
              <input
                className="ContactForm-input ContactForm-input--birthday"
                placeholder="DD"
                type="tel"
                pattern="[0-9]*"
                onChange={e => this.handleChange(e)}
                size="2"
                maxLength="2"
                name="DAY"
              />
            </p>
          </fieldset>
          <p>
            <button
              className="ContactForm-button"
              type="submit"
              name="subscribe"
            >
              Subscribe
            </button>
          </p>
          <p>
            <span
              className={cx({
                "ContactForm-successText":
                  this.state.result.result === "success",
                "ContactForm-errorText": this.state.result.result === "error",
              })}
              dangerouslySetInnerHTML={{ __html: this.state.result.msg }}
            />
          </p>
          <div
            style={{ position: "absolute", left: "-5000px" }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_34fb19c4f2aa2759584057959_7b3bc41b7f"
              tabIndex="-1"
            />
          </div>
        </form>
      </Layout>
    )
  }
}

export default IndexPage
