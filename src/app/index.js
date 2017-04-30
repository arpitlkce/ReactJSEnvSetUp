import React from "react";
import ReactDom from "react-dom";


console.log('logan');
class Welcome extends React.Component {
	render(){
		return (
				<h1> Hello ReactJS Tutorial </h1>
			);
	}

}
var app = document.getElementById("app");

ReactDom.render(<Welcome/>,app);