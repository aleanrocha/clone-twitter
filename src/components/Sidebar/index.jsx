import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import {
  faBookmark,
  faEllipsis,
  faEnvelope,
  faHashtag,
  faHome,
  faUser,
  faUserFriends,
  faFeatherAlt,
} from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons/faBell'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

const NavItem = ({ icon, text }) => (
  <div
    className='flex items-center p-3
  rounded-full cursor-pointer hover:bg-gray-600 transition duration-200'
  >
    <FontAwesomeIcon icon={icon} className='text-lg lg:text-2xl m-auto xl:m-0 xl:mr-3' />
    <p className='text-md hidden xl:inline'>{text}</p>
  </div>
)

const Sidebar = () => {
  return (
    <div className='w-20 xl:w-64 sticky top-0 md:px-2 h-screen flex flex-col items-center md:block'>
      <FontAwesomeIcon
        icon={faTwitter}
        className='text-blue-400 text-3xl m-4'
      />
      <nav>
        <NavItem icon={faHome} text={'Home'} />
        <NavItem icon={faHashtag} text={'Explore'} />
        <NavItem icon={faBell} text={'Notifications'} />
        <NavItem icon={faEnvelope} text={'Messages'} />
        <NavItem icon={faBookmark} text={'BookMarks'} />
        <NavItem icon={faUserFriends} text={'Communities'} />
        <NavItem icon={faTwitter} text={'Premium'} />
        <NavItem icon={faUser} text={'Profile'} />
        <NavItem icon={faEllipsis} text={'more'} />
      </nav>
      <button
        type='button'
        className='bg-blue-400 text-white rounded-full font-bold p-1 md:px-4 md:py-3 mt-4 w-10 md:w-full cursor-pointer'
      >
        <FontAwesomeIcon
          icon={faFeatherAlt}
          className='text-lg md:text-2xl inline xl:hidden'
        />
        <span className='hidden xl:inline'>Twitter</span>
      </button>
    </div>
  )
}

export default Sidebar

NavItem.propTypes = {
  icon: PropTypes.object,
  text: PropTypes.string
}
