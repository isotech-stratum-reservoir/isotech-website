import { ReactNode } from 'react';

interface SectionProps {
    bgColor?: string;
    className?: string;
    style?: object;
    children: ReactNode;
}

export default function Section({ 
    bgColor = "", 
    className = "", 
    style = {}, 
    children 
}: SectionProps) {
    let bgColorClass = '';
    switch (bgColor) {
        case "steel":
            bgColorClass = "steel-bg";
            break;
        case "green":
            bgColorClass = "green-bg";
            break;
        case "orange":
            bgColorClass = "orange-bg";
            break;
        case "lighter grey":
            bgColorClass = "lighter-grey-bg";
            break;
        case "dark grey":
            bgColorClass = "dark-grey-bg";
            break;
        default:
            bgColorClass = "";
      }
      
    return (
        <div className={`py-2 ${className} ${bgColorClass}`} style={style}>
            <div className="container py-4">
                {children}
            </div>
        </div>
    );
}