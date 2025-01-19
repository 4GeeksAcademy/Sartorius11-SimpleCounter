import React, { useState } from "react";

const Contador = (props) => {

    const [count,setCount] = useState(0);
 
	return (
      
        <button  className="btn btn-danger  col-12 m-5" style={{ height: "400px", fontSize:"300px"}} onClick={()=>setCount(count + 1)}>{count}</button>
	);
};

export default Contador;
