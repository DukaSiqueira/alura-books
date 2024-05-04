import { books } from './dataLatestReleases';
import styled from 'styled-components';
import { Title } from '../Title';


const LatestReleasesContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom 20px;
    display: flex;
    flex-direction: column;
`

const NewBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function LatestReleases() {
    return (
        <LatestReleasesContainer>
            <Title color="#000">Últimos Lançamentos</Title>
            <NewBooksContainer>
                { books.map( book => (
                    <img src={book.src} alt='Book'/>
                ))}
            </NewBooksContainer>
        </LatestReleasesContainer>
    );
}

export default LatestReleases;