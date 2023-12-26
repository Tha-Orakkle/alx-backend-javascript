import { createUser, uploadPhoto } from './utils';

async function asyncUploadUser() {
  try {
    const promises = [
      createUser(),
      uploadPhoto(),
    ];
    const [user, photo] = await Promise.all(promises);
    return { photo, user };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}

export default asyncUploadUser;
