import {
  faChartBar,
  faComment,
  faEllipsis,
  faHeart,
  faRetweet,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import PropTypes from 'prop-types'

const Tweet = ({ tweet }) => {
  const [comment, setComment] = useState(0)
  const [like, setLike] = useState(0)
  const [retweet, setRetweet] = useState(0)

  const handleAction = (action) => {
    switch (action) {
      case 'comment':
        setComment((comment) => comment + 1)
        break
      case 'retweet':
        setRetweet((retweet) => retweet + 1)
        break
      default:
        setLike((like) => like + 1)
        break
    }
  }
  return (
    <div className='border-b border-gray-700 p-4 hover:bg-gray-800 transition duration-200'>
      <div className='flex space-x-3'>
        <img
          src={tweet.avatar}
          alt='User avatar'
          className='rounded-full w-10 h-10 md:w-12 md:h-12'
        />
        <div className='flex-1 w-full'>
          <div className='flex items-center justify-between'>
            <div>
              <span className='font-bold'>{tweet.name}</span>
              <span className='text-gray-500 ml-2 text-sm md:text-lg'>{tweet.username}</span>
              <span className='text-gray-500 ml-2 text-sm md:text-lg'>{tweet.time}</span>
            </div>
            <FontAwesomeIcon
              icon={faEllipsis}
              className='text-gray-500 cursor-pointer'
            />
          </div>
          <p className='mt-2 text-sm md:text-lg'>{tweet.content}</p>
          {tweet.image && (
            <img
              src={tweet.image}
              alt='User image content'
              className='mt-3 rounded-2xl max-w-full h-auto'
            />
          )}
          <div className='flex justify-between mt-4 text-gray-500'>
            <div
              className='flex items-center cursor-pointer hover:text-blue-400 transition duration-200'
              onClick={() => handleAction('comment')}
            >
              <FontAwesomeIcon icon={faComment} />
              <span className='ml-2'>{comment}</span>
            </div>
            <div
              className='flex items-center cursor-pointer hover:text-green-400 transition duration-200'
              onClick={() => handleAction('retweet')}
            >
              <FontAwesomeIcon icon={faRetweet} />
              <span className='ml-2'>{retweet}</span>
            </div>
            <div
              className='flex items-center cursor-pointer hover:text-red-400 transition duration-200'
              onClick={() => handleAction('like')}
            >
              <FontAwesomeIcon icon={faHeart} />
              <span className='ml-2'>{like}</span>
            </div>
            <div className='flex items-center cursor-pointer hover:text-blue-400 transition duration-200'>
              <FontAwesomeIcon icon={faChartBar} />
            </div>
            <div className='flex items-center cursor-pointer hover:text-blue-400 transition duration-200'>
              <FontAwesomeIcon icon={faChartBar} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tweet

Tweet.propTypes = {
  tweet: PropTypes.object,
}
