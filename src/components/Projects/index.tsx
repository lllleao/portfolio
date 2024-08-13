import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { projects } from '@store/reducers/intersection'
import useIntersectionObserver from '@interSection/observerSection'
import Tag from '@components/Tag'
import Card from '@components/Cards'
import * as S from './styles'

import cidadeClipse from '@images/projects/fotoP.png'
import ludos from '@images/projects/ludosPrint.png'
import agenda from '@images/projects/agenda-contatos.png'
import restLanding from '@images/projects/rest-landing.png'
import restEcommerce from '@images/projects/rest-commerce.png'
import todoList from '@images/projects/todo-list.png'

const Projects = () => {
    const dispatch = useDispatch()
    const [observerRef, isIntersectingIn, updateObserverOptions] =
        useIntersectionObserver({
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        })
    useEffect(() => {
        const handleObserver = (entries: ResizeObserverEntry[]) => {
            const newWidth = entries[0].borderBoxSize[0].inlineSize

            if (newWidth <= 690.296875) {
                updateObserverOptions({
                    root: null,
                    rootMargin: '0px',
                    threshold: 0.3
                })
            }
        }
        const resizerObs = new ResizeObserver(handleObserver)
        const currentRef = observerRef.current
        if (currentRef) {
            resizerObs.observe(currentRef)
        }
        return () => {
            if (currentRef) {
                resizerObs.unobserve(currentRef)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [observerRef])

    useEffect(() => {
        dispatch(projects(isIntersectingIn))
    }, [isIntersectingIn, dispatch])
    return (
        <S.ProjectContainer
            ref={observerRef}
            id="projects"
            className="container"
        >
            <Card
                description="Cidadecliplse é uma editora cooperativa com inúmeras obras
                    publicadas, em formatos físicos e digitais. Eles me deram a
                    a missão de produzir seu site principal. Nele é
                    possível ver as publicações gratuitas e dar uma espiada nos
                    novos lançamentos "
                alt="Cidadeclipse"
                site="https://cidadeclipse.vercel.app/"
                github="https://github.com/lllleao/cidadeclipse"
                image={cidadeClipse}
                tags={
                    <S.Tags>
                        <Tag>Gulp</Tag>
                        <Tag>JS</Tag>
                        <Tag>SASS</Tag>
                        <Tag>Express</Tag>
                    </S.Tags>
                }
            />
            <Card
                description="A LUDOS é uma produtora de vídeo e animação que trabalha com serviços para empresas e criadores de conteúdo, além de desenvolver projetos audiovisuais independentes que auxiliam artistas a expandirem seus portfólios."
                alt="Ludos Productions"
                site="https://ludos-ecru.vercel.app/"
                github="https://github.com/lllleao/ludos"
                image={ludos}
                tags={
                    <S.Tags>
                        <Tag>React</Tag>
                        <Tag>TypeScript</Tag>
                        <Tag>Styled-Components</Tag>
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
                description="Landing Page de um restaurante fictício. Ela tem um carrossel na entrada, um menu de navegação fixo, seções de eventos, formulário de fale conosco. Landing Page perfeita para apresentar o seu negócio para um novo público."
                alt="Restaurante fictício"
                site="https://rest-fic-6mc4.vercel.app/"
                github="#"
                image={restLanding}
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
                site="#"
                github="#"
                image={restEcommerce}
                tags={
                    <S.Tags>
                        <Tag>React</Tag>
                        <Tag>TypeScript</Tag>
                        <Tag>Styled-Components</Tag>
                        <Tag>React Redux</Tag>
                        <Tag>React Router</Tag>
                    </S.Tags>
                }
            />

            <Card
                description="Aplicação se trata de uma lista de tarefas com armazenamento local, ou seja, as tarefas registradas são guardadas na memória do navegador. Nela, Podemos configurar a urgência da tarefa, adicionar novas e deletar antigas. Além disso, podemos customizar com nosso próprio nome."
                alt="Lista de tarefas"
                site="#"
                github="#"
                image={todoList}
                tags={
                    <S.Tags>
                        <Tag>HTML</Tag>
                        <Tag>CSS</Tag>
                        <Tag>JQuery</Tag>
                    </S.Tags>
                }
            />
        </S.ProjectContainer>
    )
}

export default Projects
