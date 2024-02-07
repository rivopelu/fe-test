import { useSnackbar } from 'notistack';
import axios, { AxiosError } from 'axios';
import AuthServices from './AuthService.ts';

export default class ErrorService {
  private enqueueSnackbar = useSnackbar();
  private authService = new AuthServices();

  private handleSnackbar(message: string) {
    this.enqueueSnackbar.enqueueSnackbar(message, { variant: 'error' });
  }

  private handleSnackbarSuccess(message: string) {
    this.enqueueSnackbar.enqueueSnackbar(message, { variant: 'success' });
  }

  public fetchApiError(error: AxiosError<any>) {
    let message;
    if (error?.response?.status === 401) {
      this.authService.Logout().then();
    } else {
      if (axios.isAxiosError(error) && error.response) {
        console.log(error?.response?.data?.error);
        message = error?.response?.data?.error || 'Terjadi Kesalahan Pada Sistem';
      } else message = String(error);
      return this.handleSnackbar(message);
    }
  }

  public fetchApiSuccess(message: string) {
    return this.handleSnackbarSuccess(message ? message : 'Success');
  }
}
