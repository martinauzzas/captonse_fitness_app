import { createSlice } from "@reduxjs/toolkit"

const RootSliceLogs = createSlice({
    name: "root",
    initialState: {
        id: 'id',
        date: 'date',
        sleep: 'sleep',
        steps: 'steps',
        weight: 'weight',
        work_out: 'work_out'
    },
    reducers: {
        chooseDate: (state, action ) => { state.date = action.payload },
        chooseSleep: (state, action) => { state.sleep = action.payload},
        chooseSteps: (state, action) => { state.steps = action.payload},
        chooseWeight: (state, action) => { state.weight = action.payload},
        chooseWorkOut: (state, action) => { state.work_out = action.payload}
    }
})

export const reducerLogs = RootSliceLogs.reducer;
export const { chooseSleep, chooseSteps, chooseWeight, chooseWorkOut, chooseDate } = RootSliceLogs.actions