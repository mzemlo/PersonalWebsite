import React, { Component } from "react";
//import  "./SectionSubHeading.scss";

class SectionSubHeading extends Component{
	render(){
		return(
			<p dangerouslySetInnerHTML={{__html: this.props.content }} className="SectionSubHeading"/>
		);
	}
}

export default SectionSubHeading;