import './App.css'
import Sidebar from './components/header/sidebar'
import ScreenHead from './components/header/screenHead'
import SupplierList from './components/screen/suppliers/suppliersList'

function App() {

  return (
    <>
      <div className="flex width-full height-full">
        <Sidebar />
        <div className="flex flex-grow flex-column">
          <ScreenHead />
          <SupplierList/>
        </div>
      </div>

    </>
  )
}

export default App
