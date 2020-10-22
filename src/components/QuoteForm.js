import React, { Component } from 'react'
import './QuoteForm.css';

const MAX_LENGTH = 20;

class QuoteForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            character: '',
        };
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange = (event) => {
        if(this.state.character.length < MAX_LENGTH) {
            this.setState({character: event.target.value});
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        const maximumChar = this.state.character.length >= MAX_LENGTH;
        const remainingChar = MAX_LENGTH - this.state.character.length;
        return (
            <form className="QuoteForm">
                <label htmlFor="character">Character:</label>
                <input
                className={maximumChar ? 'length-maximum-reached': 'length-ok'}
                id="character"
                name="character"
                type="text"
                value={this.state.character}
                onChange={this.handleChange}
                />
                <button onSubmit={this.handleSubmit}>Submit</button> <br/>
                <small className="remaining-characters">
                    {remainingChar} remaining characters
                </small>
                <p>
                    You typed: <strong>{this.state.character}</strong>
                </p>
            </form>
        )
    }
}

export default QuoteForm;
