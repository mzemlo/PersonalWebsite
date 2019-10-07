import React from 'react';
import SectionHeading from '../../elements/SectionHeading';
import SectionSubHeading from '../../elements/SectionSubHeading';
import './About.scss';

function About() {
  return (
    <section className="About">
      <SectionHeading title={'O mnie'}/>
      <article className="row">
      <div className="col-lg-3">
        <SectionSubHeading content="Jestem studentem czwartego roku Informatyki w Szkole Głównej Gospodarstwa Wiejskiego w Warszawie. Swoją przygodę z programowaniem rozpocząłem w roku 2015 od pisania aplikacji okienkowych w języku Visual Basic. W 2016, w związku z tym, iż od dawna hobbystycznie zajmowałem się grafiką komputerową, podjąłem decyzję o kształceniu się w kierunku specjalizacji Front-end Developer. W tym też roku wykonałem swoje pierwsze projekty komercyjne. Od tego czasu łącze studia z pracą jako freelancer."/>
      </div>
      <div className="col-lg-3">
        <SectionSubHeading content="Obecnie zakres mojej pracy to tworzenie zarówno warstwy back-end'owej jak i front-end'owej oraz projektowanie graficzne aplikacji. Na co dzień, w celach zarobkowych, zajmuję się głównie tworzeniem stron internetowych w oparciu o system CMS - Wordpress. Jednak moją główną specjalizacją i zainteresowaniem jest tworzenie aplikacji SPA. Obecnie przy tworzeniu tego typu aplikacji korzystam głównie z biblioteki React.js oraz platformy .NET."/>
      </div>
      </article>
    </section>
  );
}

export default About;