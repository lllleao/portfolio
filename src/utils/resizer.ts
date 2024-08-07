const resizer = (element: HTMLElement) => {
    const elementResizer = new ResizeObserver((e) => {
        // const width = element.clientWidth
        const widthCurrent = e[0].borderBoxSize[0].inlineSize
        console.log()
    })

    elementResizer.observe(element)
}

export default resizer
