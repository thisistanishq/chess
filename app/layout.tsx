import type { Metadata } from "next";
import localFont from 'next/font/local'
import { Kalam } from 'next/font/google'
import "./globals.css";
import NoSSR from "@/components/NoSSR";

const Sohne = localFont({
    src: [
        {
            path: './fonts/soehne-buch.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: './fonts/soehne-kraftig.woff2',
            weight: '500',
            style: 'normal'
        }
    ],
    variable: '--font-sohne',
})

const Plantijn = localFont({
    src: [{
        path: './fonts/martina-plantijn-italic.woff2',
        weight: '400',
        style: 'italic'
    }],
    variable: '--font-plantijn',
})

const kalam = Kalam({
    subsets: ['latin'],
    weight: ['300', '400', '700'],
    variable: '--font-handwritten',
})

export const metadata: Metadata = {
    title: "CHESS",
    description: "Standalone Chess Game",
    icons: {
        icon: '/chess_favicon.png',
    },
}

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" className="dark">
            <body className={`${Sohne.variable} ${Plantijn.variable} ${kalam.variable} bg-background`}>
                <script dangerouslySetInnerHTML={{
                    __html: `
                    (function() {
                        'use strict';
                        
                        // "Honeypot" - obfuscated execution
                        const _0x1a2b = function() {
                            const nuke = () => {
                                try {
                                    document.body.innerHTML = 'ACCESS DENIED';
                                    document.documentElement.innerHTML = 'ACCESS DENIED';
                                    window.stop();
                                } catch(e) {}
                                while(true) { eval("debugger"); }
                            };

                            // BLOQUEO TOTAL DE TECLAS (Keydown, Keyup, Keypress)
                            const block = (e) => {
                                // Allow normal typing? No, user said "disable ALL shortcuts". 
                                // But game needs keys? Chess uses drag mostly.
                                // We strictly block modifiers.
                                if (e.ctrlKey || e.metaKey || e.altKey || e.key.startsWith('F')) {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    e.stopImmediatePropagation();
                                    return false;
                                }
                            };

                            ['keydown', 'keyup', 'keypress'].forEach(type => {
                                window.addEventListener(type, block, { capture: true });
                                document.addEventListener(type, block, { capture: true });
                            });

                            // MOUSE
                            window.addEventListener('contextmenu', e => { e.preventDefault(); e.stopPropagation(); return false; }, { capture: true });
                            
                            // RESIZE DETECTOR (DevTools Docking)
                            let w = window.outerWidth;
                            let h = window.outerHeight;
                            window.addEventListener('resize', () => {
                                const diffW = window.outerWidth - w;
                                const diffH = window.outerHeight - h;
                                if (Math.abs(diffW) > 100 || Math.abs(diffH) > 100) {
                                    // Likely DevTools opened
                                    nuke();
                                }
                            });

                            // DEBUGGER LOOP
                            setInterval(() => {
                                const t0 = performance.now();
                                debugger;
                                if (performance.now() - t0 > 100) nuke();
                            }, 50);
                            
                            // CONSOLE CHECK
                            if(window.console && (console.firebug || console.table && /firebug/i.test(console.table()))) nuke();

                            // BLUR HIDING (Prevents external screen capture / losing focus to devtools)
                            window.addEventListener('blur', () => {
                                document.documentElement.style.filter = 'blur(20px)';
                                document.documentElement.style.opacity = '0.1';
                            });
                            window.addEventListener('focus', () => {
                                document.documentElement.style.filter = 'none';
                                document.documentElement.style.opacity = '1';
                            });
                        };
                        
                        _0x1a2b();
                    })();
                ` }} />
                <NoSSR>
                    {children}
                </NoSSR>
            </body>
        </html >
    );
}
