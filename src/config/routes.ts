import DailyLog from "../pages/DailyLog";
import Dashboard from "../pages/Dashboard";
import Exercises from "../pages/Exercises";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import Exercises_api from "../components/Exercises/Exercise_api";
import Recipe_api from "../components/Recipes/Recipe_api";
import { IRecipe } from "../components/Recipes/Recipe_api";
import recipe_api_2 from "../components/Recipes/Recipe_api";

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string,
    protected: boolean
}

const routes: RouteType[] = [
    {
        path: "",
        component: Home,
        name: "Home",
        protected: false
    },
    {
        path: "/dailylog",
        component: DailyLog,
        name: "Daily Log",
        protected: false
    },
    {
        path: "/dashboard",
        component: Dashboard,
        name: "Dashboard",
        protected: false
    },
    {
        path: "/exercises",
        component: Exercises,
        name: "Exercices",
        protected: false
    },
    {
        path: "/recipes",
        component: Recipes,
        name: "Recipes",
        protected: false
    },
    {
        path: "/apirecipes",
        component: Recipe_api,
        name: "RecipesApi",
        protected: false
    },
    {
        path: "/apiexercises",
        component: Exercises_api,
        name: "ExercicesApi",
        protected: false
    }
]

export default routes