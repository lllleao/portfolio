import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { useEffect } from 'react'
import { about } from '@store/reducers/intersection'
import { useInView } from 'react-intersection-observer'
import TitleSection from '@components/TitleSection'
import { RootReducer } from '@store/index'

const AboutMe = () => {
    const dispatch = useDispatch()
    const { ref: myRef, inView } = useInView({ threshold: 0.2 })
    const {
        about: aboutView,
        home,
        projects
    } = useSelector((state: RootReducer) => state.intersection)
    const { heightHeader } = useSelector(
        (state: RootReducer) => state.intersection
    )

    useEffect(() => {
        dispatch(about(inView))
    }, [inView, dispatch, aboutView, home, projects])

    return (
        <S.About $heightHeader={heightHeader} id="about" ref={myRef}>
            <div className="container">
                <TitleSection>Sobre mim</TitleSection>
                <S.Story>
                    <p className={`paragraph ${inView && 'is-active-left'}`}>
                        Meu nome é Lucas Leão. Sou formado em Filosofia pela
                        Universidade Federal do Ceará (UFC) e concluí uma
                        formação técnica pela EBAC (Escola Britânica de Artes
                        Criativas e Tecnologia) em Desenvolvedor Full Stack
                        Python. Ao longo da minha trajetória, desenvolvi
                        projetos acadêmicos e comerciais que exigiram
                        criatividade e habilidades técnicas. Entre eles estão o
                        site de uma editora cooperativa, uma agenda de contatos,
                        landing pages e o frontend de um e-commerce. Esses
                        projetos me permitiram aprimorar minhas capacidades de
                        resolução de problemas e de aplicação prática de
                        tecnologias relacionadas ao desenvolvimento Full Stack.
                    </p>
                    <br />
                    <p className={`paragraph ${inView && 'is-active-right'}`}>
                        Adoro enfrentar problemas complexos, seja trabalhando em
                        equipe ou individualmente. Também me destaco em
                        ambientes dinâmicos, repletos de tarefas que não
                        permitem acomodação, pois isso me proporciona a
                        oportunidade de desenvolver constantemente minhas
                        habilidades.
                    </p>
                </S.Story>
            </div>
        </S.About>
    )
}
export default AboutMe
