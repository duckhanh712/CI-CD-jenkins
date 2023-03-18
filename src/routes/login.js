// import express from 'express';
// import DB from '../../database.js';

// const router = express.Router();

// //get products all
// router.post('/login', async (req, res) => {
//   const email = req.body.email
//   const password = req.body.password
// //   console.log(req.body)
//   if (!email) {
//       return res.send('ban chua nhap email')
//   }
//   if (!password) {
//       return res.send('ban chua nhap password')
//   }
//   const user = await DB('users').where("email" , email).first()
//   if (!user) {
//       return res.send('email khong ton tai')
//   }

//   if (password === user.password) {
//       return res.send('dang nhap thannh cong')
//   } else {
//       return res.send('mat khau sai')
//   }

// })

// router.post('/register', async (req, res) => {
//     const email = req.body.email
//     const password = req.body.password
//     if (!email) {
//         return res.send('ban chua nhap email')
//     }
//     if (!password) {
//         return res.send('ban chua nhap password')
//     }
//     const user = await DB('users').where("email" , email).first()
//     if (user) {
//         return res.send('email da ton tai')
//     }
//     await DB('users').insert({
//         email: email,
//         password: password
//     })
//     const msg = 'ban da dang ky thanh cong : ' + email
//     return res.send(msg)
//   })


// export default router;

