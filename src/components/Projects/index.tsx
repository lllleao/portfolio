import Tag from '../Tag'
import Card from '../Cards'
import * as S from './styles'
import cidadeClipse from '../../assets/projects/fotoP.png'
import ludos from '../../assets/projects/ludosPrint.png'
import agenda from '../../assets/projects/agenda-contatos.png'
import restLanding from '../../assets/projects/rest-landing.png'
import restEcommerce from '../../assets/projects/rest-commerce.png'
import todoList from '../../assets/projects/todo-list.png'

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
                site="https://cidadeclipse.vercel.app/"
                github="https://github.com/lllleao/cidadeclipse"
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
                description="A LUDOS é uma produtora de vídeo e animação que trabalha com serviços para empresas e criadores de conteúdo, e também desenvolve projetos audiovisuais independentes que auxiliam artistas a expandirem seus portfólios."
                alt="Ludos Productions"
                site="https://ludos-ecru.vercel.app/"
                github="https://github.com/lllleao/ludos"
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
                description="A plicação se trata de uma agenda de contatos, nela, podemos adicionar, deletar e filtrar contatos. Com um layout responsivo, essa aplicação foi um objeto de estudos, um desafio, que eu consegui concluir com orgulho."
                alt="Agenda de Contatos"
                site="https://contatos-weld.vercel.app/"
                github="https://github.com/lllleao/contatos"
                image={agenda}
                tags={
                    <S.Tags>
                        <Tag backcolor="#43a4be">React</Tag>
                        <Tag backcolor="#101C5F">TypeScript</Tag>
                        <Tag backcolor="#FF957F">Styled-Components</Tag>
                        <Tag backcolor="#7A50BF">React Redux</Tag>
                    </S.Tags>
                }
            />

            <Card
                description="Landing Page de um restaurante fictício. Ela tem um carrossel na entrada, um menu de navegação fixo, seções de eventos, formulário de fale conosco. Landing Page perfeita para apresentar o seu negócio para um novo público."
                alt="Restaurante fictício"
                site="https://rest-fic-6mc4.vercel.app/"
                github="#"
                image={restLanding}
                tags={
                    <S.Tags>
                        <Tag backcolor="#e2641b">HTML</Tag>
                        <Tag backcolor="#384eca">CSS</Tag>
                        <Tag backcolor="#533B78">BootStrap</Tag>
                    </S.Tags>
                }
            />

            <Card
                description="Aplicação de um ecommerce fictício. Ela lista restaurantes, ao escolher um, o usuário é direcionado ao cardápio do mesmo. É possível ver o preço e informações de cada prato e simular um pedido."
                alt="Restaurante fictício Ecommerce"
                site="#"
                github="#"
                image={restEcommerce}
                tags={
                    <S.Tags>
                        <Tag backcolor="#43a4be">React</Tag>
                        <Tag backcolor="#101C5F">TypeScript</Tag>
                        <Tag backcolor="#FF957F">Styled-Components</Tag>
                        <Tag backcolor="#7A50BF">React Redux</Tag>
                        <Tag backcolor="#F54855">React Router</Tag>
                    </S.Tags>
                }
            />

            <Card
                description="Aplicação se trata de uma lista de tarefas com armazenamento local, ou seja, as tarefas registradas são guardadas na memória do navegador. Nela, Podemos configurar a urgência da tarefa, adicionar novas e deletar antigas. Além disso, podemos costomizar com nosso próprio nome."
                alt="Lista de tarefas"
                site="#"
                github="#"
                image={todoList}
                tags={
                    <S.Tags>
                        <Tag backcolor="#e2641b">HTML</Tag>
                        <Tag backcolor="#384eca">CSS</Tag>
                        <Tag backcolor="#0F6FB0">JQuery</Tag>
                    </S.Tags>
                }
            />
        </S.ProjectContainer>
    )
}

export default Projects
