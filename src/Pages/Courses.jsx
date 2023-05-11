import React from 'react'
import { Link } from 'react-router-dom'
// import { MdHeight } from 'react-icons/md'

const Courses = () => {
  return (
    <div className="overlay" style={{background:"rgba(0,0,0,0.2)" , height:"100%",  width:"100%", position:"fixed", display:"flex", justifyContent:"center", alignItems:"center"}} >
     
      <div className="white"  style={{background:"white", width:"50%", height:"50%", borderRadius:"6px", display:"flex", flexDirection:"column", gap:"20px", justifyContent:"center", alignItems:"center" ,fontSize:"60px", color:"Red"}}> 
      Coming Soon

        <Link to="/"> <button style={{ background:"#28D1ff", color:"white", borderRadius:"8px",padding:"10px 30px", border:"1px solid #28d1ff" }}>Back</button></Link>
      </div>
    </div>
  )
}

export default Courses
// background-color: rgba(0, 0, 0, 0.425);
// position: fixed;
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// width: 100%;
// height: 100%;
// top: 0;
// bottom: 0;
// left: 0;
// right: 0;