import {useState, useEffect} from 'react';
let globalState = {};//create only once ...sharing data any import from other file will share the same reference
let listeners = []; //function i can call that can update component hook that are using my hook
let actions = {};//
//share logic and data from all files that import from it

export const useStore = () =>{
    //seState changes state to it will re-render
    const [_, setState] = useState(globalState);//guarante that this does not change
    
    const dispatch = (actionIdentifier, payload) => {
        //get action - execute reducer logic(function) - get New State(update Store)
        const newState = actions[actionIdentifier](globalState, payload);//call function that is store
        globalState = {...globalState, ...newState};

        //tell Subscribed component of newState
        for(const listener of listeners){//update array with new state
            listener(globalState);
        }
    };
    
    useEffect(()=>{
        listeners.push(setState);
        return () => {
            listeners = listeners.filter(li => li !== setState);//clear setState
        };
    }, []);


    return [globalState, dispatch];//emulation of user Reducer
};


export const initStore = (userActions, initialState) =>{//same as UserReducer
    //actions that update our actions share object, and globalState shared Object
    if(initialState){
        globalState = {...globalState, ...initialState};
    }
    actions = {...actions, ...userActions};
}