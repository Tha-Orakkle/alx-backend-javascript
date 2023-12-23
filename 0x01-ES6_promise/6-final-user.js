import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ];
  return Promise.allSettled(promises)
    .then((res) => res.map((data) => ({
      status: data.status,
      value: data.status === 'fulfilled' ? data.value : data.reason,
    })));
}

export default handleProfileSignup;
