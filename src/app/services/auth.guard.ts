import {ActivatedRouteSnapshot, CanActivateFn, CanDeactivateFn, Router, RouterStateSnapshot} from '@angular/router';
import {inject} from "@angular/core";
import {Observable} from "rxjs";

let userRole: string = 'user';
export const canActivateUser: CanActivateFn = (next: ActivatedRouteSnapshot,
                                               state: RouterStateSnapshot) => {
  const router = inject(Router);
  if (userRole === 'user') {
    router.navigate(['access-denied']).then()
  }
  return true
}

export const canDeactivateUser: CanDeactivateFn<Observable<boolean> | Promise<boolean> | boolean>
  = () => {
  const prompt = confirm('Are you sure want to move to other routing?');
  if (prompt) {
    return true
  }
  return false;
}
