import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const userAgent = request.headers.get('user-agent') || '';

    // 1. Bot & Scraper Blocking
    const blockedAgents = [
        'curl',
        'wget',
        'python-requests',
        'libwww-perl',
        'scrapy',
        'bot',
        'crawler',
        'spider',
        'puppeteer',
        'playwright'
    ];

    const isBlocked = blockedAgents.some(agent =>
        userAgent.toLowerCase().includes(agent.toLowerCase())
    );

    if (isBlocked) {
        return new NextResponse(
            JSON.stringify({ error: 'Access Denied', message: 'Automated access is strictly prohibited.' }),
            { status: 403, headers: { 'content-type': 'application/json' } }
        );
    }

    // 2. Security Headers
    const response = NextResponse.next();
    const headers = response.headers;

    headers.set('X-Frame-Options', 'DENY');
    headers.set('X-Content-Type-Options', 'nosniff');
    headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
    headers.set('X-DNS-Prefetch-Control', 'off');

    // Strict Transport Security (HSTS)
    headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');

    return response;
}

export const config = {
    matcher: '/:path*',
};
