import React, {Link, useState} from 'react'
import { CartIcon } from '../../globals/icons/icons'


const NAVLINKS  = [
  {
    "name": "Home",
    "link": "/"
  },
  {
    "name": "Shop",
    "link": "/shop"
  },
  {
    "name": "About",
    "link": "/about"
  },
  {
    "name": "Contact",
    "link": "/contact"
  },
  {
    "name": "FAQ",
    "link": "/faq"
  }
]


const Navigation = () => {
  const [user, setUser] = useState({})
  const [cart, setCart] = useState(false)
  const [profile, setProfile] = useState(false)
  const [search, setSearch] = useState(false)


    function handleCart(){
      return
    }
    function handleProfile(){
      return
    }

  return (
    <div className='d-flex backgroundcolor class'>
      <div className=''>
        <span className='brand'>SimplexDecor</span>
      </div>


      <ul className='flex-row-item'>
        {NAVLINKS.map(navitem =>{
          return (
            <Link to= {navitem.link} className="nav-item">{navitem.name}</Link>
          )
        })}
      </ul>
      <ul className='sideoptions '>
        <div className='flex-box' onClick={e => handleCart()}>
            {CartIcon(16, "black")}
          </div>
        <div className='flex-box' onClick={e => handleProfile()}>
          {ProfileIcon(16, "black")}
        </div>
        <div className='flex-box' onClick={e => setSearch(true)}>
          {SearchIcon(16, "black")}
        </div>
      </ul>
    </div>
  )
}




export default Navigation