
import { Outlet } from 'react-router'
import "./Style.css"
import ResponsiveDrawer from '../layouts/Sidebar'


function Admin() {
  return (
    <div className='admin'>
    
      <ResponsiveDrawer/>
      <Outlet />
   
    </div>
  )
}

export default Admin
