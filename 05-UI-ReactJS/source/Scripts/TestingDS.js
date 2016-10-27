import React from 'react';
import ReactDOM from 'react-dom';

class HelloMessage extends React.Component {
  render() {
    return(
      <div> Wellcome to Dark Souls!
        <div id="divbutton">
          <Fight/>
        </div>
        <div id="destiny">
          <Destiny />
        </div>
        <p> Artorias Best Boss Ever </p>
      </div>
   );
  }
};

class Fight extends React.Component{
   render () {
     return {<div><button type="button" onclick="yourDestiny()"> Fight! </button> </div>;
    }
  }
};

class Destiny extends React.Component {
  render (){
    return {<p> {yourDestiny()} </p>};
  }
};

function yourDestiny(){
  let destiny;

  if(Math.floor((Math.random() * 10) + 1)>=9){
    destiny = ' You Win ';
  }
 else{
    destiny = ' You Died ';
  }

  return destiny;
};

ReactDOM.render(<HelloMessage />, document.getElementById('app'));
