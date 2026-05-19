import Nav from './components/Nav'
import Footer from './components/Footer'
import { Outlet } from 'react-router'


function App() {

  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
