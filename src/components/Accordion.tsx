import { JSX, ReactNode } from "react";
import { useId } from "react";

interface AccordionProps {
    heading: string | ReactNode;
    headingLevel: 1 | 2 | 3 | 4 | 5 | 6;
    children: ReactNode;
}

export default function Accordion({ 
    heading, 
    headingLevel = 2, 
    children 
}: AccordionProps) {
    const HeadingTag = `h${headingLevel}` as keyof JSX.IntrinsicElements;
    const itemId = useId();

    return (
        <div className="accordion">
            <div className="accordion-item">
                <HeadingTag className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${itemId}`}aria-expanded="false" aria-controls={itemId}>
                        {heading}
                    </button>
                </HeadingTag>

                <div id={itemId} className="accordion-collapse collapse">
                    <div className="accordion-body">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}