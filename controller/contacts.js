const Contact = require('../model/contact')

class ContactsController {
  
  static create (req, res) {
    const newData = {
      name: req.body.name,
      phone: req.body.phone,
      company: req.body.company,
      active: Boolean(req.body.active) || true
    }
    Contact.create(newData)
      .then(response => {
        res.status(201).send({message: `contact ${response.name} has been added`})
      })
      .catch(error => {
        res.sendStatus(500)
      })
  }
  
  static getAll (req, res) {
    Contact.find()
      .then(response => {
        res.status(200).send(response)
      })
      .catch(error => {
        res.sendStatus(500)
      })
  }

  static getById (req, res) {
    Contact.findById(req.params.id)
      .then(response => {
        res.status(200).send({
          msg: 'data successfuly fetched',
          data: response,
        })
      })
      .catch(err => {
        res.sendStatus(500)
      })
  }


  static edit (req, res) {
    const newData = {
      name: req.body.name,
      phone: req.body.phone,
      company: req.body.company,
      active: Boolean(req.body.active) || true
    }
    Contact.findByIdAndUpdate(req.params.id, newData)
      .then(response => {
        res.status(200).send({
          message: 'successfuly updated',
          data: response
        })
      })
      .catch(err => {
        res.sendStatus(500)
      })
  }

  static delete (req, res) {
    Contact.findByIdAndDelete(req.params.id)
      .then(response => {
        res.status(200).send({
          message: `${req.params.id} has been deleted successfuly`,
          data: response
        })
      })
      .catch(err => {
        res.sendStatus(500)
      })
  }
  
}

module.exports = ContactsController