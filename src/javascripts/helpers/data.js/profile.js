import PrintToDom from './PrintToDom';

const PrintProfile = () => {
  const developerForm = `
<div class="container text-white bg-dark profile-container" id="profile-container">
<img src="./images/Dr. T..jpg" id="profile-pic" alt="Photo of Dr. T.">
  <h>Dr. T.</h>
  <h7 id="handle">dope-2021</h7>
  <p id="profile-bio">Hello, My name is Dr. T. I'm the best teacher at Nashville Software School.<p>
    <div class="container" id="profile-buttons">
      <a href="https://github.com/drteresavasquez?tab=followers" class="btn btn-secondary btn-sm" id="follow-btn">Follow</a>
      <a href="#" class="btn btn-secondary btn-sm" id="sponsor-btn">Sponsor</a>
      <a href="#" class="btn btn-secondary btn-sm" id="more-btn">...</a>
      <br>
    </div>

    <div class="container" id="follow-links">
      <a href="" style="color: white"><img src="./images/followers-1.webp" id="pinned-icons" style="background-color: lightgrey; border-radius: 50%">followers</a>
      <a href="" style="color: white"><img src="./images/star-2.png" id="pinned-icons" style="background-color: lightgrey; border-radius: 50%">329</a>
    </div>

    <hr>
    <a href="#" style="color: white"><img src="./images/locations-3.webp" id="pinned-icons" style="background-color: lightgrey; border-radius: 50%"> Tennessee, USA</a>
    <a href="dr.teresavasquez@gmail.com" style="color: white"><img src="./images/email-2.webp" style="background-color: lightgrey; border-radius: 50%" id="pinned-icons"> dr.teresavasquez@gmail.com</a>
    <a href="https://www.drteresavasquez.com/" style="color: white"><img src="./images/link-2.webp" style="background-color: lightgrey; border-radius: 50%" id="pinned-icons"> drteresavasquez.com/</a>
    <a href="https://twitter.com/drteresavasquez" style="color: white"><img src="./images/twitter.webp" style="background-color: lightgrey; border-radius: 50%" id="pinned-icons"> twitter.com/drteresavasquez</a>

    <hr>
    <h7>Highlights</h7>
    <a href="#" style="color: white"><img src="images/Arctic Code Vault.webp" id="pinned-icons" style="background-color: lightgrey; border-radius: 50%" >Arctic Code Vault Contributor</a>
    <a href="#" style="color: white"><img src="images/Star (Filled in).webp" id="pinned-icons" style="background-color: lightgrey; border-radius: 50%" >Github Star</a>
    <a href="#" style="color: white"><img src="images/Star.webp" id="pinned-icons" style="background-color: lightgrey; border-radius: 50%" >Pro</a>

    <hr>
    <h7>Organizations</h7>
    <div class="container" id="organization-profiles">
      <a href="https://github.com/nashville-software-school"><img src="./images/NSS-Logo.png" id="organization-icon-images" alt="NSS-Logo"></a>
      <a href="https://github.com/Urban-Green-Lab"><img src="./images/urban-green-icon.png" id="organization-icon-images" alt="urban-green-icon"></a>
      <a href="https://github.com/Autism-Possisble"><img src="./images/autism-possible.png" id="organization-icon-images" alt="autism-possible"></a>
      <a href="https://github.com/nss-evening-cohort-14"><img src="./images/cohort14.jpeg" id="organization-icon-images" alt="autism-possible"></a>
    </div>

    <hr>
    <h7>Sponsors</h7>
    <div class="container" id="sponsor-profiles">
      <div class="sponsor-top-row">
          <a href="https://github.com/lindseysatterfield"><img src="./images/lindsey.jpeg" id="sponsor-icon-images" alt="Lindsey Photo"></a>
          <a href="https://github.com/JuanDavila1101"></a><img src="./images/juan.jpeg" id="sponsor-icon-images" alt="Juan Photo">
          <a href="https://github.com/thedigitalmenagerie"><img src="./images/honey-rae.jpeg" id="sponsor-icon-images" alt="Honey-Rae Photo"></a>
          <a href="https://github.com/danicrosby"><img src="./images/dani.jpeg" id="sponsor-icon-images" alt="Dani Photo"></a>
      </div>

        <div class="sponsor-bottom-row">
            <a href="https://github.com/TrinityChristiana"><img src="./images/trinity.jpeg" id="sponsor-icon-images" alt="Trinity Photo"></a>
            <a href="https://github.com/ajawashington"><img src="./images/Aja.jpeg" id="sponsor-icon-images" alt="Aja Photo"></a>
            <a href="https://wonder-woman.fandom.com/wiki/Nubia"><img src="./images/nubia-wonderwoman.jpg" id="sponsor-icon-images" alt="placeholder image"></a>
            <a href="https://github.com/stevebrownlee"><img src="./images/steve.png" id="sponsor-icon-images" alt="Steve Photo"></a>
        </div>
    </div>
</div>`;

  PrintToDom('#left-container', developerForm);
};

export default PrintProfile;
