import React from 'react'
import "./App.css"
import Counter from './components/Counter'
import UserInput from './components/UserInput'
import Videos from './components/Videos'


const videos = ["udemy", "YouTube", "Tutorial"]
const App = () => {
  return (
    <div className='App'>
      <Counter/>
      <UserInput/>
      <Videos videos={videos}/>
      
    </div>
  )
}

export default App



// const App = () => {
//   return (
//     <div className='App'>
//       <h1>Coding With Eyüp</h1>
//       {/* <button>Click</button> */}
//       {/* <button aria-label='disabled' disabled>Disabled</button>
//       <button aria-label='enabled'>Enabled</button> */}
//       <button data-testid='btnDisabled' disabled>Disabled</button>
//       <button data-testid='btnEnabled'>Enabled</button>
//       <h3 className='yellow'>Benim rengim sarı</h3>
//     </div>
//   )
// }
