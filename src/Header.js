import React, { useState } from 'react'
import Logo from "./images/images/logo.svg"
import CloseIcon from '@mui/icons-material/Close';
function Header()
{
    const [menu,setmenu] = useState(false)
    function open(e)
    {
        e.preventDefault()
        setmenu(true)

    }
    function close(){
        setmenu(false)
    }
    return(
         <div className="header">
            <img src={Logo}></img>
            <ul>
                <li><a href="">model S</a></li>

                <li><a href="" >model 3</a></li>

                <li><a href="">model x</a></li>

                <li><a href="">model y</a></li>

                <li><a href="">solar roof</a></li>

                <li><a href="">solar roof</a></li>
            </ul>
            <ul>
                <li><a href="">shop</a></li>

                <li><a href="">account </a></li>

                <li><a href="" onClick = {open} >menu </a></li>
            </ul>
            <ul className="sidebar" style={{right:(menu==true)?"0":"-300px"}}>
                <div className='cross'><CloseIcon onClick={close} /></div>
                <li><a>model3</a></li>
                <li><a>model3</a></li>
                <li><a>model3</a></li>
                <li><a>model3</a></li>
            </ul>
         </div>
    )
}
export default Header