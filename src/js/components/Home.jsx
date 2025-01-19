import React from "react";
import Contador from "./Contador";


//create your first component
const Home = () => {
	return (
		<div className="container ">
			<div className="d-flex justify-content-center mt-5">
				<Contador/>
			</div>
			
		</div>
		
	);
};

export default Home;
