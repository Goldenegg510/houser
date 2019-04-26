module.exports={
  get_houses: async (req, res) => {
    const db = req.app.get('db')
    let houses = await db.get_houses()
    res.status(200).send(houses)
  },
  create_house: async (req, res) => {
    const db = req.app.get('db')
    const {name, address, city, state, zipcode} = req.body
    const result = await db.create_house([name, address, city, state, zipcode])
    res.sendStatus(200)
  }
}