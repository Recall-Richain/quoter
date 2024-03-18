
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');

const apiUrl = 'https://type.fit/api/quotes';


async function getQuote() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const randomQuote = data[Math.floor(Math.random() * data.length)];
    quoteText.textContent = randomQuote.text;
    authorText.textContent = randomQuote.author || 'Unknown';

    
    if (randomQuote.text.length > 120) {
      quoteText.classList.add('long-quote');
    } else {
      quoteText.classList.remove('long-quote');
    }
  } catch (error) {
    console.log('Error:', error);
    quoteText.textContent = 'Error fetching quote. Please try again later.';
    authorText.textContent = '';
  }
}


newQuoteBtn.addEventListener('click', getQuote);


getQuote();