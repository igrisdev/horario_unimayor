/* import jwt from 'jsonwebtoken'

export function verifyJWT(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) reject(err)
      resolve(decoded)
    })
  })
} */

/* import jwt from 'jsonwebtoken'

export const verifyJWT = (token) => {
  try {
    console.log(token, process.env.JWT_SECRET)
    const data = jwt.verify(token, process.env.JWT_SECRET)
    return data
  } catch (error) {
    return null
  }
} */
