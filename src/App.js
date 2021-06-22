import AddMeal from "./components/EditMealItem/AddMeal"
import FilterMetrics from "./components/FilterMeals/FilterMeals"
import Meals from "./components/MealItem/Meals"
import {useState} from "react"

  const startupMeals = [
    {
      id: 1,
      timestamp: new Date(2021, 4, 12, 12, 39, 0, 0),
      description: "100g Burger",
      meal: "Lunch",
      calorie: 237.7,
    },
    {
      id: 2,
      timestamp: new Date(2021, 4, 11, 9, 32, 0, 0),
      description: "150g Chicken soup",
      meal: "Breakfast",
      calorie: 49.8,
    },
    {
      id: 3,
      timestamp: new Date(2021, 4, 11, 21, 40, 0, 0),
      description: "200g Green salad",
      meal: "Dinner",
      calorie: 46.9,
    },
    {
      id: 4,
      timestamp: new Date(2021, 4, 12, 13, 30, 0, 0),
      description: "100g Filet",
      meal: "Lunch",
      calorie: 272.6,
    },
    {
      id: 5,
      timestamp: new Date(2021, 4, 12, 8, 23, 0, 0),
      description: "100g Oats",
      meal: "Breakfast",
      calorie: 0,
    }
  ]

  function App() {

  const [meals, setMeals] = useState(startupMeals)
  const [startDate, setStartDate] = useState("2021-05-12")

  const addedMealHandler = (meal) => {
    console.log("added a new meal by someone ", meal)
    // we use the previous state so DO NOT USE THE SIMPLE setMeals!!!
    // setMeals([...meals, meal ]);
    // Instead use the setMeals that knows about the previous state
    setMeals((prevMeals)=>{ return [...prevMeals, meal] });
  }

  const newStartDateSetHandler = (startDate) => {
      console.log("start date set to ", startDate)
      setStartDate(startDate);
  }

  return (
    <div>
      <AddMeal onAddMeal = {addedMealHandler} />
      <FilterMetrics startDate = {startDate} onSetStarDate = {newStartDateSetHandler} />
      <Meals filterDate={startDate} data={meals}/>
    </div>

  );
  }

export default App;
