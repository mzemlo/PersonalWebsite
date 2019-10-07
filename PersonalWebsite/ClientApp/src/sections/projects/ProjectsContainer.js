import React, {Component} from 'react';
import Bank1 from "../../img/bank1.JPG";
import Bank2 from "../../img/bank2.JPG";
import Bank3 from "../../img/bank3.JPG";
import Busy1 from "../../img/busy1.JPG";
import Busy2 from "../../img/busy2.JPG";
import Busy3 from "../../img/busy3.JPG";
import Ciren1 from "../../img/ciren1.JPG";
import Ciren2 from "../../img/ciren2.JPG";
import Zaba1 from "../../img/zaba1.JPG";
import Zaba2 from "../../img/zaba2.JPG";
import SingleProjectBox from './SingleProjectBox';
//import './ProjectsDesc.scss';

class ProjectsContainer extends Component {
	constructor(props){
		super(props);
		this.state = {
	      projects: [
	      {	name: 'Bank spółdzielczy w Łaskarzewie',
	      	technologies: ['php', 'wordpress'],
	      	desc: 'Moja praca przy tym projekcie polegała na zaprojektowaniu wyglądu oraz stworzeniu witryny w oparciu o cms Wordpress. Dodatkowo na stronie znajduje się napisany przeze mnie dedykowany plugin zawieracjący kalkulator kredytowy. Wykorzystane języki i technologie to: php, js, html, css, wordpress.',
	      	images: [Bank1, Bank2, Bank3],
	      	id: 'project0',
	      	link: '',
	      	class: 'hide'
	      },
	      {	name: 'U Żaby',
	      	technologies: ['react.js', '.NET Core'],
	      	desc: 'Jest to projekt od podstaw zaprojektowany oraz napisany przeze mnie. Aplikacja składa się ze strony wizytówki oraz dedykowanego panelu administracyjnego umożliwiającego użytkownikowi dodawanie aktualności do strony oraz zarządzanie jadłospisem. Wykorzystane języki i technologie to: C#, js, html, css, .NET Core, react.js.',
	      	images: [Zaba1, Zaba2],
	      	id: 'project1',
	      	link: '',
	      	class: 'hide'
	      },
	      {	name: 'Cirencester Arena',
	      	technologies: ['php', 'Wordpress'],
	      	desc: 'Projekt zrealizowany wspólnie z agencją <i><a target="_blank" rel="noopener noreferrer" href="https://coconutstrategy.com">Coconut</a></i>. Moim zadaniem było stworzenie działającego serwisu na podstawie otrzymanego projektu graficznego oraz zaprojektowanie części podstron. W serwisie zaimplementowany został plugin służacy do zarządzania rozgrywkami organizowanymi przez klienta. Wykorzystane języki i technologie to: php, js, html, css, wordpress.',
	      	images: [Ciren1, Ciren2],
	      	id: 'project2',
	      	link: 'http://www.cirencesterarena.co.uk/',
	      	class: ''
	      },
	      {	name: 'Busy Peas',
	      	technologies: ['php', 'Wordpress', 'WooCommerce'],
	      	desc: 'Projekt zrealizowany wspólnie z agencją <i><a target="_blank" rel="noopener noreferrer" href="https://coconutstrategy.com">Coconut</a></i>. Moim zadaniem było stworzenie działającego sklepu internetowego na podstawie otrzymanego projektu graficznego. Serwis korzysta z wtyczki WooCommerce, ponadto w serwisie zaimplementowana została możliwość płatności za pomocą PayPal. Wykorzystane języki i technologie to: php, js, html, css, wordpress, WooCommerce.',
	      	images: [Busy1, Busy2, Busy3],
	      	id: 'project3',
	      	link: 'http://busypeas.co.uk/',
	      	class: ''
	      }
	      ]
	    };
	}
	projectsToList = (project) => {
		const name = project.name;
		const img = project.images;
		return (<SingleProjectBox key={project.name} id={project.id} name={name} img={img} desc={project.desc} technologies={project.technologies} link={project.link} class={project.class}/>)
	};
	render(){
	  return (
		<article className="col-lg-9 row">
			{this.state.projects.map(this.projectsToList)}
		</article>
	  );
	};
}

export default ProjectsContainer;