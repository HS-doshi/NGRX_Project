import { createFeatureSelector, createSelector, on } from "@ngrx/store";
import { CoursesState, initialCoursesState } from "./reducers/course.reducers";
import * as fromCourses from './reducers/course.reducers'

export const  selectCourseState =
  createFeatureSelector<CoursesState>("courses");
export const selectAllCourses = createSelector(
  selectCourseState,
  fromCourses.selectAll
);

export const  selectBeginnerCourses  = createSelector(
  selectAllCourses,
  courses=>courses.filter(course => course.category === 'BEGINNER')
);
export const selectAdvancedCourse = createSelector(
  selectAllCourses,
  courses=>courses.filter(course => course.category==='ADVANCED')
);
export const selectPromoTotal = createSelector(
  selectAllCourses,
  courses=> courses.filter(course=> course.promo).length
);
