import axios from "axios";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
// import QuoteList from './components/QuoteList';
// import QuoteForm from './components/QuoteForm';
import QuoteCard from "./components/QuoteCard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      simpsonQuote: null,
    };
    this.getQuote = this.getQuote.bind(this);
  }

  componentDidMount() {
    this.getQuote();
  }

  getQuote = () => {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((response) => response.data)
      .then((data) => {
        this.setState({ simpsonQuote: data[0] });
      });
  };
  render() {
    return (
      <div>
        <Navbar />
        {this.state.simpsonQuote ? (
          <QuoteCard simpsonQuote={this.state.simpsonQuote} />
        ) : (
          <p>No Data Yet</p>
        )}
        <button type="button" onClick={this.getQuote}>
          Next Quote
        </button>
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
