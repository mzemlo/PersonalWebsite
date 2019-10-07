import React from 'react';
import TechnologiesContent from './TechnologiesContent';
import TechnologiesDesc from './TechnologiesDesc';
import './Technologies.scss';

function Technologies() {
  return (
    <section className="align-items-center">
      <TechnologiesDesc/>
      <TechnologiesContent/>
    </section>
  );
}

export default Technologies;