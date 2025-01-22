'use client';

import NextTopLoader from 'nextjs-toploader';

export default function NextProgress() {
    return <NextTopLoader showSpinner={false} color='#60a5fa' easing='ease' />;
}