document.querySelector('#get-advice').addEventListener("click", fetchAdvice);

async function fetchAdvice() {
  try {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    document.querySelector('#advice-id').innerText = data.slip.id;
    document.querySelector('#advice-text').innerText = `${data.slip.advice}`;
  } catch (error) {
    document.querySelector('#advice-text').innerText = 'Error fetching advice.';
  }
}

