const express = require("express");
const router = express.Router();

let projects = [
  { id: 1, value: "projeto 1" },
  { id: 2, value: "projeto 2" },
  { id: 3, value: "projeto 3" },
];

const getProjectsById = (id) => {
  return projects.find((proj) => proj.id === id);
};

const updateProjectValue = (id, value) => {
  return projects.map((proj) =>
    proj.id === id ? { id: id, value: value } : proj
  );
};

const removeProject = (id) => {
  return projects.filter((project) => project.id !== id);
};

router.get("/", (request, response) => {
  const query = request.query;

  response.json(Object.keys(query).length > 0 ? query : projects);
});

router.post("/", (request, response) => {
  const { value } = request.body;

  projects.push({ id: projects.length + 1, value });

  response.json(projects);
});

router.put("/:id", (request, response) => {
  const { id } = request.params;
  const { value } = request.body;

  const updatedProj = updateProjectValue(parseInt(id), value);

  projects = updatedProj;

  response.json(updatedProj);
});

router.delete("/:id", (request, response) => {
  const { id } = request.params;

  const result = removeProject(parseInt(id));

  projects = result;

  response.json(result);
});

module.exports = router; // exporta o modulo de rotas para ser recebido por require()
