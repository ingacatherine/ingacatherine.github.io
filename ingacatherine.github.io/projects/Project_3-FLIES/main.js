






// Function to generate a random word from a given set of words
function generateRandomWord(wordSet) {
  const randomIndex = Math.floor(Math.random() * wordSet.length);
  return wordSet[randomIndex];
}

// Function to change the button text with a random word
function changeButtonText(buttonId) {
  const button = document.getElementById(buttonId);

  // Define different sets of words for each button
  let words;
  switch (buttonId) {
    case 'randomButton1':
      words = ['ocean', 'world', 'tv show', 'university', 'universe'];
      break;
    case 'randomButton2':
      words = ['two', 'fiftytwo', 'grandma', 'a tree', 'five'];
      break;
    case 'randomButton3':
      words = ['a thousand', 'thirtytwo', 'a bird', 'sand', 'seven'];
      break;
    case 'randomButton4':
      words = ['grass', 'the stars', 'fish', 'tiny rocks', 'bugs'];
      break;
    case 'randomButton5':
      words = ['the waves', 'the sky', 'a telescope', 'a pile of leafs', 'plastic childrens microscopes'];
      break;
    case 'randomButton6':
      words = ['jump', 'swim', 'carry each other', 'drive a yellow submarine', 'wander'];
      break;
    case 'randomButton7':
      words = ['cows', 'trees', 'coral reefs', 'sea grass', 'grass', 'shark teeth'];
      break;
    case 'randomButton8':
      words = ['shoe prints', 'finals', 'the dungeon', 'benefit street', 'trader joes', 'spider webs'];
      break;
    case 'randomButton9':
      words = ['winter snow', 'norway', 'no way', 'autumn forests'];
      break;
    case 'randomButton10':
      words = ['ocean', 'universe', 'sunset', 'marmelade', 'drinking fountain', 'cafeteria carpet', 'world'];
      break;
    case 'randomButton11':
      words = ['sun', 'waves', 'sky', 'moon'];
      break;
    case 'randomButton12':
      words = ['trees', 'coral reefs', 'small boats', 'big buildings', 'clouds'];
      break;
    case 'randomButton13':
      words = ['new york city', 'cologne', 'the earth', 'belgrade', 'providence'];
      break;
    case 'randomButton14':
      words = ['travel itinerary', 'dream i had last night', 'website i made', 'poem'];
      break;
    case 'randomButton15':
      words = ['high five', 'adventure', 'fake lasagna', 'low five', 'hug'];
      break;
    case 'randomButton16':
      words = ['biertrinken', 'ever', 'never', 'now', '?'];
      break;
    case 'randomButton17':
      words = ['hug', 'nonsense', 'travel itinerary', 'dream', 'poem'];
      break;
    default:
      words = ['defaultWord1', 'defaultWord2', 'defaultWord3', 'defaultWord4', 'defaultWord5'];
  }

  const randomWord = generateRandomWord(words);
  button.textContent = randomWord;
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeRandomColor(buttonId) {
  const button = document.getElementById(buttonId);
  button.style.color = getRandomColor();
}

function whiteMode() {
  
  changeTextColor('white');
}

function blackMode() {
 
  changeTextColor('black');
}

function pukeMode() {
  
  changeTextColor('burlywood');
}

function slimeMode() {
  
  changeTextColor('greenyellow');
}

function morningcoffeeMode() {
  
  changeTextColor('chocolate');
}

function octobersunsetMode() {
  
  changeTextColor('pink');
}

function heinekenbottleMode() {
  
  changeTextColor('green');
}

function portfoliochairsMode() {
  
  changeTextColor('orange');
}

function risblueMode() {
  
  changeTextColor('blue');
}

function fireMode() {
  
  changeTextColor('red');
}

function changeTextColor(color) {
  var elements = document.getElementsByTagName('*');
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.color = color;
  }
}

