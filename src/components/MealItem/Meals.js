import "./Meals.css";
import MealsList from "./MealsList.js"
import Card from "../UI/Card";

const Meals = (props) => {
   console.log("Filtering on", props.filterDate)
   const date = new Date(props.filterDate)

    const filteredItems = props.data.filter( item => {
        return (
            item.timestamp.getYear() === date.getYear() &&
            item.timestamp.getMonth() === date.getMonth() &&
            item.timestamp.getDate() === date.getDate())
    })
   return (
    <Card className="meals">
      
      <MealsList data={filteredItems}/>
      
    </Card>
  );
};

export default Meals;