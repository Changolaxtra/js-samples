// Simulate APIs
function fetchAPI1() {
    return new Promise((resolve) =>
      setTimeout(() => resolve(["Alice", "Bob", "Charlie"]), 1000)
    );
  }
  
  function fetchAPI2() {
    return new Promise((resolve) =>
      setTimeout(() => resolve(["Dave", "Eve", "Frank"]), 1500)
    );
  }
  
  // Task:
  // 1. Fetch data from both APIs concurrently.
  // 2. Combine the results into a single array.
  // 3. Sort the array alphabetically.
  // 4. Log results
  // Result: [ 'Alice', 'Bob', 'Charlie', 'Dave', 'Eve', 'Frank' ]

  Promise. //Implementation here
