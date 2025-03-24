import './App.css'
import Sidebar from './components/header/sidebar'
import ScreenHead from './components/screen/screenHead'

function App() {

  return (
    <>
      <div className="flex width-full height-full">
        <Sidebar />
        <div className="flex flex-grow flex-row">
          <ScreenHead />
        </div>

      </div>

    </>
  )
}

export default App
