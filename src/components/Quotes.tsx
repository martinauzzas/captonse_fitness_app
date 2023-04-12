import { useEffect, useState } from 'react'

const api_key = import.meta.env.VITE_QUOTES_API_KEY

export interface Quote {
    quote?: string,
    author?: string,
    className?: string,
}

export const fetchingQuotes = {
    getQuote: async() => {
        const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=fitness`, {
            method: 'GET',
            headers: {
                'X-Api-Key': api_key
            }
        });

        const data = await response.json()
        return data
        
    }
}

function Quotes ( ) {

    const [ displayQuote, setDisplayQuote ] = useState<Quote>({
        quote: "Click the icon to get a new quote",
        author: ""
    })

    const handleQuotes = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const newQuote = await fetchingQuotes.getQuote();
        setDisplayQuote(newQuote[0])
    }

    return (
        <div className='full-width mt-14 ml-10 flex justify-center'>
            <button onClick={handleQuotes}>
                <i className="fa-regular fa-comment quote-icon-position text-yellow-400 text-xl"></i>
            </button>
            <i className="fa-solid fa-quote-left text-yellow-400 "></i><h3 className='quote'>{displayQuote.quote}</h3><i className="fa-solid fa-quote-right text-yellow-400 "></i>
            <h5 className='full-width author-position'>{displayQuote.author}</h5>
        </div>
  )
}

export default Quotes

