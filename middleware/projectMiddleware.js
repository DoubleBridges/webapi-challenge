import Projects from '../data/helpers/projectModel'

export const validateId = async (req, res, next) => {
  const id = req.params.id;
  try {
    const project = await Projects.get(id);
    if (project) {
      req.project = project;
    }
    else {
      res.status(404).json({
        errorMessage: `ID: ${id} does not exist`
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

export const validatePost = (req, res, next) => {
  const post = req.body
  if (!post.name || !post.description) {
    res.status(400).json({
      errorMessage: `Post must contain a Name and Description`
    })
  } else {
  next()
  }
}
