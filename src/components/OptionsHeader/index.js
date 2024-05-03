import './style.css'

const textOptions = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];

function OptionsHeader() {
    return (
        <ul className="App-options">
          { textOptions.map( (text) => (
            <li className="App-options-option">
              <p>{text}</p>
            </li>
          ) ) }
        </ul>
    );
};

export default OptionsHeader;