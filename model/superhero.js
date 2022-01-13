const { Schema, model } = require('mongoose')
const Joi = require('joi')
const { string, array } = require('joi')

const superheroSchema = Schema(
  {
    nickname: {
      type: String,
      required: [true, 'Set name for superhero'],
    },
    real_name: {
      type: String,
      required: [true, 'Set real_name for superhero'],
    },
    origin_description: {
      type: String,
      required: [false, 'Set origin_description for superhero'],
    },
    superpowers: {
      type: String,
      required: [false, 'Set superpowers for superhero'],
    },
    catch_phrase: {
      type: String,
      required: [false, 'Set superpowers for superhero'],
    },
    imageURL: {
      type: Array,
      required: [false, 'Set superpowers for superhero'],
      default: [
        {
          id: 1,
          img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        },
        {
          id: 2,
          img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        },
      ],
    },
  },
  { versionKey: false, timestamps: true }
)
const schema = Joi.object({
  nickname: Joi.string().min(1).max(30).required(),
  real_name: Joi.string().min(1).max(30).required(),
  origin_description: Joi.string().min(3),
  superpowers: Joi.string().min(1).max(100),
  catch_phrase: Joi.string().min(1).max(100),
  imageURL: Joi.array(),
})

const Superhero = model('superheros', superheroSchema)

module.exports = {
  Superhero,
  schema,
}
