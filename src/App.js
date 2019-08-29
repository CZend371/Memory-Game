import React, { Component } from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Image from './components/Image';
import images from "./images.json";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    images,
    score: 0
  };

render(){
  return (
  <Wrapper>
   <Header 
   count={this.state.score}/>
   <div className="img-container">
   {this.state.images.map(img => (
   <Image
   id={img.id}
   key={img.id}
   name={img.name}
   image={img.image} 
   />
   ))}
  </div>
  </Wrapper>
  );
}
}
export default App;
