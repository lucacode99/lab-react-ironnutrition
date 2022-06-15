import React, {useState} from 'react'
//import FoodBox from './components/FoodBox'
// const newFood = { name, image, calories, servings }
//console.log("Submitted: ", newFood)

function AddFoodForm(props) {

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState("")
    const [servings, setServings] = useState("")

    const handleNameInput = e => setName(e.target.value)
    const handleimageInput = e => setImage(e.target.value)
    const handleCaloriesInput = e => setCalories(e.target.value)
    const handleServingsInput = e => setServings(e.target.value)

    const handleSubmit = (e) => {
     e.preventDefault();
        props.addNewFood ( {
        name,
        image,
        calories,
        servings
      })

      // Reset the state
      setName("");
      setImage("");
      setCalories("");
      setServings("")   
    }
    
  return (
    <div>AddFoodForm
    <form onSubmit={handleSubmit}>

        <label > name </label>
        <input name ="name" value={name} type="text" onChange={handleNameInput} />

        <label > image </label>
        <input name ="image" value={image} type="text" onChange={handleimageInput} />

        <label > calories </label>
        <input name ="calories" value={calories} type="text" onChange={handleCaloriesInput} />

        <label > servings </label>
        <input name ="servings" value={servings} type="text" onChange={handleServingsInput} />

       <button type="submit">add food</button>
    </form>
    </div>
  )
}

export default AddFoodForm