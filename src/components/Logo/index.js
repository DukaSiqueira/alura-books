import logo from '../../images/logo.svg';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  font-size: 2rem;
`
const Image = styled.img`
  margin-right: 0.82rem;
`

function Logo() {
    return (
      <LogoContainer>
        <Image 
            src={logo} 
            alt="logo"/>
        <p>
          <strong>Alura</strong>Books
        </p>
      </LogoContainer>
    );
}

export default Logo;