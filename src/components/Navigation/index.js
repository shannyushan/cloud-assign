import React, {useState } from "react";
import {Link} from "react-router-dom"
import "../../assets/css/base.css";



const NAVLINKS = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Shop",
    link: "/shop",
  },
  {
    name: "Category",
    link: "/category",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "FAQ",
    link: "/faq",
  }
];

export default function() {
  const iconColor = "black"


  const [user, setUser] = useState({});
  const [cart, setCart] = useState(false);
  const [profile, setProfile] = useState(false);
  const [search, setSearch] = useState(false);



  function handleCart() {
    return;
  }
  function handleProfile() {
    return;
  }

  return (
    <header className="py-7 lg:py-9 bg-white">
      <div className='main-wrapper'>
        <nav className='flex justify-between  items-center cursor-pointer'>
      <div>
        <span className="uppercase font-bold hover:text-black">SimplexDecor</span>
      </div>


  <div>
      <ul className="flex gap-11 text-sm">
        {NAVLINKS.map((navitem, index) => {
          return (
            <Link to={navitem.link} key={index} className="navitem">
                {navitem.name}
            </Link>
          );
        })}
      </ul>
      </div>

     <div>
      <ul className="sideoptions flex gap-4 text-sm">
        <div className="flex-box" onClick={(e) => handleCart()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={"16"}
            height="16"
            fill={iconColor}
            className="bi bi-cart"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
        </div>
        <div className="flex-box" onClick={(e) => handleProfile()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={"16"}
            height="16"
            fill={iconColor}
            className="bi bi-person"
            viewBox="0 0 16 16"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
          </svg>
        </div>
        <div className="flex-box" onClick={(e) => setSearch(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={"16"}
            height="16"
            fill={iconColor}
            className="bi bi-person"
            viewBox="0 0 16 16"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
          </svg>
        </div>
      </ul>
      </div>
  
      
</nav>
      </div>
    </header>
  );
};


