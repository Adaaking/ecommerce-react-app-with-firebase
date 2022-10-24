import React from 'react'
import { products } from '../utils/data/data'
import { Link } from 'react-router-dom'
import './sidebar.scss'
import { useDispatch, useSelector } from 'react-redux'
import { sidebarActions } from '../redux/features/sidebarSlice'
import {CgProfile} from 'react-icons/cg'
import {IoCloseOutline} from 'react-icons/io5'
const Sidebar = () => {
  const isSidebarOpen = useSelector(state => state.sidebar.isSidebarOpen)
  console.log(isSidebarOpen)
  const dispatch = useDispatch()
  return (
    <div className={isSidebarOpen?"sidebar activeSidebar": "sidebar inactiveSidebar"}>
        <div className='user'>
          <CgProfile style={{
            fontSize:"30px"
          }}/>
          <p>hello, Addisu</p>
          <IoCloseOutline style={{
            fontSize:"40px",
            position:"absolute",
            color:"black",
            cursor:"pointer",
            top:50,
            right:2
          }}
          onClick={() => dispatch(sidebarActions.closeSidebar())}
          />
        </div>
       <div className='links'>
         {products.map((product) => {
            return <Link to={product.path} onClick={
              dispatch(() => sidebarActions.closeSidebar())
            }
            key={product.id}
            >{product.name}</Link>
          })}
       </div>
    </div>
  )
}

export default Sidebar