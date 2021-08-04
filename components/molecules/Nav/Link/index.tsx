import InternalLink from "../../../atoms/InternalLink";

type Props = {
    href: string,
    className?: string,
    active?: boolean,
    children: any
}

export default function NavLink({ href, className, active, children }: Props) {
    return (
        <InternalLink className={`${className} nav-link text-gray-700 pb-0 ${active ? 'active font-bold' : 'font-medium'}`} href={href}>
            {children}
        </InternalLink>
    )
}