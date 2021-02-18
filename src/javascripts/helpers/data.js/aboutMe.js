import PrintToDom from './PrintToDom';

const PrintAboutMe = () => {
  const about = `
        <div class="card text-white bg-dark" style="width: 54rem; font-size: 10px">
        <div class="card-header p-2"><img src="./images/github-cat3.webp" alt="" style="width: 2em">  Dr.T / README.md</div>
        <div class="info-card text-center" ><img src="./images/Dr.T-Pinned-Pic.png"alt="" style="width: 100%"></div>
        <div class="card-body">
          <p class="card-text">
            "I hold a master’s degree in business administration and a doctorate of education with an emphasis in assistive technology and adult education.
            My passion is studying how user and business needs collide into amazing opportunities for designers, developers, and users and how this 
            collaborative relationship can inspire creativity and innovation. Especially for autistic users in the Black community."
          </p>
        <div class="container collaborate-container d-flex justify-content-center" style="height: 1.5em"id="collaborate-container">
            <a href="https://github.com/drteresavasquez" style="color: hotpink; height: 1.5em; font-size: 14px">
            <p>. . : : : Collaborate With Me : : : . </p></a>
        </div>
      </div>
      </div>`;

  PrintToDom('#pinned-repo-container', about);
};

export default PrintAboutMe;
