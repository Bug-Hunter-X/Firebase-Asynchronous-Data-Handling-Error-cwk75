# Firebase Asynchronous Data Handling Error
This repository demonstrates a common error when working with Firebase Realtime Database queries.  The problem arises from attempting to access data before the asynchronous query completes. This leads to undefined values or unexpected program behavior.

## Problem Description
The provided `bug.js` file showcases code that tries to access data from a Firebase Realtime Database query prematurely.  The `once()` method is asynchronous, and the subsequent `console.log(data)` statement is executed before the data is retrieved.

## Solution
The `bugSolution.js` file offers a corrected version.  The solution ensures the data is accessed only after the asynchronous query has resolved its promise and successfully fetched the data.

## Setup
1. Ensure you have the Firebase JavaScript SDK installed and configured.
2. Replace the placeholder database reference (`database.ref('myData')`) with your actual Firebase Database path.
3. Run the provided JavaScript files to observe the original error and the corrected solution.