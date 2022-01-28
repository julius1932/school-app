import config from 'config';
import jwt from 'jsonwebtoken';


const secret: string = config.get('api.secret');
const my_secret: string = config.get('my_secret');
/**
 * Create a JWT token
 * @param data is a object that we want to pass to token. Note: keep this as short as you can.
 * @param expiresIn time for token to live. Default is 7 days
 * @param algorithm
 * @param loginWith
 */
export const sign = (data, expiresIn = '7d', algorithm = 'HS256', loginWith) => {
  let secretKey = secret;
  if (loginWith && loginWith === 'cdp') {
      secretKey = my_secret
  }
  return jwt.sign(data, secretKey, {algorithm, expiresIn});
};

/**
 * Verify if a token is valid or not
 * @param token
 * @return decrypted token object
 */
export const verify = (token) =>
  new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(decoded);
    });
  });
