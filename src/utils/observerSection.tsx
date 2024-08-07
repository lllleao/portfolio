import { RefObject, useEffect, useRef, useState } from 'react'

interface ObserverOptions {
    root?: Element | null
    rootMargin?: string
    threshold?: number | number[]
}

const useIntersectionObserver = (
    options: ObserverOptions
): [RefObject<HTMLElement>, boolean] => {
    const [isIntersectingIn, setIsIntersectig] = useState(false)
    const observerRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                setIsIntersectig(entry.isIntersecting)
            })
        }, options)
        const updatedRef = observerRef.current

        if (updatedRef) {
            observer.observe(updatedRef)
        }

        return () => {
            if (updatedRef) {
                observer.unobserve(updatedRef)
            }
        }
    }, [options])

    return [observerRef, isIntersectingIn] as const
}

export default useIntersectionObserver
