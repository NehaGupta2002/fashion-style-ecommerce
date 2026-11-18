// import { configureStore } from "@reduxjs/toolkit";
// import animeReducer from "./slice/animeslice";

// const store = configureStore({
//     middleware:(getDefaultMiddleware)=>{
//         return getDefaultMiddleware({
//             serializableCheck:{
//               ignoreActions:["anime/fetchanime"]
//             }
//         })
//     },
//   reducer: {
//     anime: animeReducer,


   
//   },
// });

// export default store;



import { configureStore } from "@reduxjs/toolkit";
import animeReducer from "./slice/animeslice";
import marvelreducer from "./slice/marvelslice";
import gymfreekreducer from "./slice/gymfreek";
import plainreducer from "./slice/plainslice";
import sanatanreducer from "./slice/sanatanslice";

const store = configureStore({
    reducer: {
        anime: animeReducer,
        marvel:marvelreducer,
        gymfreek:gymfreekreducer,
        plain:plainreducer,
        sanatan:sanatanreducer,
        
    }
});

export default store;
