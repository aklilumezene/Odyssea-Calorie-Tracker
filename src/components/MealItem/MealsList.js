import "./MealsList.css"
import MealItem from "./MealItem.js"

const MealsList = (props) => {
    if (props.data.length === 0) {
        return <p className="meals-list__empty">No data on that date</p>
    }
    return props.data.map((item) => {
        return <MealItem key={item.id} calorie={item.calorie} meal={item.meal} description={item.description} date={item.timestamp} />
    })
}

export default MealsList