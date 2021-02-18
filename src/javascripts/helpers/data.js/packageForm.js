import PrintToDom from './PrintToDom';
import arrPackages from './PacakgeData';

const PrintPackagesCards = () => {
  let packageCards = '';
  arrPackages.forEach((card) => {
    if (card.packageIcon === '') {
      packageCards += `
            <div class="card package-card text-dark" id="${card.packagesID}" style="width: 16.8em; margin: .5em 1em; background-color: #CDCDCD;">
            <div class="card-body" id="overview-card-body">
              <h6 class="card-title">${card.packageType}</h6>
              <p class="overview-card-text">${card.packagesDescription}</p>
              <button type="button" class="btn btn-danger btn-sm" id="${card.packagesID}">Delete</button>
            </div>
          </div>`;
    } else {
      packageCards += `
          <div class="card package-card text-dark" id="${card.packagesID}" style="flex: 1 0 25%; width: 16.8em; margin: .5em 1em; background-color: #CDCDCD;">
            <div class="card-body" id="overview-card-body">
              <h6 class="card-title"><img src="${card.packageIcon}" id="packages-icons" alt="${card.packageType} icon"> ${card.packageType}</h6>
              <p class="overview-card-text">${card.packagesDescription}</p>
              <a href="${card.packagesLink}" class="btn btn-secondary btn-sm" id="overview-btn">Learn More</a>
              <button type="button" class="btn btn-danger btn-sm" id="${card.packagesID}">Delete</button>
            </div>
          </div>`;
    }
  });

  PrintToDom('#packages-card-container', packageCards);
};

const getPackageFormInfo = (e) => {
  e.preventDefault();

  const packagesID = packagesCount++;
  const packageType = document.querySelector('#packagesInputRepositoryName').value;
  const packagesDescription = document.querySelector('#packages-textarea').value;

  const formInputObject = {
    packagesID,
    packageIcon: '',
    packageType,
    packagesDescription,
    packagesLink: '',
    packagesAlpha: ''
  };

  arrPackages.push(formInputObject);
  PrintPackagesCards(arrPackages);

  document.querySelector('.packages-form').reset();
};


const deletePackage = (e) => {
  const targetType = e.target.type;
  const targetIdNumber = parseInt(e.target.id);

  if (targetType === 'button') {
    const indexOfPackages = arrPackages.findIndex(
      (thisPackage) => thisPackage.packagesID === targetIdNumber
    );
    if (indexOfPackages !== -1) {
      arrPackages.splice(indexOfPackages, 1);
    }
  }

  PrintPackagesCards(arrPackages);
};

const newPackageFormCard = (e) => {
  const packageFormCard = `
      <form class="packages-form pb-4">
        <h3 id="h3-title">Create a new project</h3>
        <div class="form-group col-md-6 mb-1">
          <label for="inputRepositoryName" class="mb-1" id="form-label-name">Project Board</label>
          <input type="text" class="form-control" id="packagesInputRepositoryName" required></div>
          <p id="form-text">Coordinate, track, and update your work in one place, so projects stay transparent and on schedule.</p>
        <div class="form-group col-md-9 mb-1">
          <label for="inputDescription" class="mb-1" id="form-description-title">Description (optional)</label>
          <textarea class="form-control" id="packages-textarea" rows="5"></textarea></div>
        <button type="submit" class="btn btn-success mb-1" id="packages-form-btn">Create Project</button>
      </form>`;

  PrintToDom('#create-project-container', packageFormCard);
};

const packageSearch = (e) => {
  e.preventDefault();
  const searchBar = document.querySelector('#packagesSearchBar').value;
  const filteredSearchPackages = arrPackages.filter((thisPackage) => thisPackage.packageType.toLowerCase().includes(searchBar));

  PrintPackagesCards(filteredSearchPackages);
};

export { getPackageFormInfo, deletePackage, packageSearch, newPackageFormCard };
