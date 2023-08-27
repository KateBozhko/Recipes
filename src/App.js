
import {useEffect, useState} from "react";
import video from "./food.mp4";
import RecepieComponent from "./RecepieComponent";
import "./App.css"
function App() {
const [search, setSearch] = useState("");
const [myReipes, setMyrecepies] = useState([]);
const [word, setWord] = useState('avocado')
const MY_ID = "6009d7af";
const MY_KEY = "eb32e65887cb0eba2f6b754bcb4fae8b";



useEffect(() => {

const getRecepi = async () => {
const responce = await fetch(`https://api.edamam.com/search?q=${word}&app_id=${MY_ID}&app_key=${MY_KEY}`);
const data = await responce.json();
setMyrecepies(data.hits)
}
getRecepi()
}, [word])



const changeRecepie = (e) => {
setSearch(e.target.value)
}
const finalSearch = (e) => {
e.preventDefault();
setWord(search)
}
return(
<div className="App">
   <div className="container">
      <video autoPlay muted loop>
         <source src={video} type="video/mp4"/>
      </video>
      <h1>Find a Recipe</h1>
   </div>
   <div className="container">
      <form onSubmit={finalSearch}>
         <input className="search" type="text" placeholder="Search..." value={search} onChange={changeRecepie}></input>
      </form>
   </div>
   <div className="container">
      <button><img src="https://icons8.com/preloaders/preloaders/165/Searching.gif" width="50px" alt="search"/></button>
   </div>
   <div>
      {myReipes.map((element, index) => (
      <RecepieComponent key={index}
         label={element.recipe.label}
         image={element.recipe.image}
         calories={element.recipe.calories}
         ingredients={element.recipe.ingredientLines}
         dish={element.recipe.cuisineType}/>
      ))}
   </div>
</div>
);
}
export default App;












 