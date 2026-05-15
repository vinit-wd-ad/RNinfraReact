import { useState } from 'react'
import Home from './pages/Home/Home'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Dholera from './pages/Dholera/Dholera'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      {/* <Home /> */}
      <Dholera />
      <Footer />
    </>
  )
}

export default App
