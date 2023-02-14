function RecepieComponent({label, image, calories, ingredients}) {
    return(<div>
<h2>{label}</h2>
<img src={image}/>
<ul>
    {ingredients.map(element => {
        <li>{element}</li>
    })}
</ul>
<p>{calories.toFixed()}</p>
    </div>)
}
export default RecepieComponent;