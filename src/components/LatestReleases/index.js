import { books } from './dataLatestReleases';
import styled from 'styled-components';
import { Title } from '../Title';
import CardRecommendation from '../CardRecommendation';
import Livro from '../../images/livro.png';

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
            <Title 
                color="#EB9B00" 
                textSize="36px"
            >Últimos Lançamentos</Title>
            <NewBooksContainer>
                { books.map( book => (
                    <img src={book.src} alt='Book'/>
                ))}
            </NewBooksContainer>
            <CardRecommendation 
                title="Talvez você se enteresse por..."
                subTitle="Mestre dos Magos"
                description="Sem descrição né"
                img={Livro}
                alt="Logo"
            />
        </LatestReleasesContainer>
    );
}

export default LatestReleases;