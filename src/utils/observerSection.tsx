import { RefObject, useEffect, useRef, useState } from 'react'

interface ObserverOptions {
    root?: Element | null
    rootMargin?: string
    threshold?: number | number[]
}

const useIntersectionObserver = (
    options: ObserverOptions
): [RefObject<HTMLElement>, boolean, (options: ObserverOptions) => void] => {
    const [isIntersectingIn, setIsIntersectig] = useState(false)
    const observerRef = useRef<HTMLElement>(null)
    const [observerOptions, setObserverOptions] = useState(options)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                setIsIntersectig(entry.isIntersecting)
            })
        }, observerOptions)
        const updatedRef = observerRef.current

        if (updatedRef) {
            observer.observe(updatedRef)
        }

        return () => {
            if (updatedRef) {
                observer.unobserve(updatedRef)
            }
        }
    }, [observerOptions])

    const updateObserverOptions = (options: ObserverOptions) => {
        setObserverOptions(options)
    }

    return [observerRef, isIntersectingIn, updateObserverOptions] as const
}

export default useIntersectionObserver
