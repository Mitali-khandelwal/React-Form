import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
const Table = ({data , handledelete , handledit})=>{

    return(
        <>
        <table>

        <tr>
            <th>Name</th>
            <th>line1</th>
            <th>line2</th>
            <th>city</th>
            <th>state</th>
            <th>zip</th>
            <th>Email</th>
            <th>Delete</th>
            <th>Update</th>
        </tr>
        
{data?.map((info) =>(
    <tr>
        <td>{info.name}</td>
        {info.address.map((e)=>(
            <>
             <td>{e.line1}</td>
             <td>{e.line2}</td>
             <td>{e.city}</td>
             <td>{e.state}</td>
             <td>{e.zip}</td>
            </>
        ))}
        <td>{info.email}</td>
<td onClick={()=>handledelete(info.id)}>X</td>
<td onClick={()=>handledit(info.id)}><EditIcon/></td>

    </tr>
))}
</table>
       
        
        </>
    )



}

export default Table;