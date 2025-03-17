 // Array of jokes (at least 10 jokes as required)
 const jokesArray = [
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "I threw a boomerang a year ago. Now I live in constant fear.",
    "I told my computer I needed a break, and now it won’t stop sending me Kit-Kats.",
    "Why do cows have hooves instead of feet? Because they lactose.",
    "I’m reading a book on anti-gravity. It’s impossible to put down.",
    "I’m on a whiskey diet. I’ve lost three days already.",
    "Parallel lines have so much in common. It’s a shame they’ll never meet.",
    "I used to play piano by ear, but now I use my hands.",
    "What’s orange and sounds like a parrot? A carrot."
  ];

  // Function to fetch a random joke from an external API (using Joke API)
  async function fetchRandomJoke() {
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const jokeData = await response.json();
      return jokeData.setup + " " + jokeData.punchline;
    } catch (error) {
      console.error("Error fetching joke: ", error);
      return "Oops! Something went wrong. Please try again.";
    }
  }

  // Function to show a random joke (either from the array or fetched)
  async function showRandomJoke() {
    const isFromArray = Math.random() < 0.5; // 50% chance to show joke from the array or fetch one
    let joke = "";

    if (isFromArray) {
      const randomIndex = Math.floor(Math.random() * jokesArray.length);
      joke = jokesArray[randomIndex];
    } else {
      joke = await fetchRandomJoke();
    }

    // Populate the div with the selected joke using innerHTML
    document.getElementById('joke').innerHTML = joke;
  }

  // Show a random joke when the page is loaded
  window.onload = showRandomJoke;

