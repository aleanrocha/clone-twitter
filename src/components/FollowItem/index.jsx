import PropTypes from 'prop-types'
import { getAvatar } from '../../utils/gerenateImages'

const FollowItem = ({ name, username }) => {
  const avatar = getAvatar(`${username}@email.com`)

  return (
    <div className='flex items-center justify-between gap-2 py-3'>
      <div className='flex items-center'>
        <img
          src={avatar}
          alt='user avatar'
          className='w-12 h-12 rounded-full mr-3'
        />
        <div>
          <p className='font-bold'>{name}</p>
          <p className='text-gray-500'>{username}</p>
        </div>
      </div>
      <button className='bg-white text-black font-bold px-4 py-2 rounded-full hover:bg-gray-200 transition duration-200'>
        Follow
      </button>
    </div>
  )
}

export default FollowItem

FollowItem.propTypes = {
  name: PropTypes.string,
  username: PropTypes.string,
}
