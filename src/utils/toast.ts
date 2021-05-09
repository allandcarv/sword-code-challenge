import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css';

export function success(message: string): void {
  createToast(message, {
    type: 'success',
    toastBackgroundColor: '#00dca4',
    timeout: 3000,
  });
}

export function error(message: string): void {
  createToast(message, {
    type: 'danger',
    toastBackgroundColor: '#FF5C5B',
    timeout: 3000,
  });
}
