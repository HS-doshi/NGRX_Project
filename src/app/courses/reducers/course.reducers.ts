import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { Course } from "../model/course";
import { createReducer } from "@ngrx/store";
import { CourseActions } from "../action-types";
import {on} from "@ngrx/store"

export interface CoursesState extends EntityState<Course>{
  // courses : Course[];
  entities: {[key:number] : Course},
  ids:number[]
}
export  const adapter = createEntityAdapter<Course>();

export const initialCoursesState = adapter.getInitialState();

export const coursesReducer = createReducer(
  initialCoursesState,
  on(CourseActions.allCoursesLoaded , (state,action)=> adapter.setAll(action.courses,state))
  );

export const {selectAll} = adapter.getSelectors();


