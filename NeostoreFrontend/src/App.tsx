import './App.css'
import Sidebar from './components/header/sidebar'
import ScreenHead from './components/header/screenHead'
import SupplierFilter from './components/screen/suppliers/suppliersFilter'

function App() {

  return (
    <>
      <div className="flex width-full height-full">
        <Sidebar />
        <div className="flex flex-grow flex-column">
          <ScreenHead />
          <SupplierFilter/>
        </div>
      </div>

    </>
  )
}

export default App
