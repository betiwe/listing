import etsy from './etsy.json'
import './App.css'
import Listing from './Components/Listing'


function App() {

  return (
    <>
      <Listing items={etsy}/>
    </>
  )
}

export default App
