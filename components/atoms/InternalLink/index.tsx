import Link from 'next/link'

type Props = {
    href: string,
    className?: string,
    children: any
}

export default function InternalLink({ href, className, children }: Props) {
    return (
        <Link href={href}>
            <a className={className}>
                {children}
            </a>
        </Link>
    )
}