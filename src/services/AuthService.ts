import { ROUTES } from '../constants/routes.ts';

export default class AuthServices {
  public successLogin(data: string): void {
    localStorage.setItem('token', data);
    // window.location.replace(ROUTES.HOME());
  }

  public async Logout() {
    localStorage.clear();
    window.location.replace(ROUTES.AUTH.LOGIN());
  }

  public authCheck(): boolean {
    return !!localStorage.getItem('token');
  }
}
