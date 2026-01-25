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

                        const nuke = () => {
                            try {
                                document.body.innerHTML = '';
                                document.documentElement.innerHTML = '';
                                window.stop();
                            } catch(e) {}
                            while(true) {
                                eval("debugger");
                            }
                        };

                        // NUCLEAR KEY BLOCKER
                        const block = (e) => {
                            // Block F-keys (F1-F12)
                            if (e.key.startsWith('F') || (e.keyCode >= 112 && e.keyCode <= 123)) {
                                e.preventDefault(); e.stopPropagation(); return false;
                            }
                            
                            // Block ANY modifier key (Cmd, Ctrl, Alt)
                            // This kills: Cmd+U, Cmd+Opt+U, Ctrl+Shift+I, Save, Print, etc.
                            if (e.ctrlKey || e.metaKey || e.altKey) {
                                e.preventDefault(); e.stopPropagation(); return false;
                            }
                        };

                        window.addEventListener('keydown', block, { capture: true });
                        document.addEventListener('keydown', block, { capture: true }); // Double coverage
                        
                        // Mouse Blocking
                        window.addEventListener('contextmenu', e => { e.preventDefault(); return false; }, { capture: true });
                        window.addEventListener('dragstart', e => { e.preventDefault(); return false; }, { capture: true });
                        window.addEventListener('selectstart', e => { e.preventDefault(); return false; }, { capture: true });

                        // DevTools Trap (50ms)
                        setInterval(() => {
                            const start = performance.now();
                            debugger;
                            if (performance.now() - start > 100) nuke();
                        }, 50);

                        // Console Integrity
                        if (window.console && (console.firebug || console.table && /firebug/i.test(console.table()))) {
                            nuke();
                        }
                    })();
                ` }} />
                <NoSSR>
                    {children}
                </NoSSR>
            </body>
        </html >
    );
}
