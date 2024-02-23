const wordInput = document.querySelector('input[name="wordinput"]');
const submitBtn = document.getElementById('my-button');
const wordParagraph = document.getElementById('wordp');
const phonetic = document.getElementById('phoneticp');
const meaningDiv = document.getElementById('meaningdiv');

async function submitSearch(e) {
  e.preventDefault();
  const searchWord = wordInput.value;

  const data = await fetchWord(searchWord);
}

async function fetchWord(word) {
  const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + word;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.length > 0) {
      const meaning = data[0];

      wordParagraph.textContent = word;
      phonetic.textContent = meaning.phonetic;
      meaningDiv.style.display = 'block';
      console.log(meaning);
    } else {
      wordParagraph.textContent = 'Word not found!';
    }
  } catch (error) {
    console.log(error);
  }

  return data;
}
