document.addEventListener("DOMContentLoaded", () => {
  // Attach event listener to the button with ID "solveRoom1"
  // 🛠️ Fix: Correct ID used for attaching the event listener
  document.getElementById("solveRoom1").addEventListener("click", () => {
    // Fetch the "books.json" file
    fetch("books.json")
      .then((response) => response.json()) // Parse the JSON response
      .then((books) => {
        // Find the most recent book from the fetched data
        const mostRecentBook = findMostRecentBook(books);
        // 🛠️ Fix: Correct element ID
        // Display the title of the most recent book in the result room
        document.getElementById(
          "room1Result"
        ).textContent = `The key to the next room is: ${mostRecentBook.title}`;
      });
  });

  // Attach event listener to the button with ID "solveRoom2"
  document.getElementById("solveRoom2").addEventListener("click", () => {
    // Define JavaScript and React concepts sets
    const jsConcepts = new Set(["closure", "scope", "hoisting", "async"]);
    // 🛠️ Fix: Update JS concepts with missing items
    const reactConcepts = new Set(["components", "jsx", "hooks", "async"]);
    // 🛠️ Fix: Correct function call
    // Find the common concepts between JavaScript and React
    const commonConcepts = findIntersection(jsConcepts, reactConcepts);
    // Display the common concepts in the result room
    document.getElementById(
      "room2Result"
    ).textContent = `The code to unlock the door is: ${Array.from(
      commonConcepts
    ).join(", ")}`;
  });

  // 🛠️ Fix: Add async/await for proper asynchronous behavior
  // Attach event listener to the button with ID "solveRoom3"
  document.getElementById("solveRoom3").addEventListener("click", () => {
    // Fetch the "directions.json" file
    fetch("directions.json")
      .then((response) => response.json())
      .then((directions) => {
        // Navigate through the labyrinth asynchronously
        navigateLabyrinth(directions).then((message) => {
          // Display the navigation message in the result room
          // 🛠️ Fix: Use textContent instead of innerHTML
          document.getElementById("room3Result").textContent = message;
        });
      });
  });
});

// Function to find the most recent book from an array of books
function findMostRecentBook(books) {
  // 🛠️ Fix: Correct logic for finding the most recent book
  return books.reduce((mostRecent, book) =>
    new Date(book.published) < new Date(mostRecent.published)
      ? book
      : mostRecent
  );
}

// Function to find the intersection of two sets
function findIntersection(setA, setB) {
  // 🛠️ Fix: Correct logic for finding intersection
  const intersection = new Set([...setA].filter((value) => setB.has(value)));
  return intersection;
}

// Function to navigate through the labyrinth asynchronously
async function navigateLabyrinth(directions) {
  for (let direction of directions) {
    // 🛠️ Fix: Introduce delay for smooth navigation
    // Introduce a delay of 1 second between each navigation step
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Await the promise to introduce a delay
    console.log(`Navigating: ${direction.step}`);
  }

  // Return a message indicating successful navigation
  return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
}
