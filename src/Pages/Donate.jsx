import React from 'react'
import styled from 'styled-components'
import  "./donate.css"

const Donate = () => {


  return (
    <Donation className="donation">

        <span className='qtn' href="https://">
            
            <div className='radio'><input type="checkbox"/> once</div>
            <div className='option'><input type="checkbox"/> recurring</div>
            
            
            </span>

            <section href="/#" className='selection'>

            
<article className="article-one">
<label> I want to Donate</label>
   
   <select>
       <option> </option>
       <option>Food </option>
       <option>Dress </option>
       <option> Toys</option>
       <option>Money</option>
       <option> Education</option>
   </select>
  
</article>
<article className="article-two">
<label>Currency</label>
   
   <select>
     <option> </option>
       <option> Usd</option>
       <option> NGN</option>
   </select>
  
</article>

<article className="article-three">
    <label>How much do you want to Donate</label>
   <li><select>
        <option> </option>
    </select>
    
     </li>
    
</article>
<button className='d-btn'>Donate Now</button>
</section>
    </Donation>
  )
}
const Donation = styled.section`
.donation{
   background: #333333;
.qtn{
display: flex;
align-items: center;
gap: 20px;
}
.selection{
    display: flex;
    gap: 2px;
    align-items: center;
}
}   
`
export default Donate