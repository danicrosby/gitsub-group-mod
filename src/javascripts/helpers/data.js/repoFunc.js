import arrRepositories from './RepoData';
import PrintToDom from './PrintToDom';

const PrintPinnedCards = () => {
  let pinnedCards = '';

  arrRepositories.forEach((card) => {
    if (card.pinned === true) {
      pinnedCards += `
      <div class="card text-white bg-dark pinned-card" id="${card.repoID}" style="width: 26.5em; height: 10em; margin: .2em">
        <div class="card-body" id="overview-card-body">
          <h6 class="card-title" style="font-size: 1em"><img src="${card.repoPinnedIcon}"  style="width: 2em; margin-right: 1em">${card.repoTitle}</h6>
          <p class="overview-card-text">${card.repoDescription}</p>
          <hr>
          <div class="repoCardBottomContainer" style="font-size: .8em">
          <div>
            <img src="${card.repoLanguageIcon}" id="pinned-icons" style="border-radius: 50%">${card.repoLanguage}
            <img src="${card.repoStarIcon}" id="pinned-icons" style="margin-left: 2em">${card.starsCount}
            <img src="${card.repoForkedIcon}" id="pinned-icons" style="margin-left: 2em">${card.reposForked}
          </div>
          <button type="button" class="btn btn-danger btn-sm" style="width: 6em; height: 3em; margin-left: 7em" id="${card.repoID}">Delete</button>
           </div>
        </div>
      </div>`;
    }
  });

  PrintToDom('#pinned-cards', pinnedCards);
};

const PrintRepoCards = () => {
  let repoCardsWithSearchBar = '';

  const makeRepoButtons = (repoCard) => {
    let repoButtons = '';
    repoCard.arrListOfButtons.forEach((button, i) => {
      repoButtons += `
          <a href="#" class="btn btn-secondary btn-sm" style="padding: .5em; margin: .5em" id="${i}">${button}</a>`;
    });
    return repoButtons;
  };

  arrRepositories.forEach((card) => {
    repoCardsWithSearchBar += `
          <div class="card overview-card" id="${card.repoID}">
            <div class="card-body text-white bg-dark" id="overview-card-body">
              <div class="container d-flex justify-content-between">
                <h6 class="card-title">${card.repoTitle}</h6>
                <button  id="${card.repoID}" type="button" class="btn btn-danger btn-sm" style="width: 7em; height: 3em">
                <img src="${card.repoStarIcon}" id="pinned-icons"> Star</button></div>
                <p class="overview-card-text">${card.repoDescription}</p>
                <hr>
                <p class="buttons-container">${makeRepoButtons(card)}</p>
                <div class="repoCardBottomContainer"> 
                <div>
                <img src="${card.repoLanguageIcon}" id="repo-icons" style="border-radius: 50%"> ${card.repoLanguage}
                <img src="${card.repoStarIcon}" style="margin-left: 1em" id="repo-icons"> ${card.starsCount}
                <img src="${card.repoForkedIcon}" style="margin-left: 1em" id="repo-icons"> ${card.reposForked} 
                Updated ${card.repoLastUpdate} days ago
                <img src="./images/github-graph.png" style="width: 12em; margin-left: 16em">
              </div>
            </div>
          </div>
        </div>  `;
  });

  PrintToDom('#repo-top-row', repoCardsWithSearchBar);
};

const UpdateStar = (e) => {
  e.preventDefault();
  const targetType = e.target.type;
  const targetId = Number(e.target.id);

  if (targetType === 'button') {
    const indexOfProject = arrRepositories.findIndex((repo) => repo.repoID === targetId);
    if (indexOfProject !== -1) {
      arrRepositories[indexOfProject].starsCount += 1;
    }
  }

  PrintRepoCards(arrRepositories);
};

const RepoSearchBarEvent = (e) => {
  e.preventDefault();
  const searchStringBar = document.querySelector('#repoSearchBar').value.trim();

  const arrayOfFilteredRepos = arrRepositories.filter((repo) => (
    repo.repoTitle.includes(searchStringBar)
    || repo.repoDescription.includes(searchStringBar)
    || repo.repoLanguage.includes(searchStringBar)
  ));
  PrintRepoCards(arrayOfFilteredRepos);
};

const SortRepositoriesBy = (e) => {
  e.preventDefault();
  const sortReposBy = document.querySelector('#sortingRepoBy').value;
  const repoAscendDecend = document.querySelector('#repoAscendDecend').value;

  if (sortReposBy === 'srtByID') {
    if (repoAscendDecend === 'srtAscending') {
      arrRepositories.sort((a, b) => (a.repoID < b.repoID ? -1 : 1));
    } else {
      arrRepositories.sort((a, b) => (a.repoID > b.repoID ? -1 : 1));
    }
  } else if (sortReposBy === 'srtByRepoName') {
    if (repoAscendDecend === 'srtAscending') {
      arrRepositories.sort(
        (a, b) => (a.repoTitle.toUpperCase() < b.repoTitle.toUpperCase() ? -1 : 1)
      );
    } else {
      arrRepositories.sort(
        (a, b) => (a.repoTitle.toUpperCase() > b.repoTitle.toUpperCase() ? -1 : 1)
      );
    }
  } else if (sortReposBy === 'srtBylenguage') {
    if (repoAscendDecend === 'srtAscending') {
      arrRepositories.sort(
        (a, b) => (a.repoLanguage.toUpperCase() < b.repoLanguage.toUpperCase() ? -1 : 1)
      );
    } else {
      arrRepositories.sort(
        (a, b) => (a.repoLanguage.toUpperCase() > b.repoLanguage.toUpperCase() ? -1 : 1)
      );
    }
  }
  PrintRepoCards(arrRepositories);
};

const deleteRepo = (e) => {
  const targetType = e.target.type;
  const targetIdNumber = parseInt(e.target.id);

  if (targetType === 'button') {
    const indexOfRepos = arrRepositories.findIndex((repo) => repo.repoID === targetIdNumber);

    if (indexOfRepos !== -1) {
      arrRepositories.splice(indexOfRepos, 1);
    }
  }
  PrintPinnedCards();
};

export { PrintPinnedCards, SortRepositoriesBy, RepoSearchBarEvent, UpdateStar, deleteRepo};
