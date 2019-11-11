import { Router } from 'express'
import { getAll, getOne, makeOne, changeOne, removeOne } from '../controllers/actionControllers'
import { validateId, validateAction } from '../middleware/actionMiddleware'

const router = Router()

// route quivalent to '/api/actions'
router
  .route('/')
  .get(getAll)
  .post(validateAction, makeOne)

router
  .route('/:id')
  .all(validateId)
  .get(getOne)
  .put(validateAction, changeOne)
  .delete(removeOne)

export default router