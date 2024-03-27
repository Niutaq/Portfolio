import mainLogo from './assets/logo_design.png';
import githubLogo from './assets/github_logo.png';
import artstationLogo from './assets/artstation_logo.png';

function Card() {
  return (
    <div className="card-content">
      <img className="nq-image" src={mainLogo} alt="NQ image" />
      <h2 className="card-title">Hi, I'm Maciej</h2>
      <div className="card-links">
        <a href="https://github.com/Niutaq" target="_blank" rel="noreferrer">
          <img className="github-image" src={githubLogo} alt="Github logo" />
        </a>
      </div>
      <div className="card-links">
        <a href="https://www.artstation.com/niutaq" target="_blank" rel="noreferrer">
          <img className="artstation-image" src={artstationLogo} alt="Artstation logo" />
        </a>
      </div>
     
    </div>
  );
}

export default Card;
