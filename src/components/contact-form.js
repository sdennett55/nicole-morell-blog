import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"
import "./contact-form.scss"

const Contact = ({ name, children, submitText }) => {
  return (
    <form
      name={name}
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      {children}
      <input type="hidden" name="form-name" value={name} />
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>
      <p>
        <button className="ContactForm-button" type="submit">
          {submitText}
        </button>
      </p>
    </form>
  )
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  submitText: PropTypes.string,
}
Contact.defaultProps = {
  submitText: "Submit",
}

export const ContactInput = ({ is, name, placeholder, isFullWidth, ...rest }) => {
  const RenderedElement = is

  return (
    <p>
      <RenderedElement
        className={cx('ContactForm-input', {
          'ContactForm-input--fullWidth': isFullWidth
        })}
        placeholder={placeholder}
        type="text"
        name={name}
        {...rest}
      />
    </p>
  )
}

ContactInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  is: PropTypes.string,
  isFullWidth: PropTypes.bool,
}
ContactInput.defaultProps = {
  is: "input",
  isFullWidth: false,
}

export default Contact
