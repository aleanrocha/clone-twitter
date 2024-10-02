import {
  faCalendarAlt,
  faChartBar,
  faFilm,
  faImage,
  faMapMarkedAlt,
  faSmile,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef } from 'react'
import PropTypes from 'prop-types'

const TwitterForm = ({ onTweet }) => {
  const textareaRef = useRef()
  const handleSubmit = () => {
    if (textareaRef.current.value) {
      onTweet(textareaRef.current.value)
      textareaRef.current.value = ''
    }
  }
  return (
    <div className='border-b border-gray-700 p-4'>
      <textarea
        name=''
        id=''
        className='w-full bg-transparent text-white text-xl resize-none outline-none'
        placeholder='What`s happening ?'
        ref={textareaRef}
      />
      <div className='flex justify-between items-center mt-4'>
        <div className='flex space-x-4'>
          <FontAwesomeIcon
            icon={faImage}
            className='text-blue-400 cursor-pointer'
          />
          <FontAwesomeIcon
            icon={faFilm}
            className='text-blue-400 cursor-pointer'
          />
          <FontAwesomeIcon
            icon={faChartBar}
            className='text-blue-400 cursor-pointer'
          />
          <FontAwesomeIcon
            icon={faSmile}
            className='text-blue-400 cursor-pointer'
          />
          <FontAwesomeIcon
            icon={faCalendarAlt}
            className='text-blue-400 cursor-pointer'
          />
          <FontAwesomeIcon
            icon={faMapMarkedAlt}
            className='text-blue-400 cursor-pointer'
          />
        </div>
        <button
          type='button'
          className='bg-blue-400 text-white font-bold px-4 py-2 rounded-full hover:bg-blue-500 transition duration-200'
          onClick={handleSubmit}
        >
          Tweet
        </button>
      </div>
    </div>
  )
}

export default TwitterForm

TwitterForm.propTypes = {
  onTweet: PropTypes.func,
}
