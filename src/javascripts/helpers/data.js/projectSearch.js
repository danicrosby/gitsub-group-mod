import PrintToDom from './PrintToDom';
import arrProjects from './ProjectData';

const PrintProjectsFormWithSearchBar = () => {
  const projectCardsWithSearchBar = '';

  arrProjects.forEach((card) => {
    const projectCardsWithSearchBar = `
    <div class="card project-card text-white bg-dark border-secondary" id="${card.projectID}">
    <div class="card-body" id="overview-card-body">
      <h4 class="card-title" style="color: white">${card.projectName}</h4>
      <a href="${card.projectLink}" style="color:lightgray" class="mb-4">View</a>
      <p class="overview-card-text"><img src="${card.projectLastUpdate}" id="timeUpdated">  ${card.projectDescription}</p>
      <div class="btn-group mr-2" role="group"><button type="button" class="btn btn-danger btn-sm" class="mt-1" id="${card.projectID}">Delete</button></div>
    </div>
    </div>`;
  });

  PrintToDom('#projects-top-row', projectCardsWithSearchBar);
};

const newProjectFormCard = (e) => {
  const projectFormCard = `
<form class="projects-form pb-4">
  <h3 id="h3-title">Create Project</h3>
  <div class="form-group col-md-6 mb-1">
    <label for="inputProjectName" class="mb-1 text-warning" id="form-label-name">Project Title</label>
    <input type="text" class="form-control text-warning" id="inputProjectName" required></div>
    <label for="inputProjectDescription" class="mb-1 text-warning" id="form-label-name">Author Name</label>
    <input type="text" class="form-control" id="inputProjectDescription" required>
    <label for="inputProjectLink" class="mb-1 text-warning" id="form-label-name">Project</label>
    <input type="text" class="form-control" id="inputProjectLink" required>
    <button type="submit" class="btn btn-danger my-3" id="projects-form-btn">Create Project</button>
  </div>
</form>`;

  PrintToDom('#create-project-container', projectFormCard);
};

const getCreateNewProjectInfo = (e) => {
  e.preventDefault();

  let projectID = projectCount++;
  const projectName = document.querySelector('#inputProjectName').value;
  const projectDescription = document.querySelector('#inputProjectDescription').value;
  const projectLink = document.querySelector('#inputProjectLink').value;
  const projectLastUpdate = './images/last updated (clock).webp';

  const projectObj = {
    projectID,
    projectName,
    projectDescription,
    projectLink,
    projectLastUpdate
  };
  arrProjects.push(projectObj);
  PrintProjectsFormWithSearchBar();

  document.querySelector('.projects-form').reset();
};

const deleteProject = (e) => {
  e.preventDefault();
  const targetType = e.target.type;
  const targetId = Number(e.target.id);

  if (targetType === 'button') {
    const indexOfProject = arrProjects.findIndex((project) => project.projectID === targetId);
    if (indexOfProject !== -1) {
      arrProjects.splice(indexOfProject, 1);
    }
  }

  PrintProjectsFormWithSearchBar();
};

export { newProjectFormCard, getCreateNewProjectInfo, deleteProject };
