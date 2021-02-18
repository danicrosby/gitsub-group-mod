import PrintToDom from './helpers/data.js/PrintToDom';

const initialScreen = () => {
  let domString = '';
  domString += `
      <main>
        <div class="container text-white bg-dark outer-container" id="outer-container">
            <div class="container text-white bg-dark left-container" id="left-container"></div>
            <div class="container text-white bg-dark right-container" id="right-container">
                <div class="container nav-card-container" id="nav-card-container"></div>
                 <div class="container pinned-repo-container" id="pinned-repo-container"></div>
                <div class="container pinned-card-container" id="pinned-card-container">
                  <div class="row align-items-start repo-top-row" id="pinned-cards"></div>
                </div>
            </div>
          </div>
        <div class="container text-white bg-dark footer-container" id="footer-container"></div>
    </main> `;
  PrintToDom('body', domString);
};

export default initialScreen;
