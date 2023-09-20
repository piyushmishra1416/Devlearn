
import SideBar from './Sidebar'
import { Outlet } from 'react-router'
import "./Style.css"


function Admin() {
  return (
    <div className='admin'>
    
      <SideBar/>
      <Outlet />
   
    </div>
  )
}

export default Admin