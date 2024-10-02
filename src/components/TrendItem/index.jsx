import PropTypes from 'prop-types'

const TrendItem = ({ category, name, tweetCount }) => {
  return (
    <div className='py-2 hover:bg-gray-800 transition duration-200 cursor-pointer'>
      <p className='text-gray-500 text-sm'>{category}</p>
      <p className='font-bold'>{name}</p>
      {tweetCount && <p className='text-gray-500 text-sm'>{tweetCount} posts</p>}
    </div>
  )
}

export default TrendItem

TrendItem.propTypes = {
  category: PropTypes.string,
  name: PropTypes.string,
  tweetCount: PropTypes.string,
}
