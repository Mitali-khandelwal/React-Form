import React from 'react'

const Address = ({address, handleChange})=>{

return(
    <>
    <label >Line1</label>
    <input type="text" 
       id='line1'
       placeholder='Line 1'
       name = "line1"
       value= {address.line1}
       onChange = {handleChange}
/>
    <label >Line2</label>
    <input type="text" 
       id='line2'
       placeholder='Line 2'
       name = "line2"
       value= {address.line2}
       onChange = {handleChange}
/>
    <label >city</label>
    <input type="text" 
       id='City'
       placeholder='Your City'
       name = "city"
       value= {address.city}
       onChange = {handleChange}
/>
    <label >state</label>
    <input type="text" 
       id='state'
       placeholder='Your state'
       name = "state"
       value= {address.state}
       onChange = {handleChange}
/>
    <label >Zip</label>
    <input type="text" 
       id='zip'
       placeholder='Your Address'
       name = "zip"
       value= {address.zip}
       onChange = {handleChange}
/>
    </>
)


}
export default Address ;