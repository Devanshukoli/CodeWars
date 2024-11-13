/*

You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):
('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'
*/

function defineSuite(card) {
  // Get the ASCII code of the last character (the suit symbol)
  const suitCode = card.charCodeAt(card.length - 1);

  switch (suitCode) {
    case 9827: return 'clubs';     // ASCII code for ♣
    case 9830: return 'diamonds';  // ASCII code for ♦
    case 9829: return 'hearts';    // ASCII code for ♥
    case 9824: return 'spades';    // ASCII code for ♠
    default: return 'Unknown suit'; 
  }
}


// Other methods.
function defineSuite(card) {
  switch (card.slice(-1)) {
    case '♣': return 'clubs';
    case '♦': return 'diamonds';
    case '♥': return 'hearts';
    case '♠': return 'spades';
    default: return 'Unknown suit'; // Handle cases with invalid symbols
  }
}
