// import express from 'express';
// import DB from '../../database.js';

// const router = express.Router();

//get products all
// router.get('/products', async (req, res) => {
//   const product = await DB('products')
//   return res.send(product)
// })

// router.get('/products/:productId', async (req, res) => {
//   const productId = req.params.productId
//   const product = await DB('products').where('id', productId).first()
//   return res.send(product)
// })

// app.post('/contacts',async (req, res) => {
//   console.log(40,req.body)
//   const name = req.body.name
//   const phone = req.body.phone
//   const email = req.body.email
//   const content = req.body.content
  
//   await knex('contacts').insert({
//     name: name,
//     phone: phone,
//     email: email,
//     content: content})

    
//   return res.send("oke")
// })

// app.patch('/contacts/:id',async (req, res) => {
//   const id = req.params.id
//   console.log(40,req.body)
//   const name = req.body.name
//   const phone = req.body.phone
//   const email = req.body.email
//   const content = req.body.content
  
//   await knex('contacts').update({
//     name: name,
//     phone: phone,
//     email: email,
//     content: content}).where('id',id)

    
//   return res.send("updatesussecsaa")
// })

// app.delete('/contacts/:id',async (req, res) => {
//   const id = req.params.id
//   console.log(40,req.body)
//   // const name = req.body.name
//   // const phone = req.body.phone
//   // const email = req.body.email
//   // const content = req.body.content
  
//   await knex('contacts').del().where('id',id)

    
//   return res.send("update")
// })

// //articles
// app.post('/articles',async (req, res) => {
//   // console.log(40,req.body)
//   const title = req.body.title
//   const slug = req.body.slug
//   // const image = req.body.image
//   const summary = req.body.summary
//   const description = req.body.description
//   const category_id = req.body.category_id
//   const position = req.body.position
//   const is_active = req.body.is_active
  
//   await knex('articles').insert({
//     title: title,
//     slug: slug,
//     // image: image,
//     summary: summary,
//     description: description,
//     category_id: category_id,
//     position : position,
//     is_active : is_active})

    
//   return res.send("oke")
// })

// app.patch('/articles/:id',async (req, res) => {
//   const id = req.params.id
//   const title = req.body.title
//   const slug = req.body.slug
//   // const image = req.body.image
//   const summary = req.body.summary
//   const description = req.body.description
//   const category_id = req.body.category_id
//   const position = req.body.position
//   const is_active = req.body.is_active
//   await knex('articles').update({
//     title: title,
//     slug: slug,
//     // image: image,
//     summary: summary,
//     description: description,
//     category_id: category_id,
//     position : position,
//     is_active : is_active}).where('id',id)

    
//   return res.send("update")
// })

// app.delete('/articles/:id',async (req, res) => {
//   const id = req.params.id 
//   await knex('articles').del().where('id',id)

    
//   return res.send("updateDel")
// })

// export default router;

