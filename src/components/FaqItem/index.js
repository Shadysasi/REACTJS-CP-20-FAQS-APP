import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isActive: false}

  onToggleIsActive = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  renderAnswer = () => {
    const {isActive} = this.state
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    if (isActive) {
      return (
        <div>
          <hr />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {isActive} = this.state
    const {faqDetails} = this.props
    const {questionText} = faqDetails
    const btnImgUrl = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png '
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const btnAltText = isActive ? 'minus' : 'plus'

    return (
      <li className="faq-container">
        <div className="question-text-container">
          <h1 className="question">{questionText}</h1>
          <button
            type="button"
            className="btn-style"
            onClick={this.onToggleIsActive}
          >
            <img src={btnImgUrl} alt={btnAltText} className="btn-img" />
          </button>
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}
export default FaqItem
