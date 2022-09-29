import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isSubmitted: false,
    blurFN: '',
    blurLN: '',
  }

  onBlurringFN = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({blurFN: 'Required'})
    } else {
      this.setState({blurFN: ''})
    }
  }

  onBlurringLN = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({blurLN: 'Required'})
    } else {
      this.setState({blurLN: ''})
    }
  }

  submitForm = async event => {
    event.preventDefault()
    const {isSubmitted} = this.state

    console.log(isSubmitted)
    const {firstName, lastName} = this.state
    if (firstName !== '' && lastName !== '') {
      this.setState({isSubmitted: true, firstName: '', lastName: ''})
    } else {
      this.setState({blurFN: 'Required', blurLN: 'Required'})
    }
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  renderLastNameField = () => {
    const {lastName, blurLN} = this.state
    return (
      <>
        <label className="input-label" htmlFor="lastName">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastName"
          className="input-filed"
          value={lastName}
          onChange={this.onChangeLastName}
          placeholder="Last name"
          onBlur={this.onBlurringLN}
        />
        <p className="para">{blurLN}</p>
      </>
    )
  }

  renderFirstNameField = () => {
    const {firstName, blurFN} = this.state
    return (
      <>
        <label className="input-label" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          type="text"
          id="FirstName"
          className="input-filed"
          value={firstName}
          onChange={this.onChangeFirstName}
          placeholder="First name"
          onBlur={this.onBlurringFN}
        />
        <p className="para">{blurFN}</p>
      </>
    )
  }

  anotherResponse = () => {
    const {isSubmitted} = this.state
    console.log(isSubmitted)
    this.setState({isSubmitted: false})
  }

  renderSuccess = () => (
    <form onSubmit={this.anotherResponse}>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p>Submitted Successfully</p>
      <button type="submit" className="button">
        Submit Another Response
      </button>
    </form>
  )

  renderForm = () => (
    <div>
      <form className="form-container" onSubmit={this.submitForm}>
        <div className="input-container">{this.renderFirstNameField()}</div>
        <div className="input-container">{this.renderLastNameField()}</div>
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  )

  render() {
    const {isSubmitted} = this.state
    return (
      <>
        <div className="container">
          <h1 className="head">Registration</h1>
          {isSubmitted ? this.renderSuccess() : this.renderForm()}
        </div>
      </>
    )
  }
}

export default RegistrationForm
