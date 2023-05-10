/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import './Input.css'

const Input = ({ text, type, onChange, placeholder, label, options }) => {
  return (
    <div>
      {type === 'text' &&
        <div className="text-container">
          <label className="label">{label}</label>
          <input type="text" className="text-input" value={text} onChange={onChange} placeholder={placeholder} />
        </div>
      }
      {type === 'password' &&
        <div className="text-container">
          <label className="label">{label}</label>
          <input type="password" className="text-input" value={text} onChange={onChange} placeholder={placeholder} />
        </div>
      }
      {type === 'select' &&
        <div className="select-container">
          <label className="label">{label}</label>
          <select className='select-input' onChange={onChange} value={text} placeholder={placeholder}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      }
    </div>
  )
}

export default Input
