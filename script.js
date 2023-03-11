// Array of possible card values
const cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'A'];

// Function to get the selected card value from the dropdown menu
function getSelectedCardValue(selectId) {
  const select = document.getElementById(selectId);
  return select.options[select.selectedIndex].value;
}

// Function to determine the recommended action based on basic strategy
// Function to determine the recommended action based on basic strategy
function determineRecommendedAction(card1, card2, dealerUpcard) {
    // Convert Aces to a value of 11 for now
    if (card1 === 'A' && card2 === 'A') {
      card1 = '11';
      card2 = '1';
    } else if (card1 === 'A') {
      card1 = '11';
    } else if (card2 === 'A') {
      card2 = '11';
    }
  
    // Calculate the total value of the player's cards
    const total = parseInt(card1) + parseInt(card2);
  
    // Determine the recommended action based on basic strategy
    if (total <= 11) {
      return 'Hit';
    } else if (total === 12) {
      if (dealerUpcard === '4' || dealerUpcard === '5' || dealerUpcard === '6') {
        return 'Stand';
      } else {
        return 'Hit';
      }
    } else if (total >= 13 && total <= 16) {
      if (dealerUpcard === '2' || dealerUpcard === '3' || dealerUpcard === '4' || dealerUpcard === '5' || dealerUpcard === '6') {
        return 'Stand';
      } else {
        return 'Hit';
      }
    } else {
      return 'Stand';
    }
  }
  

// Function to display the recommended action on the page
function displayRecommendedAction() {
  const card1 = getSelectedCardValue('card1');
  const card2 = getSelectedCardValue('card2');
  const dealerUpcard = getSelectedCardValue('dealerUpcard');

  const recommendedAction = determineRecommendedAction(card1, card2, dealerUpcard);

  document.getElementById('recommendedAction').innerHTML = recommendedAction;
}
