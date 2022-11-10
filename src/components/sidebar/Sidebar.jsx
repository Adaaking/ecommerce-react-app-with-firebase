import React from 'react'
import { products } from '../../utils/data/data'
import { Link } from 'react-router-dom'
import './sidebar.scss'
import { useDispatch, useSelector } from 'react-redux'
import { sidebarActions } from '../../redux/features/sidebarSlice'
import {CgProfile} from 'react-icons/cg'
import {IoCloseOutline} from 'react-icons/io5'
const Sidebar = () => {
  const isSidebarOpen = useSelector(state => state.sidebar.isSidebarOpen)
  const user = useSelector(state => state.loginReducer.currentUser)
  console.log(isSidebarOpen)
  const dispatch = useDispatch()
  return (
    <div className={isSidebarOpen?"sidebar activeSidebar": "sidebar inactiveSidebar"}>
{user? <div className='user'>
        <CgProfile style={{
          fontSize:"30px",
          marginLeft:"2rem",
          color:"coral"
        }}/>
        <p style={{
          fontFamily:'Roboto Condensed sans-serif',
          marginLeft:"2rem"
        }}>hello, {user.email}</p>
      </div>:<div className='user' style={{
        display:"flex",
        justifyContent:"center"
      }}>
      <Link><h3 style={{textDecoration:"none",color:'white',textAlign:'center'}}>sign up</h3></Link>
        </div>}
        <IoCloseOutline style={{
          fontSize:"40px",
          position:"absolute",
          color:"black",
          cursor:"pointer",
          top:60,
          right:2
        }}
        onClick={() => dispatch(sidebarActions.closeSidebar())}
        />
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