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
    score: 0,
    message: "Click on an image to earn points, but don't click the same image more than once!"
  };

 reset = (id) => {
    this.setState({ message: "You Lost!" });
    this.setState({ score: 0 });
    this.shuffle();
    // this.state.images.find((any, i) => {
    //   if (any.id === id) {
    //    this.setState(images[i].select = false); 
      //  console.log(select);
        }});
    return true;
  }
  
shuffle= () => {
  this.state.images.sort(() => Math.random() - 0.5)
}
  clickHandler = id => {
    this.state.images.find((any, i) => {
      if (any.id === id) {
        if (images[i].select === false) {
          images[i].select = true;
          this.setState({ score: this.state.score + 1 }, function () {
            console.log(this.state.score);
          });
          this.shuffle();
          return true;
        } else {
          this.reset();
        }
      }
    });
    if (this.state.message === "You Lost!") {
      this.setState({ message: "Click on an image to earn points, but don't click the same image more than once!"});
    }
  }

render(){
  
  return (
  <Wrapper>
   <Header 
   score={this.state.score}
   message={this.state.message}/>
   <div className="img-container">
   {this.state.images.map(img => (
   <Image
   id={img.id}
   key={img.id}
   name={img.name}
   image={img.image} 
   click={this.clickHandler}
   />
   ))}
  </div>
  </Wrapper>
  );
}
}
export default App;
