

function RecepieComponent({label, image, calories, ingredients}) {
    return(
    <div>
    <div className="container">
<h2>{label}</h2>
    </div>
    <div className="container">
    <img className="tasty" src={image} alt="food"/>
</div>
<ul>
    {ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
    ))}
</ul>
<div className="container">
<p className="par">{calories.toFixed()} calories</p>
</div>
    </div>
    )
}
export default RecepieComponent;