type Props = {
    className?: string,
    children?: any
}

export default function Container({ children, className }: Props) {
    return (
        <div className={`lg:px-32 md:px-10 mx-auto px-5 ${className}`}>
            {children}
        </div>
    )
}