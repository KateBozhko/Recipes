import { useCallback, useEffect, useState } from "react";
import "./App.css";

function App() {

const MY_ID = "6009d7af";
const MY_KEY = "eb32e65887cb0eba2f6b754bcb4fae8b";

useEffect(() => {
  getRecepie();
})

const getRecepie = useCallback(async () => {
  const response = await fetch(`https://api.edamam.com/search?q=avocado&app_id=${MY_ID}&app_key=${MY_KEY}`);
  const data = await response.json();
  console.log(data)

})



return(
  <div>

  </div>
)
}
export default App;