'use client';

import { useEffect } from "react";

interface Tab {
    name: string;
    id: string;
    target: string;
}

interface TabsProps {
    tabData: Tab[];
}

export default function Tabs({ 
    tabData 
}: TabsProps) {

    useEffect(() => {
        const activateTabFromHash = () => {
            const hash = window.location.hash;
            if (hash) {
                const tabTrigger = document.querySelector<HTMLElement>(
                    `button[data-bs-target="${hash}"]`
                );
                
                if (tabTrigger) {
                    tabTrigger.click();
                }
            }
        };

        activateTabFromHash();

        window.addEventListener('hashchange', activateTabFromHash);

        return () => {
            window.removeEventListener('hashchange', activateTabFromHash);
        };
    }, []);

    return (
        <ul className="nav nav-tabs flex-column" role="tablist">
            { tabData.map((tab, i) => (
                <li key={tab.id} className="nav-item" role="presentation">
                    <button
                        className={`nav-link ${i === 0 ? 'active' : ''}`}
                        id={tab.id}
                        data-bs-toggle="tab"
                        data-bs-target={`#${tab.target}`}
                        type="button"
                        role="tab"
                        aria-controls={tab.target}
                        aria-selected={i === 0 ? 'true' : 'false'}
                    >
                        {tab.name}
                    </button>
                </li>
            ))}
        </ul>
    );
}