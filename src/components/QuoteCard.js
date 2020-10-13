import React from 'react';
import './QuoteCard.css';

function QuoteCard () {
    return(
        <figure class="QuoteCard">
            <img 
              src="https://pm1.narvii.com/7070/aeaeadea89d89327a8e5f4f83d10272dc337425fr1-1200-1200v2_128.jpg"
              alt="Nelson Muntz"></img>
            <figcaption>
                <blockquote>
                Shoplifting is a victimless crime, like punching someone in the dark.
                </blockquote>
                <cite>Nelson Muntz</cite>
            </figcaption>
        </figure>
    )
}

export default QuoteCard;