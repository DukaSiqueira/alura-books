import styled from 'styled-components';

const ListOptions = styled.ul`
  display: flex;
`

const Option = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  pad: 0 5px;
  cursor: pointer;
  min-width: 120px;
`

const textOptions = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];

function OptionsHeader() {
    return (
        <ListOptions>
          { textOptions.map( (text) => (
            <Option>
              <p>{text}</p>
            </Option>
          ) ) }
        </ListOptions>
    );
};

export default OptionsHeader;