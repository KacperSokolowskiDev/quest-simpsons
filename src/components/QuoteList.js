import React from 'react';
import QuoteCard from './QuoteCard'

const quotes = [
    {
        quote: "Inflammable means flammable? What a country!",
        image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNickRiviera.png?1497567511084",
        name: "Dr. Nick"
    },
    {
        quote: "I think women and seamen don't mix",
        image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FWaylonSmithers.png?1497567511840",
        name: "Waylon Smithers"
    },
    {
        quote: "Last night's 'Itchy and Scratchy' was, without a doubt, the worst episode ever. Rest assured that I was on the Internet within minutes, registering my disgust throughout the world.",
        image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FComicBookGuy.png?1497567511970",
        name: "Comic Book Guy"
    },
    {
        quote: "That's where I saw the leprechaun...He told me to burn things.",
        image: "http://www.simpsonspark.com/images/persos/contributions/ralph-wiggum-23927.jpg",
        name: "Ralph Wiggum"
      
    }
       
];

const QuoteList = () => (
    <div>
      {quotes.map(item => (
        <QuoteCard 
          key={item.quote}
          quote={item.quote} 
          image={item.image} 
          name={item.name} 
        />
      ))}
    </div>
  );

export default QuoteList;