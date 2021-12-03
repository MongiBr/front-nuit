


import './table.css'

 function Table(props){
	 
	return(
		
    <tr>
      <th scope="row">{props.list.id}</th>
      <td>{props.list.date}</td>
      <td>{props.list.punchIn}</td>
	  <td>{props.list.punchOut}</td>
	  <td>{props.list.production}</td>
	  <td>{props.list.break}</td>
	  <td>{props.list.overtime}</td>
    
    </tr>
	
	);

}

export default Table;