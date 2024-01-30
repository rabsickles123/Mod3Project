import { createContext, useReducer} from "react";

export const DiaryContext = createContext();

export const diaryReducer = (state, action) => {
    switch(action.type){
        case 'SET_DIARY':
            return {
                ...state,
                diary: action.payload
            }
        case 'CREATE_DIARY':
            return {
                diary: [action.payload, ...state.diary]
            }
        default:
            return state
    }
}

export default function DiaryContextProvider({children}) {
    const [state, dispatch] = useReducer(diaryReducer,{
        diary: null,
    });

        

    return(
        <DiaryContext.Provider value= {{...state, dispatch}}>
            {children}
        </DiaryContext.Provider>
    )
}

