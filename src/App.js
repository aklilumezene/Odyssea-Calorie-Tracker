import MealItem from "./components/MealItem"

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
      calorie: 386.8,
    }
  ]

  return (
    <div>
      <h1>Hello React!</h1>
      <MealItem calorie={meals[0].calorie} meal={meals[0].meal} description={meals[0].description} date={meals[0].timestamp} />
      <MealItem calorie={meals[1].calorie} meal={meals[1].meal} description={meals[1].description} date={meals[1].timestamp} />
      <MealItem calorie={meals[2].calorie} meal={meals[2].meal} description={meals[2].description} date={meals[2].timestamp} />
      <MealItem calorie={meals[3].calorie} meal={meals[3].meal} description={meals[3].description} date={meals[3].timestamp} />
      <MealItem calorie={meals[4].calorie} meal={meals[4].meal} description={meals[4].description} date={meals[4].timestamp} />
    </div>

  );
}

export default App;
