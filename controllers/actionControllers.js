import Actions from '../data/helpers/actionModel'


export const getAll = async (req, res) => {
  console.log('req=', req.path)
  try {
    const actions = await Actions.get()
    res.status(200).json(actions)
  } catch (err) {
    console.log(req.params, err)
    res.status(500).json({
        errorMessage: `${err}`
    })
  }
}

export const getOne = (req, res) => {
  const action = req.action;
  res.status(200).json(action);
}

export const makeOne = async (req, res) => {
  try {
    const newAction = await Actions.insert(req.body)
    res.status(201).json(newAction)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      errorMessage: `${err}`
    })
  }  
}

export const changeOne = async (req, res) => {
  console.log(req.action)
  const id = req.action.project_id
  const changes = req.body
  try {
    const updatedActions = await Actions.update(id, changes)
    res.status(200).json(updatedActions)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      errorMessage: `${err}`
    })
  }  
}

export const removeOne = async (req, res) => {
  const id = req.action.id
  try {
    await Actions.remove(id)
    const actions = await Actions.get();
    res.status(200).json(actions);
  } catch (err) {
    console.log(err)
    res.status(500).json({
      errorMessage: `${err}`
    })
  }
}