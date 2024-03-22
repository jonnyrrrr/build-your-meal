import Home from '../pages/Home'
import About from '../pages/About'
import Selectscreen from '../pages/Selectscreen'
import FoodSearch from '../pages/FoodSearch'
import RecipeSearch from '../pages/RecipeSearch'
import FavoritesForm from '../favoriteComp/Favoritespg'





interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string
    protected: boolean
}

const routes: RouteType[] = [    
    {
      path: "/",
      component: Home,
      name: "Home Screen",
      protected: false
    },
    {
        path: "/About",
        component: About,
        name: "About Us",
        protected: false
      },
      {
        path: "/Select",
        component:  Selectscreen,
        name: "Select Screen",
        protected: false
      },
      {
        path: "/Select/NutritionSearch",
        component:  FoodSearch,
        name: "Food Search",
        protected: false
      },
      {
        path: "/Select/RecipeSearch",
        component:  RecipeSearch,
        name: "Recipe Search",
        protected: false
      },
      {
        path: "/Favorites",
        component:  FavoritesForm,
        name: "Favorites",
        protected: false
      },
   
    
  ];

export default routes