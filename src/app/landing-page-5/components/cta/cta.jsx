const CTA = ({
    href = "javascript:$zopim.livechat.window.show();",
    text,
    textSize = "text-base",
    textWeight = "font-bold",
    contentAlignment = "justify-center",
    bg = "bg-primary",
    color = "text-white",
    width = "w-max",
    height = "h-[45px]",
    leading = "leading-[45px]",
    padding,
    border,
    rounded,
    hover,
    margin,
    flexDirection,

}) => {
    return (
        <div dangerouslySetInnerHTML={{
            __html: `<a href=${href} class="relative block font-sans cursor-pointer ${contentAlignment} ${bg} ${color} ${width} ${height} text-center ${padding} ${textSize} ${border} ${margin} ${textWeight} duration-500 ${rounded} ${hover}">
            <span class="${leading}">${text}</span>
            </a>`
        }}>

        </div>
    )
}
export default CTA;