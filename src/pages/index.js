import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import addToMailchimp from "gatsby-plugin-mailchimp"
import { Image1, Image2, Image3 } from "../components/image"
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
        <h1 className="Main-title">Home</h1>
        <div className="Body-copy">
          <h2 className="Main-subTitle Main-subTitle--bottom">I'm running for the future.</h2>
          <p className="Body-firstLine">
            I’m running for city council to create a future that works for all
            of us.
          </p>
          <p>
            My husband and I first lived in Medford as renters and fell in love
            with the city, its history, and strong sense of community. We made
            the decision to make Medford our future. As first-time homeowners,
            we want to raise our future family here. We have made a strong
            commitment to Medford.
          </p>
          <p>
            Medford is a city in transition, a city with a bright future filled
            with promise and enrichment. We need strong leadership to navigate
            the many challenges we face along the way.
          </p>
          <p>
            I will actively work with you for sustainable development,
            investment in our infrastructure, and support of green and open
            space in the city.
          </p>
          <p>I ask for your vote for the future of Medford.</p>
        </div>
        <Image1 className="Body-image" />
        <Image2 className="Body-image" />
        <Image3 className="Body-image" />
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
