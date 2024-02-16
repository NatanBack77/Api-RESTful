const router= require('express').Router()

router.post('/person', async (req, res) => {
    const { name, salary, approved } = req.body

    if (!name){
        res.status(422).json({error : 'o nome é obrigatório!'})
    }
    const person = {
        name,
        salary,
        approved
    }
    try {
        await Person.create(person)
        res.status(201).json({massage:'pessoa inserida com sucesso'})

    } catch (error) {
        res.status(500).json({ error: error })
    }
})

module.exports= router