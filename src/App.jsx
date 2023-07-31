import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import styles  from './App.module.css'

function App() {

  return (
      <div>
        <Navbar />
        <div className={styles.container}>
          <Outlet />
        </div>
      </div>
    
  )
}

export default App
