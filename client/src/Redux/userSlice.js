import { createSlice} from '@reduxjs/toolkit';


const userSlice = createSlice({
    name: "user",
    initialState:{
        user: null,
        isLoading: false,
    },
    reducers:{
        // actions
        setUser: (state,action)=>{
            state.user = action.payload;
        },
        setLoading:(state,action)=>{
            state.isLoading = action.payload
        },
        setMovie: (state,action)=>{
            state.movie = action.payload;
        }
    },
});

export const {setUser,setLoading,setMovie} = userSlice.actions;
export default userSlice.reducer;

