import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets' 

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
         <h1>Exploring Menu</h1>
         <p className='explored-menu-text'>Our menu features a diverse selection of delicious dishes made with fresh ingredients. Enjoy classic favorites like pizzas with a variety of toppings, juicy burgers, flavorful pastas, and fresh salads.</p>
         
         <div className='explore-menu-list'> 
            {menu_list.map((item,index)=>{
                return (
                   <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                       <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                       <p>{item.menu_name}</p>
                   </div>
                )
            })}
         </div>
         <hr />
    </div>
  )
}

export default ExploreMenu
