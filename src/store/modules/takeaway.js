import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const foodsStore = createSlice({
    name:'foods',
    initialState:{
        foodsList:[]
    },
    reducers:{
        setTakeawayList(state,action){
            state.foodsList = action.payload
        }
    }
})

const {setTakeawayList} = foodsStore.actions

const fetchFoodsList = () => {
    return async (dispatch) => {
        const res = await axios.get('http://localhost:8080/api/list')
        
        dispatch(setTakeawayList(res.data))
    }
}

export {fetchFoodsList}

const reducer = foodsStore.reducer

export default reducer