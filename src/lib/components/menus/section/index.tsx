
interface SectionProps {
    title?: string;
    children?: React.ReactNode;
}

export default function Section({ title, children }: SectionProps) {
    return (
        <section>
            <h3>{title}</h3>
            <div>
                {children}
            </div>
        </section>
    )
}
