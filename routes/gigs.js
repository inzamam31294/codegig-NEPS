const express = require('express')
const router = express.Router()
const db = require('../config/database')
const Gig = require('../models/Gig')

router.get('/', (req, res) =>
  Gig.findAll()
    .then((gigs) => {
      res.render('gigs', {
        gigs,
      })
      console.log(gigs)
    })
    .catch((err) => res.render('error', { error: err }))
)

router.get('/add', (req, res) => res.render('add'))

router.post('/add', (req, res) => {
  const data = {
    title: 'Simple wordpress website',
    technologies: 'wordpress, php, html, css',
    budget: '$1000',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    contact_email: 'user2@gmail.com',
  }

  let { title, technologies, description, budget, contact_email } = data

  Gig.create({
    title,
    technologies,
    budget,
    description,
    contact_email,
  })
    .then((gigs) => res.redirect('/gigs'))
    .catch((err) => console.log(err))
})

module.exports = router
