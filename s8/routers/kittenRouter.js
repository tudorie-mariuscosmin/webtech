const router = require('express').Router()
const controller = require('../controllers/kittensController')

router.get('/kittens', controller.getKittens)

router.post('/kittens', controller.postKitten)

router.get('/kittens/:id', controller.getKitten)

router.put('/kittens/:id', controller.updateKitten)
router.delete('/kittens/:id', controller.deleteKitten)

module.exports = router