import jwt from 'jsonwebtoken'

// export function generateJWT({ id }) {
//   return new Promise((resolve, reject) => {
//     jwt.sign(
//       { id },
//       process.env.JWT_SECRET,
//       { expiresIn: '24h' },
//       (err, token) => {
//         if (err) reject(err)
//         resolve(token)
//       }
//     )
//   })
// }

export const generateJWT = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}
