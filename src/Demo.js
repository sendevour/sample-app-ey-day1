import axios from 'axios';

const wrapper = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(100);
    }, 5000);
  });
};

export const apiResource = wrapper().then(() =>
  axios.get('https://reqres.in/api/users?page=2')
);
// .then(function (data) {
//   console.log('Data received', data);
// })
// .catch(function (error) {
//   console.log('Error occurred', error);
// })
// .finally(() => console.log('Promise finished'));
