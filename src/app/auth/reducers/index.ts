import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on,
  State,
} from "@ngrx/store";
import { User } from "../model/user.model";
import { AuthActions } from "../action-types";

export interface AuthState{
  user:User
}
export const initialAuthState : AuthState ={
  user:undefined
}
// export const reducers : ActionReducerMap<AuthState>={

// };
export const  authReducer = createReducer(
  initialAuthState,
  on(AuthActions.login, (state , action) =>{

    return{
      user:action.user
    }
  }),
)

