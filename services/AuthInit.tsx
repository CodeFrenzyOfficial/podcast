'use client';

import { useFirebaseAuth } from '@/hooks/useFirebaseAuth';
import useAuthStore from '@/store/store';
import { useEffect } from 'react';

export default function AuthInit() {
    const { currentUser } = useAuthStore();

    useFirebaseAuth();

    useEffect(() => {
        currentUser();
    }, []);

    return null;
}
