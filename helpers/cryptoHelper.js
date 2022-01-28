import bcrypt from 'bcrypt';
const saltRounds = 10;

/**
 * Generate a random string
 */
export const genSalt = () =>
  new Promise((resolve, reject) => {
    bcrypt
      .genSalt(saltRounds, (err, salt) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(salt);
      });
  });


/**
 * Hash a string with random salt
 * @param str to hash
 * @returns {salt, hash}
 */
export const hashString = (str) =>
  new Promise((resolve, reject) => {
    exports
      .genSalt()
      .then((salt) => {
        bcrypt.hash(str, salt, (err, hash) => {
          if (err) {
            reject(err);
            return;
          }

          resolve({ salt, hash });
        });
      })
      .catch(reject);
  });


/**
 * Hash string with a given salt
 * @param str to hash
 * @param salt be used to hash string
 */
export const hashStringWithSalt = (str, salt) =>
  new Promise((resolve, reject) => {
    bcrypt.hash(str, salt, (err, hash) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({ salt, hash });
    });
  });
