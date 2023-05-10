/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import './Button.css'

export default function Button ({ text, type, isDisabled, onClick }) {
  return (
    <div>
      {type === 'submit' &&
        <button className="primary-button" disabled={isDisabled} onClick={onClick}>{text}</button>}
      {type === 'primary-small' &&
        <button className="primary-small-button" disabled={isDisabled} onClick={onClick}>{text}</button>}
      {type === 'secondary' &&
        <div className="header">
          <button
            className="secondary-button"
            disabled={isDisabled}
            onClick={onClick}
          >
            {text}
          </button>
          {isDisabled && <div className="line"></div>}
        </div>
      }
      {type === 'secondary-small' &&
        <div className="header">
          <button
            className="secondary-small-button"
            disabled={isDisabled}
            onClick={onClick}
          >
            {text}
          </button>
          {isDisabled && <div className="line"></div>}
        </div>
      }
      {type === 'primary-outlined-small' && (
        <button
          className="primary-outlined-small-button"
          disabled={isDisabled}
          onClick={onClick}
        >
          {text}
        </button>
      )}
    </div>
  )
}
