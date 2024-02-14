import { useState, useEffect } from 'react';
const dataMobile = {
    isMobile: true,
    closedlogo: '',
    textLogo: 'logotype',
    openedLogo: 'logo-360.png',
    siderWidth: 106,
    siderCollapsedWidth: 0,
};
const dataDesktop = {
    isMobile: false,
    closedlogo: 'fit-logo.png',
    openedLogo: 'cleverfit-logo.png',
    siderWidth: 208,
    siderCollapsedWidth: 64,
};

const mq = (query: string) => window.matchMedia(query).matches;

export const useMediaQuery = (query: string) => {
    const [isMatches, setMatches] = useState(mq(query));

    const update = () => setMatches(mq(query));

    useEffect(() => {
        window.addEventListener('resize', update);
        return () => {
            window.addEventListener('resize', update);
        };
    }, []);
    return isMatches ? dataMobile : dataDesktop;
};
