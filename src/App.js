import axios from 'axios';
import React, {Component} from 'react';
import Navbar from './components/Navbar';
// import QuoteList from './components/QuoteList';
// import QuoteForm from './components/QuoteForm';
import QuoteCard from './components/QuoteCard';

const simpleQuote = {
  quote: 'Oh Yeah!',
  character: 'Duffman',
  image: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FDuffman.png?1497567511709',
  
};

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      simpsonQuote: simpleQuote
    };
    this.getQuote = this.getQuote.bind(this);
  };
  getQuote = () => {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then(response => response.data)
      .then(data => {
        this.setState({simpsonQuote: data[0]})
        });
  }
  render () {
    return(
      <div>
        <Navbar />
        <QuoteCard simpsonQuote={this.state.simpsonQuote}/>
        <button type="button" onClick={this.getQuote}>Next Quote</button>
      </div>
    );
  }
}


// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <QuoteForm/>
//       <QuoteList/>
//     </div>
//   );
// }

export default App;
