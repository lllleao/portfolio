import Tag from '../Tag'
import Card from '../Cards'
import * as S from './styles'
import cidadeClipse from '../../assets/projects/fotoP.png'
import ludos from '../../assets/projects/ludosPrint.png'
import agenda from '../../assets/projects/agenda-contatos.png'

const Projects = () => {
    return (
        <S.ProjectContainer id="projects" className="container">
            <Card
                description="Cidadecliplse é uma editora cooperativa com inúmeras obras
                    publicadas, em formatos físicos e digitais. Eles me deram a
                    honra e a missão de produzir seu site principal. Nele é
                    possível ver as publicações gratuitas e dar uma espiada nos
                    novos lançamentos "
                alt="Cidadeclipse"
                site="#"
                github="#"
                image={cidadeClipse}
                tags={
                    <S.Tags>
                        <Tag backcolor="#d34446">Gulp</Tag>
                        <Tag color="#000" backcolor="#EFD81D">
                            JS
                        </Tag>
                        <Tag backcolor="#CE6B9C">SASS</Tag>
                        <Tag backcolor="#93C745">Express</Tag>
                    </S.Tags>
                }
            />
            <Card
                description="A Ludos Productions é uma produtora que auxilia criadores de conteúdo e empreendedores a se colocarem no mercado digital, através de marketing digital, trafego pago, edição de vídeo, animação, entre outros serviços"
                alt="Ludos Productions"
                site="#"
                github="#"
                image={ludos}
                tags={
                    <S.Tags>
                        <Tag backcolor="#43a4be">React</Tag>
                        <Tag backcolor="#101C5F">TypeScript</Tag>
                        <Tag backcolor="#FF957F">Styled-Components</Tag>
                    </S.Tags>
                }
            />
            <Card
                description="A plicação se trata de uma agenda de contatos, nela, podemos adicionar, deletar e filtrar contatos."
                alt="Agenda de Contatos"
                site="#"
                github="#"
                image={agenda}
                tags={
                    <S.Tags>
                        <Tag backcolor="#43a4be">React</Tag>
                        <Tag backcolor="#101C5F">TypeScript</Tag>
                        <Tag backcolor="#FF957F">Styled-Components</Tag>
                    </S.Tags>
                }
            />

            <Card
                description="Cidadecliplse é uma editora cooperativa com inúmeras obras
                    publicadas, em formatos físicos e digitais. Eles me deram a
                    honra e a missão de produzir seu site principal. Nele é
                    possível ver as publicações gratuitas e dar uma espiada nos
                    novos lançamentos "
                alt="Cidadeclipse"
                site="#"
                github="#"
                image={agenda}
                tags={
                    <S.Tags>
                        <Tag backcolor="#43a4be">React</Tag>
                        <Tag backcolor="#101C5F">TypeScript</Tag>
                        <Tag backcolor="#FF957F">Styled-Components</Tag>
                    </S.Tags>
                }
            />
        </S.ProjectContainer>
    )
}

export default Projects
