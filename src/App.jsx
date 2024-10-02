import Sidebar from './components/Sidebar'
import TwitterForm from './components/TwitterForm'
import Tweet from './components/Tweet'
import TrendItem from './components/TrendItem'
import FollowItem from './components/FollowItem'
import { getAvatar, getRamdonImage } from './utils/gerenateImages'
import { useState, useEffect } from 'react'
import { v4 } from 'uuid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  const [tweets, setTweets] = useState([])
  useEffect(() => {
    const interval = setInterval(() => {
      addNewRandomTweets()
    }, 6000)
    return () => clearInterval(interval)
  }, [])
  const addNewRandomTweets = () => {
    const randomTweets = [
      'Acabei de entrar no clone do Twitter! Estou animado para me conectar com todos aqui! 🎉😊',
      'Olha só, finalmente cheguei aqui! Vamos interagir! 🚀💬',
      'Entrando no mundo dos tweets! Mal posso esperar para compartilhar ideias! 🌟✨',
      'Estou aqui no clone do Twitter! Quem mais está? Vamos conversar! 👋😄',
      'E aí, galera! Estou super empolgado para fazer novos amigos por aqui! ❤️🤗',
      'Finalmente no Twitter! Preparado para muitas aventuras! 🎊🌈',
      'Oi, pessoal! Cheguei para fazer parte dessa comunidade incrível! 💖🌍',
      'Acabei de me juntar a vocês! Vamos nos divertir juntos! 🥳🎈',
      'Estou aqui no clone do Twitter! Vamos nos conectar e compartilhar! 🌌📱',
      'Uau, que lugar legal! Ansioso para ver o que todos estão compartilhando! 😍📣',
    ]
    const randomTweet =
      randomTweets[Math.floor(Math.random() * randomTweets.length)]

    addNewTweet(randomTweet, Math.random() > 0.7)
  }
  const addNewTweet = (content, includeImage = false) => {
    const newTweet = {
      id: v4(),
      name: 'User',
      username: `user${Math.floor(Math.random() * 1000)}`,
      avatar: getAvatar(`user${Math.floor(Math.random() * 1000)}@email.com`),
      content,
      time: new Date().toLocaleString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
      image: includeImage ? getRamdonImage() : null,
      likes: 0,
      retweets: 0,
      comments: 0,
    }
    setTweets((prev) => [newTweet, ...prev])
  }

  return (
    <div className='flex mx-auto max-w-7xl'>
      <Sidebar />
      <main className='flex-grow border-l border-r border-gray-700 max-w-xl'>
        <header className='sticky top-0 z-10 bg-twitter-background bg-opacity-80 backdrop-blur-sm'>
          <h2 className='px-4 py-3 text-xl font-bold'>For you</h2>
        </header>
        <TwitterForm
          onTweet={(content) =>
            addNewTweet(content, Math.random() > 0.5 ? true : false)
          }
        />
        <div>
          {tweets.map((tweet) => (
            <Tweet key={tweet.id} tweet={tweet} />
          ))}
        </div>
      </main>
      <aside className='hidden xl:block w-80 px-4'>
        <div className='sticky top-0 pt-2'>
          <div className='relative'>
            <FontAwesomeIcon
              icon={faSearch}
              className='absolute top-3 left-3 text-gray-500'
            />
            <input
              type='text'
              placeholder='Search Twitter'
              className='w-full bg-gray-800 text-white rounded-full outline-none py-2 pl-10'
            />
          </div>
          <div className='bg-gray-800 rounded-xl mt-4 p-4'>
            <h2 className='font-bold text-xl mb-4'>Subscribe to Premium</h2>
            <p className='text-gray-500 mb-4'>
              Subscribe to unlock features and if eligible, recieve a share of
              ads revenue.
            </p>
            <button className='bg-twitter-blue text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-200'>
              Subscribe
            </button>
          </div>
          <div className='bg-gray-800 rounded-xl mt-4 p-4'>
            <h2 className='font-bold text-xl mb-4'>Whats happening</h2>
            <TrendItem category='NFL - LIVE' name='Cardinals at Bills' />
            <TrendItem
              category='Sports - Trending'
              name='Kyle Dugger'
              tweetCount='5,567'
            />
            <TrendItem
              category='Sports - Trending'
              name='Anthony Richardson'
              tweetCount='11,984'
            />
            <TrendItem
              category='Sports - Trending'
              name='Bryce Youngs'
              tweetCount='5,964'
            />
            <TrendItem
              category='Sports - Trending'
              name='Daboll'
              tweetCount='1,575'
            />
          </div>
          <div className='bg-gray-800 rounded-xl mt-4 p-4'>
            <h2 className='font-bold text-xl mb-4'>Who to follow</h2>
            <FollowItem name='Bill Gates' username='bill-gates' />
            <FollowItem name='Will Smith' username='will-smith' />
            <FollowItem name='Rodolfo Mori' username='rofolfo-mori' />
          </div>
        </div>
      </aside>
    </div>
  )
}

export default App
