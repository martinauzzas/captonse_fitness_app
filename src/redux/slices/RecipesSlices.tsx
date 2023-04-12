import { createSlice } from "@reduxjs/toolkit"

const RootSliceRecipes = createSlice({
    name: "root",
    initialState: {
        id: 'id',
        name: 'Name',
        meal: 'Meal',
        ingridients: 'Ingridients',
        full_recipe: 'FullRecipe'
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload },
        chooseMeal: (state, action) => { state.meal = action.payload },
        chooseIngridients: (state, action) => { state.ingridients = action.payload },
        chooseFull_recipe: (state, action) => { state.full_recipe = action.payload }
    }
})

export const reducerRecipes = RootSliceRecipes.reducer;
export const { chooseName, chooseMeal, chooseIngridients, chooseFull_recipe } = RootSliceRecipes.actions
