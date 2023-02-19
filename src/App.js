import { useEffect, useState } from "react";
import "./App.css";
import video from "./food.mp4"
import RecepieComponent from "./RecepieComponent";

function App() {

const MY_ID = "6009d7af";
const MY_KEY = "eb32e65887cb0eba2f6b754bcb4fae8b";

const [searchRecipe, setSearchRecipe] = useState("");
const [recipe, setRecipe] = useState([]);
const [wordSubmitted, setWordSubmitted] = useState('avocado')

useEffect(() => {
  getResult();
}, [wordSubmitted])

const getResult = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
  const data = await response.json();
  setRecipe(data.hits)
}


const changeRecipe = (e) => {
setSearchRecipe(e.target.value)
}
const finalSearch = (e) => {
e.preventDefault();
setWordSubmitted(searchRecipe)
}


return(
  <div className="App">
    <div className="container">
      <video autoPlay muted loop>
        <source src={video} type="video/mp4"/>
      </video>
      <h1> Find a recipe</h1>
    </div>

<div className="container">
  <form onSubmit={finalSearch}>
    <input type="text" placeholder="Enter....." value={searchRecipe} onChange={changeRecipe}/>
    
<button>
  <img src="https://icons8.com/preloaders/preloaders/165/Searching.gif" width="70px" alt="search"/>
</button>
</form>

{recipe.map((element, index) => (
  <RecepieComponent key={index} label={element.recipe.label}
  image={element.recipe.image}
  calories={element.recipe.calories}
  ingredients={element.recipe.ingredientlines}/>
))}
</div>
  </div>
)
}
export default App;