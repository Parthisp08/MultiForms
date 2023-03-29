import React from 'react'
import './Info.css'
import {useNavigate, useNavigation} from 'react-router-dom'

const PersonalInfo = () => {
  const navigate = useNavigate();

  const Plandetails = () =>
  {
   document.getElementById('myForm').style.display = "none";
    navigate('/plans')

  }
  return (
    <form id='myForm'>
    <div className='infoDetails'>
   <div className='detailsDiv'>
      <div className='heading'>
        <h2>Personal info</h2>
        <br/>
        <p>Please provide your name, email, address, and Phone number</p>
        <br/>
        <label className='lblText' for='name'>Name</label>
        <br/>
        <input className='' type='text'  id='name' placeholder='e.g. Parthiban Lingam' required/> 
        <br/>
        <label className='lblText' for='email'>Email Address</label>
        <br/>
        <input className='' type='email'  id='email' placeholder='e.g. Parthi@test.com' required/> 
        <br/>
        <label className='lblText' for='phone'>Phone Number</label>
        <br/>
        <input className='' type='tel'  id='phone' placeholder='e.g. Parthiban Lingam' required/> 

      </div>

      
     
      </div>
<footer className="footer">
  <button onClick={Plandetails} type='submit' className="next">Next</button>
</footer>

    </div>
    </form>
  )
}

export default PersonalInfo