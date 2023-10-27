import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBookBookmark } from '@fortawesome/free-solid-svg-icons'
import './User.css' 

const Users = (props) => {
    // console.log(props)
    const { img, logo, name, time, title } = props.programming;
    const handleAddTocart= props.handleAddTocart;
     // Mark as read click Spent time Updete
    const handleSpentTime =props.handleSpentTime;
    
    return (
        <div className='programming'>
            <img src={img} alt="loding"/>
            <div className='user-detailes-container'>

                <div className='user'>
                    <img src={logo} alt="" />
                    <div className='user-detailes'>
                        <h1>{name}</h1>
                        <p>mar 14 (4 days ago)</p>
                    </div>


                    <p>{time} min read <button onClick={()=>handleAddTocart(props.programming)}   style={{color:'rgb(116, 115, 115)'}}><FontAwesomeIcon icon={faBookBookmark} /></button></p>
                    </div>
                    <h6>{title}</h6>
                    <p>#beginners <spen>  #programming </spen></p>
                     {/* <button  onClick={()=>handleSpentTime(props.programming)} >Mark as read</button> */}
                     <button  onClick={()=>handleSpentTime(props.programming)} >Mark as read</button>
                     

            </div>



        </div>
    );
};

export default Users;