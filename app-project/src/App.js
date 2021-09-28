import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./components/Main";
import Nav from "./components/Nav";
import NewProject from "./components/NewProject";
import EditProject from "./components/EditProject";

function App() {

  const projectData = [
    { id: uuidv4(), projectName: 'Prueba 1', description: 'jdsdjhadjjsahd', projectManager: 'Juanito Gomez', assignedTo: 'EmiliaQuintana', status: 'enable' },
    { id: uuidv4(), projectName: 'Prueba 2', description: 'jdsdjhadjjsahd', projectManager: 'Juanito Gomez', assignedTo: 'EmiliaQuintana', status: 'enable' },
    { id: uuidv4(), projectName: 'Prueba 3', description: 'jdsdjhadjjsahd', projectManager: 'Juanito Gomez', assignedTo: 'EmiliaQuintana', status: 'enable' },
  ]

  //state
  const [projects, setProjects] = useState(projectData)

  //Agregar proyecto
  const newProject = (project) => {
    project.id = uuidv4()
    setProjects([
      ...projects,
      project
    ])
  }

  //Eliminar proyecto
  const deleteProject = (id) => {
      const projectFiltrado = projects.filter(project => project.id !== id);
      setProjects(projectFiltrado)
  }

  //Editar proyecto
  const [currentProject, setCurrentProject] = useState({
    id: null,
    projectName: '',
    description: '',
    projectManager: '',
    assignedTo: '',
    status: ''
  })

  const editRow = (project) => {
    setCurrentProject({
      id: project.id,
      projectName: project.projectName,
      description: project.description,
      projectManager: project.projectManager,
      assignedTo: project.assignedTo,
      status: project.status
    })
  }

  //Actualizar proyecto
  const updateProject = (id, updateProject) => {
    setProjects(projects.map(project => (project.id === id ? updateProject : project)))
  }

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/editproject">
            <EditProject currentProject={currentProject} updateProject={updateProject} />
          </Route>
          <Route path="/newproject">
            <NewProject newProject={newProject} />
          </Route>
          <Route path="/">
            <Main projects={projects} deleteProject={deleteProject} editRow={editRow}  />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
