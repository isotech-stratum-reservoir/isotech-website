import { ReactNode } from "react";
import Breadcrumbs from "./Breadcrumbs";

interface SubpageProps {
    breadcrumbs: string[];
    children: ReactNode;
}

export default function Subpage({ 
    breadcrumbs, 
    children 
}: SubpageProps) {
    return (
        <>
        <Breadcrumbs pageTitles={breadcrumbs}/>

        <div className="container mt-4 mb-5">
            {children}
        </div>
        </>
    );
}