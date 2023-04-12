import { useEffect, useState } from "react";
// Fetching data RECIPES
import { server_calls_logs, server_calls_recipes } from "../api/server";
// Fetching data EXERCISES
import { server_calls_exercises } from "../api/server";

// RECIPES CONST
const useGetDataRecipe = () => {
    const [ recipeData, setData ] = useState<[]>([])

    async function handleDataFetchRecipe(){
        const result = await server_calls_recipes.get_recipe();
        setData(result)
    }

    useEffect( () => {
        handleDataFetchRecipe();
    }, [])


    return { recipeData, getData:handleDataFetchRecipe }
}
export default useGetDataRecipe;

// DAILY LOGS CONST
export const useGetDataLog = () => {
    const [ logData, setData ] = useState<[]>([])

    async function handleDataFetchLog() {
        const result = await server_calls_logs.get_log();
        setData(result)
    }

    useEffect( () => {
        handleDataFetchLog();
    }, [])

    return { logData, getData: handleDataFetchLog }
}

// EXERCISES CONST
export const useGetDataExercise = () => {
    const [ exerciseData, setData ] = useState<[]>([])

    async function handleDataFetchExercise(){
        const result = await server_calls_exercises.get_exercise();
        setData(result)
    }

    useEffect( () => {
        handleDataFetchExercise();
    }, [])

    return { exerciseData, getData: handleDataFetchExercise }
}