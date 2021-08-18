import { Component } from 'react';
import './App.css';
// import Intro from '../Intro/Index';
// import Series from '../../containers/Series/Index';
import Main from '../Main/Index'
import 'whatwg-fetch'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>TV Series List</h1>
        </header>
        {/* <Intro message="Here You Can Find All of Most loved films."/> */}
        <Main />
      </div>
    );    
  }
}

export default App;
