function RecepieComponent({label, image, calories, ingredients, dish}) {
    return(
    <div className="box">
       <div className="container">
          <h2>{label}</h2>
       </div>
       <div className="container">
          <img className="tasty" src={image} alt="food"/>
       </div>
       <ul className="list">
          {ingredients.map((element,index) => (
          <li key={index}>
             <img src="https://img.freepik.com/free-vector/green-eco-loop-leaf-check-mark_78370-658.jpg?w=740&t=st=1677316023~exp=1677316623~hmac=65cfc0081ce55c62e7cfbe102ec5f6ba99013901bdb2bd546869af591980009d" width="50px"/>{element}
          </li>
          ))}
       </ul>
       <div className="container_par">
          <p className="par">{calories.toFixed()} calories</p>
          <p className="par">Type: {dish} dish</p>
       </div>
    </div>
    )
    }
    export default RecepieComponent;