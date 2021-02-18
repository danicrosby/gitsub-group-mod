import arrRepositories from '../helpers/data.js/RepoData';

const CreateANewRepo = (e) => {
  e.preventDefault();
  const repoID = repositoryID += 1;
  const repoTitle = document.querySelector('#inputRepositoryName').value.trim();
  const repoLink = '';
  const repoDescription = document.querySelector('#repo-textarea').value.trim();
  const repoPinnedIcon = './images/tack-1.png';
  const repoLanguageIcon = './images/red-square.png';
  const repoStarIcon = './images/star-2.png';
  const repoForkedIcon = './images/fork-2.png';
  const repo3DotIcon = './images/3-dot-icon.webp';
  const repoLanguage = '';
  const starsCount = 0;
  const pinned = false;
  const repoMITLicense = false;
  const issuesNeedHelp = 0;
  const repoLastUpdate = '0';
  const reposForked = 0;
  const arrListOfButtons = [];

  const obj = {
    repoID,
    repoTitle,
    repoLink,
    repoDescription,
    repoPinnedIcon,
    repoLanguageIcon,
    repoStarIcon,
    repoForkedIcon,
    repo3DotIcon,
    repoLanguage,
    starsCount,
    pinned,
    repoMITLicense,
    issuesNeedHelp,
    repoLastUpdate,
    reposForked,
    arrListOfButtons
  };

  arrRepositories.push(obj);
  document.querySelector('#inputRepositoryName').value = '';
  document.querySelector('#repo-textarea').value = '';
  PrintRepoCards(arrRepositories);
};

export default CreateANewRepo;
