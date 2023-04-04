
import React, {useState} from 'react'
import "./navbar.css"
const Dropdown = () => {
    const [dropdown, setDropDown] = useState(false)
  return (
    <div>

        <ul className={dropdown? "services-submenu clicked" : "services-submenu"} onclick={() => {setDropDown(!dropdown)}}>

            {serviceDropwdon.map(()=> {
                return (
                    <li>
                        <Link to={item.path} className={item.cName} onClick={() =>setDropDown(false)}>{item.title}</Link>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

let serviceDropwdon = [
    {
        id:1,
        title:"Volunteer with us",
        path:"./volunteer",
        cName:"nav-item",

    },
    {
        id:2,
        title:"Partner with us",
        path:"./partner",
        cName:"nav-item",

    }
]

export default Dropdown