import React, {Component} from 'react';
//import Back1 from "../../img/background2.png";
//import Back2 from "../../img/background2.png";
//import Back3 from "../../img/background2.png";
//import Back4 from "../../img/background2.png";
import './SingleProjectBox.scss';
import SectionHeading from '../../elements/SectionHeading';
import SectionSubHeading from '../../elements/SectionSubHeading';

class SingleProjectBox extends Component {
	constructor(props){
		super(props);
		this.state = {
			modalClass: 'SingleProjectBox__modal',
		};
	}
	showModal = () => {
		this.setState({ modalClass: 'SingleProjectBox__modal--active' });
	};
	hideModal = () => {
		this.setState({ modalClass: 'SingleProjectBox__modal' });
	};
	technologiesToList = (technology) => {
		return <span key={technology}>{technology}</span>;
	};
	imagesToList = (img, index) => {
		if(index <= 0){
			return (<div key={img} className="carousel-item active">
						<img className="d-block w-100" src={img} alt={img}/>
					</div>);
		}else{
			return (<div key={img} className="carousel-item">
						<img className="d-block w-100" src={img} alt={img}/>
					</div>);
		}
	};
	render(){
	  return (
		<div className="col-md-6 SingleProjectBox">
			<div className="SingleProjectBox__overlay">
				<button type="button" className="SingleProjectBox__button" onClick={this.showModal}><i className="fa fa-search"></i></button>
				<a href={this.props.link} target="_blank" rel="noopener noreferrer" className={this.props.class}>
					<button type="button" className="SingleProjectBox__button"><i className="fa fa-link"></i></button>				
				</a>
			</div>
			<img src={this.props.img[0]} className="SingleProjectBox__img" alt=""/>
			<div className={this.state.modalClass}>
				<div className="row SingleProjectBox__modal__content">
					<button type="button" className="SingleProjectBox__modal__button" onClick={this.hideModal}><i className="fa fa-times "></i></button>
					<div id={this.props.id} className="carousel slide SingleProjectBox__modal__img--box" data-ride="carousel">
					  <ol className="carousel-indicators">
					    <li data-target={'#' +this.props.id} data-slide-to="0" className="active"></li>
					    <li data-target={'#' +this.props.id} data-slide-to="1"></li>
					    <li data-target={'#' +this.props.id} data-slide-to="2"></li>
					  </ol>
					  <div className="carousel-inner">
						{this.props.img.map(this.imagesToList)}
					  </div>
					  <a className="carousel-control-prev" href={'#' +this.props.id} role="button" data-slide="prev">
					    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
					    <span className="sr-only">Previous</span>
					  </a>
					  <a className="carousel-control-next" href={'#' +this.props.id} role="button" data-slide="next">
					    <span className="carousel-control-next-icon" aria-hidden="true"></span>
					    <span className="sr-only">Next</span>
					  </a>
					</div>

					<article className="SingleProjectBox__modal__desc">
						<div className="SingleProjectBox__modal__desc__technologies">
							{this.props.technologies.map(this.technologiesToList)}
						</div>
						<SectionHeading title={this.props.name}/>
						<SectionSubHeading content={this.props.desc}/>
					</article>
				</div>
			</div>
		</div>
	  );
	};
}

export default SingleProjectBox;