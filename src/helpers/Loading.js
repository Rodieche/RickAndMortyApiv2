import Swal from 'sweetalert2';

export const loading = (what = '') => {
  Swal.fire({
    title: 'Loading',
    text: `Loading ${what}, please wait...`,
    icon: 'info',
    allowOutsideClick: false,
    allowEnterKey: false,
    allowEscapeKey: false
  });
  Swal.showLoading();
}

export const closeLoading = () => {
  Swal.close();
}
