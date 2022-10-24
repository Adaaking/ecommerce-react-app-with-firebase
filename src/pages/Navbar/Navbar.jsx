import React from 'react'
import './navbar.scss'
import {AiOutlineMenu} from 'react-icons/ai'
import Sidebar from '../../sidebar/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { sidebarActions } from '../../redux/features/sidebarSlice'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import CartSidebar from '../../cartSidebar/CartSidebar'
import { cartActions } from '../../redux/features/cartSlice'
const Navbar = () => {
  const items = useSelector(state => state.cartReducer.carts)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <div className='navbar'>
       <Sidebar/>
        <div className='menu'>
          <AiOutlineMenu className='menuIcon' onClick={() => dispatch(sidebarActions.openSidebar())
          }/>
        </div>
        <div className='search'>
            <input type="text" placeholder='search by category'/>
            <button>search</button>
        </div>
        <div className='right'>
            <Link to="/signup">signup</Link>
            <Link to="/login">Login</Link>
        </div>
        <div className='cartbtn'>
          <button onClick={()=>dispatch(cartActions.showCart())}>Cart: <span style={{color:"red"}}>{items.length}</span></button>
        </div>
        <CartSidebar />
    </div>
  )
}

export default Navbar