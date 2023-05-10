/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import './Subtitle.css'

const Subtitle = ({ text, type }) => {
  return (
    <div>
      {type === 'primary' &&
        <>
          <h2 className='sub-title'>{text}</h2>
          <div className="line-subtitle"></div>
        </>
        }
      {type === 'secondary' &&
        <h3 className='sub-title-secondary'>{text}</h3>
      }
    </div>
  )
}

export default Subtitle
