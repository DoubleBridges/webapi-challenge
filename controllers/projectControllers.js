import Projects from '../data/helpers/projectModel'

export const getAll = async (req, res) => {
  try {
    const projects = await Projects.get();
    res.status(200).json(projects);
  } catch (err) {
    console.log(err)
    res.status(500).json({
      errorMessage: `${err}`
    })
  }
  
}
export const getOne = (req, res) => {
  const project = req.project;
  res.status(200).json(project);
}

export const makeOne = async (req, res) => {
  try {
    const newProject = await Projects.insert(req.body)
    res.status(201).json(newProject)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      errorMessage: `${err}`
    })
  }  
}

export const changeOne = async (req, res) => {
  const id = req.project.id
  const changes = req.body
  try {
    const updatedProject = await Projects.update(id, changes)
    res.status(200).json(updatedProject)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      errorMessage: `${err}`
    })
  }  
}

export const removeOne = async (req, res) => {
  const id = req.project.id
  try {
    await Projects.remove(id)
    const projects = await Projects.get();
    res.status(200).json(projects);
  } catch (err) {
    console.log(err)
    res.status(500).json({
      errorMessage: `${err}`
    })
  }
}