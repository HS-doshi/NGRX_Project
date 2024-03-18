import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { Course, compareCourses } from "../model/course";
import { createReducer } from "@ngrx/store";
import { CourseActions } from "../action-types";
import {on} from "@ngrx/store"


export interface CoursesState extends EntityState<Course>{
  // courses : Course[];
  allCoursesLoadded : boolean
}
export  const adapter = createEntityAdapter<Course>({
    sortComparer : compareCourses,
});

export const initialCoursesState = adapter.getInitialState({
  allCoursesLoadded : false
});

export const coursesReducer = createReducer(
  initialCoursesState,
  on(CourseActions.allCoursesLoaded , (state,action)=>
  adapter.addMany(
    action.courses,{...state, allCoursesLoadded:true}
    )),
    on(CourseActions.courseUpdated , (state,action)=>adapter.updateOne(action.update,state))
);

export const {selectAll} = adapter.getSelectors();
