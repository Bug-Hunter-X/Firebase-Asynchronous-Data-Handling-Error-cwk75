The corrected code snippet uses the `.then()` method to ensure that `data` is accessed only after the promise from `once('value')` resolves, ensuring that the data is available. 

```javascript
const database = firebase.database();
const ref = database.ref('myData');

ref.once('value').then(snapshot => {
  const data = snapshot.val();
  console.log(data.someProperty); // This will now work correctly
}).catch(error => {
  console.error('Error fetching data:', error);
});
```
This approach guarantees that `data` will only be accessed after the Firebase query has successfully fetched and loaded data.  The `.catch()` block handles potential errors during the data retrieval process.