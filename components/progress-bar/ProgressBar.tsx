'use client';

import NextTopLoader from 'nextjs-toploader';

export default function NextProgress() {
    return <NextTopLoader showSpinner={false} shadow={"#000"}  color='#dfdfdf' easing='ease' />;
}