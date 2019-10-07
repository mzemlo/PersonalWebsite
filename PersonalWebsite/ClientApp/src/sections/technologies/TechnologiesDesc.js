import React from 'react';
import SectionHeading from '../../elements/SectionHeading';
import SectionSubHeading from '../../elements/SectionSubHeading';
//import './TechnologiesDesc.scss';

function TechnologiesDesc() {
  return (
	<article className="Technologies__desc">
		<SectionHeading title={'Technologie, \nw których \npracuję \ni ciągle się \nrozwijam'}/>
		<SectionSubHeading content="Spis technologii, które znam na poziomie junior lub wyższym oraz programów, z których korzystam na co dzień"/>
	</article>
  );
}

export default TechnologiesDesc;