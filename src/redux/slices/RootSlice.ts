import { combineReducers, createSlice } from '@reduxjs/toolkit';

// RECIPES
const RootSliceRecipes = createSlice({
    name: "root",
    initialState: {
        id: 'id',
        name: 'Name',
        meal: 'Meal',
        ingridients: 'Ingridients',
        full_recipe: 'FullRecipe',
        //  name: 'Name',
        muscle: 'Muscle',
        type_exercise: 'TypeExercise',
        difficulty: 'Difficulty',
        description: 'Description',
        date: 'date',
        sleep: 'sleep',
        steps: 'steps',
        weight: 'weight',
        work_out: 'work_out'
     },
     reducers: {
        chooseName: (state, action) => { state.name = action.payload },
        chooseMeal: (state, action) => { state.meal = action.payload },
        chooseIngridients: (state, action) => { state.ingridients = action.payload },
        chooseFull_recipe: (state, action) => { state.full_recipe = action.payload },
        chooseDate: (state, action ) => { state.date = action.payload },
        chooseSleep: (state, action) => { state.sleep = action.payload},
        chooseSteps: (state, action) => { state.steps = action.payload},
        chooseWeight: (state, action) => { state.weight = action.payload},
        chooseWorkOut: (state, action) => { state.work_out = action.payload},
        chooseNameExercise: (state, action) => { state.name = action.payload },
        chooseMuscle: (state, action) => { state.muscle = action.payload },
        chooseTypeExercise: (state, action) => { state.type_exercise = action.payload },
        chooseDifficulty: (state, action) => { state.difficulty = action.payload },
        chooseDescription: (state, action) => { state.description = action.payload },
     }
 })

export const reducer = RootSliceRecipes.reducer;
export const { chooseName, chooseMeal, chooseIngridients, chooseFull_recipe } = RootSliceRecipes.actions
