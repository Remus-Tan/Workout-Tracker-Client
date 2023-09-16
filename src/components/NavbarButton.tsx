type ButtonProps = {
    children: React.ReactNode,
    href: string
}

export default function NavbarButton({ children, href }: ButtonProps) {
    return (
        <a 
            className="py-2 px-6 m-2 whitespace-nowrap text-gray-600 text-lg font-semibold hover:text-indigo-500"
            href={ href }
            >
            { children }
        </a>
    )
} 