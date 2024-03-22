import Button from "../components/Button"
import { Link } from "react-router-dom"

const Selectscreen = () => {
  return (
    <div className="flex justify-center bml-20 mt-3">
      <div className="flex flex-col">
        <h1 className="flex justify-center text-3xl p-3 ml-14 text-white rounded-lg bg-green-500">Nutrition Facts</h1>
        <p className="flex justify-center ml-20 pt-4 font-semibold">Look up your favorite generic and fast foods here and see the nutrition facts for both!</p>
        <Button><button className="ml-20 mt-5 p-2 rounded text-white shadow bg-green-500"><Link to='/Select/NutritionSearch'>Start Here!</Link></button></Button>
      </div>
      <div className="flex flex-col justify-center pb-80 px-36 "> 
        <h1 className="flex justify-center text-3xl p-3 text-white rounded-lg bg-green-500">Recipes</h1>
        <p className="flex justify-center ml-6 pt-4 font-semibold">Look up an ingredient you have in your kitchen and see differnt meals you can make with it!</p>
        <Button><button className=" ml-14 mt-5 p-2 rounded text-white shadow bg-green-500"><Link to='/Select/RecipeSearch'>Start Here!</Link></button></Button>
      </div>
      <div className="flex flex-col items-center" > 
        <h1 className="text-3xl p-4 text-white rounded-lg mr-20 bg-green-500">Favorites</h1>
        <p className="flex justify-center mr-16 pt-4 font-semibold">View your list of favorited meals here!</p>
        <Button><button className="flex justify-center mr-20 mt-5 p-2 rounded text-white shadow bg-green-500"><Link to='/Favorites'>Start Here!</Link></button></Button>
      </div>
    </div>
  )
}

export default Selectscreen
