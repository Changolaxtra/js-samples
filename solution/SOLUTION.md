Here’s a collection of JavaScript exercises that cover promises, arrays, strings, and the Page Object Model (POM). These exercises will help sharpen your skills and prepare for your technical interview:

---

### **1. Promises Exercise: Fetch and Process Data**
Create a function that simulates fetching user data from an API and processes it. Use promises (and optionally async/await).

```js
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
// 3. Return (or log) the modified user data.
fetchUserData()
  .then((userData) => {
    const modifiedData = userData.map((user) => ({
      ...user,
      isActive: true,
    }));
    console.log(modifiedData);
  })
  .catch((error) => {
    console.error(error);
  });
```

Challenge: Use **async/await**, and handle errors gracefully.

---

### **2. Arrays Exercise: Manipulating Data**
Write a function that processes an array of numbers:

```js
const numbers = [4, 2, 6, 8, 5, 1, 7];

// Task:
// 1. Filter out odd numbers.
// 2. Sort the remaining even numbers in ascending order.
// 3. Multiply each number by 3.
// 4. Calculate the sum of the final array.
function processNumbers(numbers) {
  let result = numbers
    .filter((num) => num % 2 === 0)
    .sort((a, b) => a - b)
    .map((num) => num * 3)
    .reduce((sum, num) => sum + num, 0);

  console.log(result);
}

processNumbers(numbers);
```

Challenge: Refactor this code to make it modular by breaking the logic into smaller reusable functions.

---

### **3. Strings Exercise: Palindrome Check**
Write a function that checks if a given string is a palindrome (reads the same forward and backward).

```js
// Task:
// 1. Remove any non-alphanumeric characters from the string.
// 2. Ignore casing.
// 3. Check if the string is a palindrome.

function isPalindrome(str) {
  const cleanedStr = str
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase();
  const reversedStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversedStr;
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
```

Challenge: Use recursion to check if a string is a palindrome without relying on `.reverse()`.

---

### **4. Page Object Model (POM) Exercise: Create a Login Page Automation Script**
Create a Page Object Model (POM) class for a Login Page and simulate testing the login functionality.

Below is an example structure for POM.

```js
// Simulated LoginPage class (Page Object Model)
class LoginPage {
  constructor() {
    this.elements = {
      usernameInput: () => "Username input simulated element",
      passwordInput: () => "Password input simulated element",
      submitButton: () => "Submit button simulated element",
    };
  }

  setUsername(username) {
    console.log(`Set username to: ${username}`);
    // Simulate interaction with the username input
  }

  setPassword(password) {
    console.log(`Set password to: ${password}`);
    // Simulate interaction with the password input
  }

  clickSubmit() {
    console.log("Clicked Submit button");
    // Simulate interaction with submit button
  }

  login(username, password) {
    this.setUsername(username);
    this.setPassword(password);
    this.clickSubmit();
    console.log(`Logging in...`);
    return Promise.resolve(username === "admin" && password === "password");
  }
}

// Task:
// Simulate testing the login functionality using the LoginPage class.
const loginPage = new LoginPage();
loginPage
  .login("admin", "password") // Change these values to test different cases
  .then((isSuccessful) => {
    if (isSuccessful) {
      console.log("Login successful!");
    } else {
      console.log("Login failed. Please check your credentials.");
    }
  })
  .catch((error) => {
    console.error(error);
  });
```

Challenge: Extend the class to handle additional actions, like forgetting a password, checking for alerts, or validating successful login redirection.

---

### **5. Combining Promises and Arrays: Fetch Multiple API Calls**
Create a function that fetches data from multiple APIs simultaneously and combines their results.

```js
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
Promise.all([fetchAPI1(), fetchAPI2()])
  .then(([results1, results2]) => {
    const combinedResults = [...results1, ...results2].sort();
    console.log(combinedResults);
  })
  .catch((error) => {
    console.error(error);
  });
```

Challenge: Refactor the example to handle errors in individual API calls rather than the entire promise chain failing.

---

### **Tips:**
1. **Understand the fundamentals:** Make sure you understand the concepts behind Promises, async/await, higher-order functions (e.g., `map`, `filter`, `reduce`), and how POM works in automation testing.
2. **Use real-world APIs:** Replace simulations with real APIs (e.g., JSONPlaceholder, Dog API) for better practice.
3. **Practice debugging:** Use `console.log` and browser DevTools to debug your code.

Good luck with your interview preparation! 🚀