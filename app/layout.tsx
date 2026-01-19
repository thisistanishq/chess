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
                <script dangerouslySetInnerHTML={{ __html: `(function(){'use strict';const showSecurityToast=(msg)=>{const toast=document.createElement('div');toast.innerHTML='<div style="display:flex; align-items:center; gap:10px;"><span style="font-size:20px;">🛡️</span> <span>'+msg+'</span></div>';toast.style.position='fixed';toast.style.top='20px';toast.style.left='50%';toast.style.transform='translateX(-50%)';toast.style.backgroundColor='rgba(255, 0, 0, 0.9)';toast.style.color='#fff';toast.style.padding='12px 24px';toast.style.borderRadius='8px';toast.style.fontFamily='monospace';toast.style.zIndex='999999';toast.style.boxShadow='0 5px 15px rgba(0,0,0,0.5)';toast.style.backdropFilter='blur(10px)';toast.style.border='1px solid rgba(255,255,255,0.2)';document.body.appendChild(toast);setTimeout(()=>toast.remove(),3000);};document.addEventListener('contextmenu',function(e){e.preventDefault();showSecurityToast("SECURITY PROTOCOL: CONTEXT MENU DISABLED");return false;});document.addEventListener('keydown',function(e){if(e.key==='F12'||e.keyCode===123){e.preventDefault();showSecurityToast("🚫 DEVTOOLS ACCESS DENIED");return false;}if(e.ctrlKey||e.metaKey){const key=e.key.toLowerCase();if(['u','s','p'].includes(key)){e.preventDefault();showSecurityToast("🚫 ACTION RESTRICTED");return false;}if(e.shiftKey&&['i','j','c'].includes(key)){e.preventDefault();showSecurityToast("🚫 SYSTEM INTEGRITY: DEVTOOLS BLOCKED");return false;}}});setInterval(function(){const t=new Date().getTime();debugger;if(new Date().getTime()-t>100){document.body.innerHTML='<div style="background:#000;color:red;height:100vh;display:flex;align-items:center;justify-content:center;font-family:monospace;font-size:30px;">⚠️ ILLEGAL DEBUGGING DETECTED ⚠️</div>';}},3000);})();` }} />
                {children}
            </body>
        </html >
    );
}
