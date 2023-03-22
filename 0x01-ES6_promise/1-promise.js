export default function getFullResponseFromAPI() {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve(status: 200, body: 'Success');
    } else {
      reject(The fake API is not working currently);
    }
  });
}
