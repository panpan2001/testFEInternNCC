import SidebarItem from '../../Component/SidebarItem/SidebarItem'
import './SideBar.css'

const SideBar =()=>{
    return (
    <div className="sidebar_container container">
       <div className='sidebar_wrap '>
       <SidebarItem href='../Main.jsx' name='Home'/>
        <SidebarItem  href='' name= 'Services'/>
        <SidebarItem  href='' name= 'News'/>
        <SidebarItem  href='' name= 'Blog'/>
        <SidebarItem  href='' name= 'Contact'/>
       </div>
       

    </div>)
}

export default SideBar