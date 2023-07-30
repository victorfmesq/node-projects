const express = require("express");
const { v4: generateUuid } = require("uuid");
const router = express.Router();

let projects = [];

const getProjectIndex = (id) => {
  return projects.findIndex((p) => p.id === id);
};

const updateProjectValue = (index, updatedProject) => {
  projects[index] = updatedProject;
};

const removeProject = (index) => {
  projects.splice(index, 1);
};

router.get("/", (request, response) => {
  const query = request.query;

  response.json(Object.keys(query).length > 0 ? query : projects);
});

router.post("/", (request, response) => {
  const { owner, name } = request.body;

  if (!owner || !name) {
    return response.status(400).json({ Error: "Name and owner are required!" });
  }

  projects.push({ id: generateUuid(), owner, name });

  return response.status(201).json(projects);
});

router.put("/:id", (request, response) => {
  const { id } = request.params;
  const { owner, name } = request.body;

  const currentProjectIndex = getProjectIndex(id);

  if (currentProjectIndex < 0) {
    return response.status(404).json({ error: "Project not found!" });
  }

  if (!owner || !name) {
    return response.status(400).json({ Error: "Name and owner are required!" });
  }

  const updatedProject = { id, owner, name };

  updateProjectValue(currentProjectIndex, updatedProject);

  return response
    .status(200)
    .json({ message: "Project updated successfully!" });
});

router.delete("/:id", (request, response) => {
  const { id } = request.params;

  const currentProjectIndex = getProjectIndex(id);

  if (currentProjectIndex < 0) {
    return response.status(404).json({ error: "Projects not found!" });
  }

  removeProject(currentProjectIndex);

  return response.status(204).send();
});

module.exports = router; // exporta o modulo de rotas para ser recebido por require() ou import
