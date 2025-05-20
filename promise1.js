// Simulate an API call with a Promise
function fetchUserData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = [
          { id: 1, name: "Alice" },
          { id: 2, name: "Bob" },
          { id: 3, name: "Charlie" },
        ];
        resolve(data);
      }, 1000);
    });
  }
  
  // Task:
  // 1. Fetch the user data (using fetchUserData).
  // 2. Add the property `isActive: true` to each user.
  // 3. Log the modified user data.
  
  fetchUserData(). //Implementation here
