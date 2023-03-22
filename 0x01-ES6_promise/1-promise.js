export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}

const responsePromise = getFullResponseFromAPI();
responsePromise
  .then((response) => console.log('Promise', response))
  .catch((error) => console.log('Promise', error));
