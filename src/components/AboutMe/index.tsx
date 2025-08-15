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
                        Dica rápida: <strong>uma presença online forte é essencial para
                        destacar sua marca.</strong> <br />Meu nome é Lucas Leão e sou
                        Desenvolvedor Full Stack formado pela EBAC (Escola
                        Britânica de Artes Criativas e Tecnologia). Ao longo da
                        minha trajetória, já desenvolvi projetos que uniram
                        criatividade e conhecimento técnico, entregando soluções
                        eficientes para diferentes tipos de negócios.
                    </p>
                    <br />
                    <p className={`paragraph ${inView && 'is-active-right'}`}>
                        Tenho experiência em desenvolvimento de sites, landing
                        pages e e-commerces, criando plataformas funcionais e
                        intuitivas que ajudam empresas a crescer e se conectar
                        com seus clientes. Já colaborei com clientes que vão
                        desde editoras cooperativas até startups de design,
                        sempre focando em qualidade, performance e usabilidade.
                    </p>
                </S.Story>
            </div>
        </S.About>
    )
}
export default AboutMe
