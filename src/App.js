import Meals from "./components/Meals"

function App() {
  const meals = [
    {
      timestamp: new Date(2021, 4, 12, 12, 39, 0, 0),
      description: "burger 100g",
      meal: "Lunch",
      calorie: 237.7,
    },
    {
      timestamp: new Date(2021, 4, 11, 9, 32, 0, 0),
      description: "150g chicken soup",
      meal: "Breakfast",
      calorie: 49.8,
    },
    {
      timestamp: new Date(2021, 4, 11, 21, 40, 0, 0),
      description: "200g Green salad",
      meal: "Dinner",
      calorie: 46.9,
    },
    {
      timestamp: new Date(2021, 4, 12, 13, 30, 0, 0),
      description: "100g filet",
      meal: "Lunch",
      calorie: 272.6,
    },
    {
      timestamp: new Date(2021, 4, 12, 8, 23, 0, 0),
      description: "100g Oats",
      meal: "Breakfast",
      calorie: 0,
    }
  ]

  return (
    <div>
      <h1>Hello React!</h1>
      <Meals data = {meals}/>
    </div>

  );
}

export default App;
