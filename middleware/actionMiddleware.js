import Actions from '../data/helpers/actionModel'


export const validateId = async (req, res, next) => {
  const project_id = req.params.id;
  try {
    const action = await Actions.get(project_id);
    if (action) {
      req.action = action
    }
    else {
      res.status(404).json({
        errorMessage: `ID: ${project_id} does not exist`
      });
    }
  }
  catch (err) {
    console.log(err);
    res.status(500).json({
      errorMessage: `${err}`
    });
  }
  next();
}

export const validateAction = (req, res, next) => {
  const action = req.body
  if (!action.project_id || !action.description || !action.notes) {
    res.status(400).json({
      errorMessage: `Action must contain a project ID, description, and notes properties`
    })
  } else {
    next()
  }
}