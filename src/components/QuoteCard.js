// import React, {Component} from 'react';
import React from 'react';
import './QuoteCard.css';

// React Challenge 7 (API)

function QuoteCard({simpsonQuote}) {
    return(
        <figure className="QuoteCard">
                 <img 
                   src={simpsonQuote.image}
                   alt={simpsonQuote.character}
                 />
                 <figcaption>
                     <blockquote>
                        {simpsonQuote.quote}
                     </blockquote>
                     <p>
                        <cite>{simpsonQuote.character}</cite>
                     </p>
                 </figcaption>
        </figure>
    )
}

/*React Challenge (Adding a quote to favorites)

class QuoteCard extends Component {
    constructor(props){
        super(props);

        this.state = {
            favorite: false,
        };
    }
    render() {
        return(
            <figure className="QuoteCard">
                <img 
                  src={this.props.image}
                  alt={this.props.name}>
                </img>
                <figcaption>
                    <blockquote>
                    {this.props.quote}
                    </blockquote>
                    <p>
                        <cite>{this.props.name}</cite>
                        <span className={this.state.favorite ? 'is-favorite': ''} onClick = {event => {
                            const newFavorite = !this.state.favorite;
                           this.setState({favorite: newFavorite});
                        }}>&#9733;</span>
                    </p>
                </figcaption>
            </figure>
        )
    }
    
}*/

export default QuoteCard;