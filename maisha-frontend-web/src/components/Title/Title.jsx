/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import './Title.css'

const Title = ({ text, initialPage }) => {
  return (
    <div className='title-container'>
      <h1 className='title-style'>{text}</h1>
      {!initialPage && <div className='title-line'></div>}
    </div>
  )
}

export default Title
