import { useEffect, useState } from 'react'
import Header from './Header'
import Meme from './Meme'

function App() {
  
  const [memes, setMemes] = useState([]);
  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
    .then(res => res.json())
    .then(data => {
      setMemes(data.data.memes)
    })

  },[])

  return (
    <div>
      <Header/>
      <Meme memesData={memes}/>
    </div>
  )
}

export default App
