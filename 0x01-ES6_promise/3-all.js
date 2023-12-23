import { createUser, uploadPhoto } from './utils';

function handleProfileSignup() {
  return Promise.all([createUser(), uploadPhoto()])
    .then((values) => {
      const [{ firstName, lastName }, { body }] = values;
      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}

export default handleProfileSignup;
