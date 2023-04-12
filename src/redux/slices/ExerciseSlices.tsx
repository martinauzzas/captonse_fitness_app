import { createSlice } from "@reduxjs/toolkit";

const RootSliceExercise = createSlice({
    name: "root",
    initialState: {
        id: 'id',
        name: 'Name',
        muscle: 'Muscle',
        type_exercise: 'TypeExercise',
        difficulty: 'Difficulty',
        description: 'Description'
    },
    reducers: {
        chooseNameExercise: (state, action) => { state.name = action.payload },
        chooseMuscle: (state, action) => { state.muscle = action.payload },
        chooseTypeExercise: (state, action) => { state.type_exercise = action.payload },
        chooseDifficulty: (state, action) => { state.difficulty = action.payload },
        chooseDescription: (state, action) => { state.description = action.payload },
    }
})

export const reducerexercises = RootSliceExercise.reducer;
export const { chooseNameExercise, chooseMuscle, chooseTypeExercise, chooseDifficulty, chooseDescription } = RootSliceExercise.actions

