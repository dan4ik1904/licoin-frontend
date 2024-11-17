import './Nav.css'
import { Link } from 'react-router-dom'
import { IoHome } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";
import { FaMedal, FaShop } from "react-icons/fa6";
import { FaMoneyCheck, FaUserCircle } from "react-icons/fa";


function Nav() {

  return (
    <div className="mobile__bottom">
      <div className="nav container">
          <Link to={'/'}>
            <IoHome color='white' fontSize={'40px'}/>
          </Link>
          <Link to={'/transaction'}>
            <FaMoneyCheck color='white' fontSize={'40px'}/>
          </Link>
          <Link to={'/products/add'}>
            <IoIosAddCircle color='white' fontSize={'40px'}/>
          </Link>
          <Link to={'/products/'}>
            <FaShop color='white' fontSize={'40px'}/>
          </Link>
          <Link to={'/top'}>
            <FaMedal color='white' fontSize={'40px'}/>
          </Link>
          <Link to={'/me'}>
            <FaUserCircle fontSize={'40px'} color="white" />
          </Link>
      </div>
    </div>
  )
}

export default Nav;
