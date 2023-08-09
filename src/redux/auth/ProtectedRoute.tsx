'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getAuthToken } from './cookies/cookies';

export default function ProtectedPage({
    children,
}: {
    children: React.ReactNode
}) {
    const isAuthenticated = getAuthToken() ? true : false
    const router = useRouter()

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/home')
        }
    }, [isAuthenticated])

    return (
        <>{children}</>
    );
}