import { useDispatch } from 'react-redux'
import * as S from './styles'
import useIntersectionObserver from '../../utils/observerSection'
import { useEffect } from 'react'
import { about } from '../../store/reducers/intersection'

const AboutMe = () => {
    const dispatch = useDispatch()
    const [observerRef, isIntersectingIn, updateObserverOptions] =
        useIntersectionObserver({
            root: null,
            rootMargin: '0px',
            threshold: 0.8
        })
    useEffect(() => {
        const handleObserver = (entries: ResizeObserverEntry[]) => {
            const newWidth = entries[0].borderBoxSize[0].inlineSize
            if (newWidth <= 414 && newWidth > 250.1875) {
                updateObserverOptions({
                    root: null,
                    rootMargin: '0px',
                    threshold: 0.5
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
        dispatch(about(isIntersectingIn))
    }, [isIntersectingIn, dispatch])

    return (
        <S.About id="about" className="container" ref={observerRef}>
            <S.TitleAbout>Sobre mim</S.TitleAbout>
            <S.Story>
                <p>
                    Iniciei minha trajetória profissional gerenciando uma
                    pequena lan house, o que despertou minha paixão pela
                    tecnologia. A partir daí, ingressei na Filosofia, uma área
                    que, à primeira vista, pode parecer contraditória à
                    tecnologia, mas que, na verdade, compartilha muitos
                    elementos em comum, especialmente no que diz respeito à
                    lógica e ao esforço intelectual. Desde o ensino médio, venho
                    explorando ambas as áreas, o que me fez desenvolver o gosto
                    por desafios e uma determinação inabalável para nunca
                    desistir.
                </p>
                <br />
                <p>
                    Adoro enfrentar problemas complexos, seja trabalhando em
                    equipe ou individualmente. Também me destaco em ambientes
                    dinâmicos, repletos de tarefas que não permitem acomodação,
                    pois isso me proporciona a oportunidade de desenvolver
                    constantemente minhas habilidades.
                </p>
            </S.Story>
        </S.About>
    )
}
export default AboutMe
