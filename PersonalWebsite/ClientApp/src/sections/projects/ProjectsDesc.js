import React from 'react';
import SectionHeading from '../../elements/SectionHeading';
import SectionSubHeading from '../../elements/SectionSubHeading';
//import './ProjectsDesc.scss';

function ProjectsDesc() {
  return (
	<article className="col-lg-3">
		<SectionHeading title={'Poznaj \nmoje \nprojekty'}/>
		<SectionSubHeading content="Oto niektóre z projektów przy których miałem okazję pracować"/>
	</article>
  );
}

export default ProjectsDesc;