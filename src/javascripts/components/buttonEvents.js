const ButtonEvents = () => {
  const x = location.pathname;

  if (x === '/projects.html') {
    document.querySelector('#projects-form-btn').addEventListener('click', getCreateNewProjectInfo);
    document.querySelector('#projects-top-row').addEventListener('click', deleteProject);
    document.querySelector('#projectSearchbar').addEventListener('keyup', searchProjectsSearchBar);
  } else if (x === '/packages.html') {
    document.querySelector('#packages-form-btn').addEventListener('click', getPackageFormInfo);
    document.querySelector('#packages-card-container').addEventListener('click', deletePackage);
    document.querySelector('#packagesSearchBar').addEventListener('keyup', packageSearch);
  } else if (x === '/' || x === '/index.html') {
    document.querySelector('.repo-top-row').addEventListener('click', deleteRepo);
  } else if (x === '/repo.html') {
    document.querySelector('#form-btn').addEventListener('click', CreateANewRepo);
    document.querySelector('#repo-top-row').addEventListener('click', UpdateStar);
    document.querySelector('#repoSearchBar').addEventListener('keyup', RepoSearchBarEvent);
    document.querySelector('#btnSortRepoBy').addEventListener('click', SortRepositoriesBy);
    document.querySelector('#btnAscendingDescendbutton').addEventListener('click', SortRepositoriesBy);
  }
};

const init = () => {
  let x = location.pathname;

  if (x === '/' || x === '/index.html') {
    PrintNavBar();
    PrintProfile();
    PrintAboutMe();
    PrintPinnedCards();
    PrintFooter();
  } else if (x === '/repo.html') {
    PrintNavBar();
    PrintProfile();
    PrintRepoCards(arrRepositories);
    PrintFooter();
  } else if (x === '/projects.html') {
    PrintNavBar();
    PrintProfile();
    PrintFooter();
    PrintProjectsFormWithSearchBar();
    newProjectFormCard();
  } else if (x === '/packages.html') {
    PrintNavBar();
    PrintProfile();
    newPackageFormCard();
    PrintPackagesCards(arrPackages);
    PrintFooter();
  }

  ButtonEvents();
};

init();

export default ButtonEvents;
