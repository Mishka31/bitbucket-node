const { Superhero } = require('../../model')

const addSuperhero = async (req, res) => {
  console.log(req.body)
  const result = await Superhero.create(req.body)
  res.status(201).json({ status: 'succes', code: 201, data: { result } })
}

module.exports = addSuperhero
