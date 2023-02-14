import { useCallback, useEffect, useState } from "react";
import "./App.css";
import video from "./food.mp4"
import RecepieComponent from "./RecepieComponent";

function App() {

const MY_ID = "6009d7af";
const MY_KEY = "eb32e65887cb0eba2f6b754bcb4fae8b";

const [mySearch, setMysearch] = useState("");
const [showRecepie, setShowRecepie] = useState([]);

useEffect(() => {
  getRecepie();
})

const getRecepie = useCallback(async () => {
  const response = await fetch(`https://api.edamam.com/search?q=avocado&app_id=${MY_ID}&app_key=${MY_KEY}`);
  const data = await response.json();
  setShowRecepie(data.hits)
})

const getResult = (e) => {
  setMysearch(e.target.value)
}

const finalSearch = (e) => {
  e.preventDefault();
}

return(
  <div>
<div>
  <video autoPlay muted loop>
    <source src={video} type="video/mp4"/>
  </video>
</div>
<div>
  <h2>Find a recipe</h2>
</div>
<div>
<form onSubmit={finalSearch}>
  <input type="text" placeholder="Search..." value={mySearch} onChange={getResult}/>
  
  <div>
    <button>
      <img src="https://icons8.com/preloaders/preloaders/165/Searching.gif" width="50px" alt="search"/>
    </button>
  </div>
</form>

</div>
{showRecepie.map(element => {
  <RecepieComponent label={element.recipe.label}
  image={element.recipe.image}
  calories={element.recipe.calories}
  ingredients={element.recipe.ingredientlines}/>
})}


  </div>
)
}
export default App;