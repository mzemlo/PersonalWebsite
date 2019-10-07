import React, { Component } from 'react';
//import './HeroShot.scss';
import SectionSubHeading from '../../elements/SectionSubHeading';

class HeroShot extends Component {
  constructor(props){
    super(props);
    this.state = {
      heading: ``,
      i: 0
    }
  }

  componentDidMount() {
    const intervalId = setInterval(() => this.updateHeading(), 50);
    this.setState({ intervalId })
  }

  componentWillUnmount() {
     // Make sure to clear the interval, on unmount
     clearInterval(this.state.intervalId);
  }

  updateHeading(){
    let str = `Marcin Zemło. \nJunior Web Developer \nPortfolio`;
    if (this.state.heading.length < str.length) {
      this.setState({
        i: this.state.i + 1,
        heading: str.substring(0, this.state.i)
      });       
    }else{
      clearInterval(this.state.intervalId);
      const intervalId = setInterval(() => this.updateHeading(), 500);
      this.setState({ intervalId });
      if (this.state.heading === `Marcin Zemło. \nJunior Web Developer \nPortfolio.`) {
        this.setState({
          heading: `Marcin Zemło. \nJunior Web Developer \nPortfolio`
        });             
      }else{
        this.setState({
          heading: `Marcin Zemło. \nJunior Web Developer \nPortfolio.`
        });                   
      }
    }
  }
  render(){
    return (
      <section className="HeroShot">
        <article className="col-md-4 offset-md-6 row">
          <h1 className="align-self-start">{this.state.heading}
          </h1>
          <div className="align-self-end">
            <SectionSubHeading content="Witaj na mojej stronie osobistjej. 
            Poniżej znajdziesz niektóre z moich ostatnich projektów oraz trochę informacji o mnie i o technologiach w jakich pracuję.
            Jeżeli jesteś zainteresowany współpracą ze mną, skontaktuj się przez 
            formularz znajdujący się na stronie. 
            Zapraszam do zapoznania się bliżej z moją pracą."/>
          </div>
          
        </article>
      </section>    
  );
};
};
export default HeroShot;