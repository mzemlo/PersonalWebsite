import React, { Component } from "react";
import  "./SectionHeading.scss";

class SectionHeading extends Component{
	render(){
		return(
			<h1 className="SectionHeading">{this.props.title}</h1>
		);
	}
}

export default SectionHeading;