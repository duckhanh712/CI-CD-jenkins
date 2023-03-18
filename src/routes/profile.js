// import express from 'express';
// import DB from '../../database.js';

// const router = express.Router();

// router.patch('/profile/:userId', async (req, res) => {
//     const userId = req.params.userId
//     const email = req.body.email
//     const password = req.body.password
    
    // if (!email) {
    //     return res.send('ban chua nhap email')
    // }
    // if (!password) {
    //     return res.send('ban chua nhap password')
    // }

    // ĐỔI THÔNG TIN LÀ SỬA CẢ TÊN, TUỔI GIỚI TÍNH, CHỨ KHÔNG PHẢI ĐỔI EMAIL, MẬT KHẨU
    // ĐỔI MẬT KHẨU PHẨI LÀM RIÊNG 1 API 

//     await DB('users').update({
//         email: email,
//         password: password
//     }).where('id', userId)
//     return res.send('ban da thay doi thanh cong')
// })

// export default router;