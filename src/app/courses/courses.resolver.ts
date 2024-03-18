import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "../reducers";
import { filter, finalize, first, tap } from "rxjs/operators";
import { loadAllCourses } from "./course.actions";
import { areCoursesLoaded } from "./courses.selectors";

@Injectable()
export class CoursesResolver implements Resolve<any>
{
  loading = false;
  constructor(private store : Store<AppState>){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<any> {

    return this.store
    .pipe(
      select(areCoursesLoaded),
      tap(courseLoaded=>{
        if(!this.loading && !courseLoaded){
          this.loading  = true;
          this.store.dispatch(loadAllCourses());
        }
      }),
      filter(courseLoaded => courseLoaded),
      first(),
      finalize(()=>this.loading = false)
    );
  }
}
