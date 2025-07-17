import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { projects } from '@store/reducers/intersection'
import Tag from '@components/Tag'
import Card from '@components/Cards'
import * as S from './styles'

import cidadeClipse from '@images/projects/fotoP.png'
import eplay from '@images/projects/eplay.png'
import agenda from '@images/projects/agenda-contatos.png'
import cineLanding from '@images/projects/cine-landing.png'
import restEcommerce from '@images/projects/rest-commerce.png'
import todoList from '@images/projects/todo-list.png'
import amelie from '@images/projects/amelie.jpg'
import fakeRede from '@images/projects/fake_rede.png'
import { useInView } from 'react-intersection-observer'
import TitleSection from '@components/TitleSection'

const Projects = () => {
    const dispatch = useDispatch()
    const { ref: myRef, inView } = useInView({ threshold: 0.2 })

    useEffect(() => {
        dispatch(projects(inView))
    }, [inView, dispatch])
    return (
        <S.ProjectContainer ref={myRef} id="projects" className="container">
            <TitleSection inView={inView}>Projetos Recentes</TitleSection>
            <div className="projects-container">
                <Card
                    description="Cidadecliplse é uma editora cooperativa com inúmeras obras
                    publicadas por eles mesmos, em formatos físicos e digitais. Eles me deram a missão de produzir seu site principal. Nele é
                    possível ver as publicações gratuitas e dar uma espiada nos
                    novos lançamentos "
                    alt="Cidadeclipse"
                    site="https://www.cidadeclipse.com/"
                    github="https://github.com/lllleao/frontend-cd"
                    image={cidadeClipse}
                    tags={
                        <S.Tags>
                            <Tag>React</Tag>
                            <Tag>TypeScript</Tag>
                            <Tag>Styled-Components</Tag>
                            <Tag>NestJs</Tag>
                            <Tag>MySql</Tag>
                        </S.Tags>
                    }
                />
                <Card
                    description="Um projeto de estudos, trata-se de uma página que simula um e-commerce. Existe as abas e categorias que listam os jogos, ao clicar o usuáriuo é direcionado a página do jogo, a qual exibe fotos e vídeos do jogo. Além disso, existe a parte do checkout."
                    alt="EPLAY"
                    site="https://eplay-three-virid.vercel.app/"
                    github="https://github.com/lllleao/eplay"
                    image={eplay}
                    tags={
                        <S.Tags>
                            <Tag>React</Tag>
                            <Tag>TypeScript</Tag>
                            <Tag>Styled-Components</Tag>
                            <Tag>React Redux</Tag>
                            <Tag>React Router</Tag>
                            <Tag>Api</Tag>
                        </S.Tags>
                    }
                />
                <Card
                    description="Este é o frontend e o backend de um clone simplificado do Twitter, desenvolvido com React 19, Vite, TypeScript e DRF. Ele consome uma API REST desenvolvida com Django e oferece uma interface amigável para os usuários interagirem com o sistema."
                    alt="Rede Social Fake"
                    site="https://frontend-ebac-one.vercel.app/"
                    github="https://github.com/lllleao/frontend_ebac"
                    image={fakeRede}
                    tags={
                        <S.Tags>
                            <Tag>React</Tag>
                            <Tag>TypeScript</Tag>
                            <Tag>Styled-Components</Tag>
                            <Tag>DRF</Tag>
                            <Tag>SQLlite</Tag>
                        </S.Tags>
                    }
                />
                <Card
                    description="A aplicação se trata de uma agenda de contatos, nela, podemos adicionar, deletar e filtrar contatos. Com um layout responsivo, essa aplicação foi um objeto de estudos, um desafio, que eu consegui concluir com orgulho."
                    alt="Agenda de Contatos"
                    site="https://contatos-weld.vercel.app/"
                    github="https://github.com/lllleao/contatos"
                    image={agenda}
                    tags={
                        <S.Tags>
                            <Tag>React</Tag>
                            <Tag>TypeScript</Tag>
                            <Tag>Styled-Components</Tag>
                            <Tag>React Redux</Tag>
                        </S.Tags>
                    }
                />

                <Card
                    description="Landing Page para um site sobre cinema. Ela tem um carrossel na entrada, um menu de navegação fixo, seções de filmes, formulário de fale conosco. Landing Page perfeita para apresentar um produto, um projeto, entre outras coisas, para um novo público."
                    alt="Cinefilia"
                    site="https://site-cinefilia.vercel.app/"
                    github="#"
                    image={cineLanding}
                    tags={
                        <S.Tags>
                            <Tag>HTML</Tag>
                            <Tag>CSS</Tag>
                            <Tag>BootStrap</Tag>
                        </S.Tags>
                    }
                />

                <Card
                    description="Aplicação de um ecommerce fictício. Ela lista restaurantes, ao escolher um, o usuário é direcionado ao cardápio do mesmo. É possível ver o preço e informações de cada prato e simular um pedido."
                    alt="Restaurante fictício Ecommerce"
                    site="https://efood-umber-kappa.vercel.app/"
                    github="https://github.com/lllleao/efood"
                    image={restEcommerce}
                    tags={
                        <S.Tags>
                            <Tag>React</Tag>
                            <Tag>TypeScript</Tag>
                            <Tag>Styled-Components</Tag>
                            <Tag>React Redux</Tag>
                            <Tag>React Router</Tag>
                            <Tag>Api</Tag>
                        </S.Tags>
                    }
                />

                <Card
                    description="Aplicação se trata de uma lista de tarefas com armazenamento local, ou seja, as tarefas registradas são guardadas na memória do navegador. Nela, Podemos configurar a urgência da tarefa, adicionar novas e deletar antigas. Além disso, podemos customizar com nosso próprio nome."
                    alt="Lista de tarefas"
                    site="https://lista-tarefas-ebac.vercel.app/"
                    github="https://github.com/lllleao/lista-tarefas-ebac"
                    image={todoList}
                    tags={
                        <S.Tags>
                            <Tag>HTML</Tag>
                            <Tag>CSS</Tag>
                            <Tag>JQuery</Tag>
                        </S.Tags>
                    }
                />

                <Card
                    description="O projeto trata-se de uma landing page sobre um dos meus filmes favoritos: O Fabuloso Destino de Amélie Poulain. Foi feito como um projeto pessoal para treinar os conhecimentos que adquiri."
                    alt="Amélie Poulain"
                    site="https://landing-page-amelie.vercel.app/"
                    github="https://github.com/lllleao/landing_page_amelie"
                    image={amelie}
                    tags={
                        <S.Tags>
                            <Tag>HTML</Tag>
                            <Tag>CSS</Tag>
                            <Tag>Gulp</Tag>
                            <Tag>Sass</Tag>
                            <Tag>JavaScript</Tag>
                        </S.Tags>
                    }
                />
            </div>
        </S.ProjectContainer>
    )
}

export default Projects
