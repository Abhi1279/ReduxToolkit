import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "user",
    initialState:[],
    reducers:{
        addUsers(state, action){
            state.push(action.payload)
        },
        removeUsers(state, action){},
        clearAllUsers(state,action){}
    }
})



export default userSlice.reducer;

export const {addUsers} = userSlice.actions;