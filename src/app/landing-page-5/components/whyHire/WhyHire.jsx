const WhyHire = ({
    bg = "",
    span,
    title,
    desc,
    spanColor = "",
    children,
}) => {
    return (
        <div className={`md:py-[50px] py-[40px] ${bg}`}>
            <div className="container">
                <div className="font-sans text-center">
                    {span && <span className={`lg:text-xl md:text-lg text-base leading-tight font-semibold tracking-widest ${spanColor}`}>{span}</span>}
                    {title && <h2 className="xl:text-[45px] lg:text-[40px] md:text-[30px] text-[22px] leading-tight font-bold my-3" dangerouslySetInnerHTML={{ __html: title }} />}
                    {desc && <p className="md:text-base text-sm xl:w-[90%] mx-auto">{desc}</p>}
                    {children}
                </div>
            </div>
        </div>
    )
}

export default WhyHire;