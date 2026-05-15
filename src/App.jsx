import { useState } from 'react'
import Home from './pages/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      {/* <section className='flex flex-col justify-self-center gap-2'>
        <div className='bg-red-100 px-2 border-0 rounded-[10px] hover:bg-red-200'>
          <h1 className='text-black/80 text-[2rem] font-semibold'>Get started</h1>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section> */}

    </>
  )
}

export default App
