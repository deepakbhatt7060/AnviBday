import { createContext} from 'react';

const initialState = {
  timeLeftBday: true,
  first:false,
  timeOver:false,
  crownGone:false
 
};


export const context = createContext(initialState);
