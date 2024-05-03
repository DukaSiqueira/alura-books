import profile from '../../images/perfil.svg';
import bag from '../../images/sacola.svg';
import styled from 'styled-components';

const ListIcon = styled.ul`
  display: flex;
`

const Icon = styled.li`
  margin-right: 40px;
  width: 25px;
  align-items: center;
`

const icons = [profile, bag];

function IconsHeader() {
    return (
        <ListIcon>
        { icons.map( (icon) => (
          <Icon>
            <img src={icon} alt="icon"></img>
          </Icon>
        ) ) }
      </ListIcon>
    );
}

export default IconsHeader;