import 'antd/dist/antd.css';
import '../styles.css'
import '../chat-window.css'
import InstantMessenger from '../components/chat-window'
import PlayerCard from '../components/player-card.js';
import UserObjectCanvas from '../components/user-object-canvas.js';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    
  return (
    <>
      <UserObjectCanvas />
      <InstantMessenger />
      <PlayerCard />
      <Component {...pageProps} />
    </>
  )
}