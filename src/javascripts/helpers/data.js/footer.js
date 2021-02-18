import PrintToDom from './PrintToDom';

const PrintFooter = () => {
  const footer = `
      <ul>
        <li><a href="https://docs.github.com/en/github/site-policy/github-terms-of-service">Terms</a></li>
        <li><a href="https://docs.github.com/en/github/site-policy/github-privacy-statement"></a>Privacy</li>
        <li><a href="https://github.com/security">Security</a></li>
        <li><a href="https://twitter.com/githubstatus">Status</a></li>
        <li><a href="https://support.github.com/"></a>Help</li>
        <li><a href="https://github.com/"><img src="./images/github-cat4.webp" alt="github icon" id="github-icon"></a></li>
        <li><a href="https://support.github.com/request">Contact</a></li>
        <li><a href="https://github.com/pricing">Pricing</a></li>
        <li><a href="https://docs.github.com/en/rest/pinned/libraries"></a>API</li>
        <li><a href="https://lab.github.com/">Training</a></li>
        <li><a href="https://pages.github.com/"></a>Blog</li>
        <li><a href="https://github.com/about"></a>About</li>
      </ul>`;

  PrintToDom('#footer-container', footer);
};

export default PrintFooter;
