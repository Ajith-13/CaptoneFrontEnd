import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AdminloginService } from '../Services/admin/adminlogin.service'; 

export const adminAuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AdminloginService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    console.log(authService.isAuthenticated);
    return true;
  } else {
    // Redirect to login page if not authenticated
    router.navigate(['/admin-login']);
    return false;
  }
};
