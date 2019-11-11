import { Router } from 'express'
import { validateId, validatePost } from '../middleware/projectMiddleware'
import { getAll, getOne, makeOne, changeOne, removeOne } from '../controllers/projectControllers'

const router = Router()


// route equivalent to '/api/projects'
router
  .route('/')
  .get(getAll)
  .post(validatePost, makeOne)

router
  .route('/:id')
  .all(validateId)
  .get(getOne)
  .put(validatePost, changeOne)
  .delete(removeOne)

  export default router