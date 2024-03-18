import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { CoursesEntityService } from "./course-entity.service";
import { map } from "rxjs/operators";

export class CoursesResolver implements Resolve<boolean>
{
  constructor(private coursesService : CoursesEntityService){}

    resolve(route:ActivatedRouteSnapshot,
    state: RouterStateSnapshot) : Observable<boolean>{

      return this.coursesService.getAll()
        .pipe(
          map(courses=> !!courses)
        );
    }
}
