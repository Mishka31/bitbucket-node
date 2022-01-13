const { Superhero } = require('../../model')

const getAll = async (_, res) => {
  const superheros = await Superhero.find({})
  res.json({ message: 'template message', code: 200, data: { superheros } })
}

module.exports = getAll
