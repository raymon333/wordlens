const wordInput = document.querySelector('input[name="wordinput"]');
const submitBtn = document.getElementById('my-button');

async function submitSearch(e) {
  e.preventDefault();
  const searchWord = wordInput.value;

  const data = await fetchWord(searchWord);
}

async function fetchWord(word) {
  const query = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + word;
  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
    { method: 'GET' }
  );
  const data = await response.json();

  return data;
}
