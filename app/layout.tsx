import type { Metadata } from "next";
import localFont from 'next/font/local'
import { Kalam } from 'next/font/google'
import "./globals.css";

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
                        
                        // 1. Disable Right Click
                        document.addEventListener('contextmenu', function(e) {
                            e.preventDefault();
                            return false;
                        });

                        // 2. Disable Dragging
                        document.ondragstart = function() { return false; };

                        // 3. Keydown Prevention (Aggressive)
                        document.addEventListener('keydown', function(e) {
                            // F12
                            if (e.key === 'F12' || e.keyCode === 123) {
                                e.preventDefault();
                                e.stopPropagation();
                                return false;
                            }

                            // Ctrl+Shift+I, J, C, U (Windows/Linux)
                            if (e.ctrlKey && e.shiftKey && ['I', 'J', 'C', 'U'].includes(e.key.toUpperCase())) {
                                e.preventDefault();
                                e.stopPropagation();
                                return false;
                            }

                            // Cmd+Option+I, J, C, U (Mac)
                            if (e.metaKey && e.altKey && ['I', 'J', 'C', 'U'].includes(e.key.toUpperCase())) {
                                e.preventDefault();
                                e.stopPropagation();
                                return false;
                            }

                            // Ctrl/Cmd + U (View Source)
                            if ((e.ctrlKey || e.metaKey) && e.key.toUpperCase() === 'U') {
                                e.preventDefault();
                                e.stopPropagation();
                                return false;
                            }

                            // Ctrl/Cmd + S (Save Page)
                            if ((e.ctrlKey || e.metaKey) && e.key.toUpperCase() === 'S') {
                                e.preventDefault();
                                e.stopPropagation();
                                return false;
                            }
                            
                            // Ctrl/Cmd + P (Print)
                            if ((e.ctrlKey || e.metaKey) && e.key.toUpperCase() === 'P') {
                                e.preventDefault();
                                e.stopPropagation();
                                return false;
                            }
                        });


                        // 4. Advanced DevTools Detection & Nuke
                        function nuke() {
                            document.body.innerHTML = '<div style="background:#000;color:#ff0000;height:100vh;display:flex;align-items:center;justify-content:center;font-family:monospace;font-size:3rem;font-weight:bold;text-align:center;">SYSTEM LOCKED<br>SECURITY BREACH DETECTED</div>';
                            document.body.style.overflow = 'hidden';
                            // Intentional infinite loop to freeze browser tab if they persist
                             while(true) { 
                                eval("debugger"); 
                            }
                        }

                        // Debugger Loop (Trap)
                        setInterval(function() {
                            const start = performance.now();
                            debugger; 
                            const end = performance.now();
                            if (end - start > 100) {
                                // Breakpoint hit means DevTools is open/paused
                                nuke();
                            }
                        }, 500);

                        // Screen Resize Detection (Console often resizes window)
                        /*
                        // Commented out as this can affect genuine resizing. 
                        // Re-enable if user wants extreme "No Resize" policy.
                        // window.addEventListener('resize', function() {
                        //    if (window.outerWidth - window.innerWidth > 100 || window.outerHeight - window.innerHeight > 100) {
                        //        nuke();
                        //    }
                        // });
                        */

                        // Check Console Object integrity
                        if (window.console && (console.firebug || console.table && /firebug/i.test(console.table()))) {
                            nuke();
                        }
                        
                    })();
                ` }} />
                {children}
            </body>
        </html >
    );
}
