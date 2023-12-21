function getFullResponseFromAPI(success) {
  return new Promise((resolves, reject) => {
    if (success) {
      resolves({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}

export default getFullResponseFromAPI;
