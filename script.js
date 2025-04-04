const quotes = [
    "Believe you can and you're halfway there.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Don’t watch the clock; do what it does. Keep going.",
    "Push yourself, because no one else is going to do it for you.",
    "Success doesn’t just find you. You have to go out and get it.",
    "Dream it. Wish it. Do it.",
    "Great things never come from comfort zones.",
    "Your limitation—it’s only your imagination."
  ];
  
  function showQuote() {
    const quoteEl = document.getElementById('quote');
    const randomIndex = Math.floor(Math.random() * quotes.length);
  
    // Remove the "show" class to start from 0 opacity
    quoteEl.classList.remove('show');
  
    // Wait a tiny bit before changing text and adding "show" class back
    setTimeout(() => {
      quoteEl.textContent = quotes[randomIndex];
      quoteEl.classList.add('show');
    }, 100); // slight delay to trigger animation
  }