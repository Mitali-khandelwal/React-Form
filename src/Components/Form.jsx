import React from 'react';
import { useState } from 'react';
import Table from './Table';
import Address from './Address';

const Form = ()=>{
const [form , setform] = useState({
    "name" : "",
    "email": "",
    "id" : "" ,
    "address": [{
      line1: "",
      line2: "",
      city: "",
      state: "",
      zip: "",
    }]
})

const [data , setdata] = useState([])
const handleSubmit = (e)=>{
   e.preventDefault();
   if(form.id){
setdata(data.map((obj) => obj.id === form.id ? form:obj));
   }
else{
   setdata([...data,{...form , id:Math.floor(100000 + Math.random() * 900000)}])
}
// console.log(form)

resetForm();
}

const resetForm = () => {
setform({
   "name" : "",
   "email": "",
   "id" : "" ,
   "address": [{
      line1: "",
      line2: "",
      city: "",
      state: "",
      zip: "",
      
    }]
});
}
const handleChange = (e) =>{
 const {name , value} = e.target

 if(form.hasOwnProperty(name)){
   setform({ ...form , [name]: value})
 }
 else{
   const address = [...form.address]
   address[0] = {...address[0], [name]:value } 
   setform({...form,address})
 }

}

const handledit = (id)=>{
const newdata = data.find(obj => obj.id === id)
setform(newdata)
}

const handledelete = (id)=>{
setdata(data.filter((obj)=> obj.id !== id));
}

return(
    <>
    <div className="form-box">

          <form  onSubmit={handleSubmit}>
    <label>Name  </label>
    <input type="text" 
    id='name'
       placeholder='Your Name'
       name = "name"
       value= {form.name}
       onChange = {handleChange}
       />
    <label>Address:-</label>
    <br />
    {form?.address.map((add) => (
      <Address  address = {add} handleChange = {handleChange}/>
    ))}

       
    <label>Email</label>
    <input type="email" 
       id='email'
       placeholder='Your email'
       name = "email"
       value= {form.email}
       onChange = {handleChange}/>
       <label ><button type='submit'>{form.id ? 'update': 'Submit'}</button></label>
    </form>   
       </div>   

 
    <Table data={data} handledelete = {handledelete}  handledit = {handledit}/>
    
    </>
)
}
export default Form;