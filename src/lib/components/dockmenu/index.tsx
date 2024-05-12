
interface DockMenuProps {
    children?: React.ReactNode;
}

export default function DockMenu({ children }: DockMenuProps) {
    return <menu>{ children }</menu>
}
