import './style.css'
import profile from '../../images/perfil.svg';
import bag from '../../images/sacola.svg';

const icons = [profile, bag];

function IconsHeader() {
    return (
        <ul className="App-icons">
        { icons.map( (icon) => (
          <li className="App-icons-icon">
            <img src={icon} alt="icon"></img>
          </li>
        ) ) }
      </ul>
    );
}

export default IconsHeader;