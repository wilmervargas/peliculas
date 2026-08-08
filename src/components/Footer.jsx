import React from 'react'

const Footer = () => {
    return (
        <footer className="border-t border-gray-800" style={{ background: '#1f2937', padding: '12px 14px' }}>
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col items-center gap-4 text-center">

                    <span className="font-semibold " style={{ fontSize: '18px', color: '#e5e7eb' }}>Arsistema</span>

                    <p className="text-sm max-w-md" style={{ color: '#9ca3af' }}>Creando soluciones digitales para el futuro.</p>

                    <div className="flex items-center gap-4 " style={{ color: '#9ca3af' }}>
                        <a href="#" className="hover:opacity-80 transition-opacity"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 002.048-2.578 9.3 9.3 0 01-2.958 1.13 4.66 4.66 0 00-7.938 4.25 13.23 13.23 0 01-9.602-4.868c-.4.69-.63 1.49-.63 2.342a4.66 4.66 0 001.933 3.742 4.65 4.65 0 01-2.11-.583v.06a4.66 4.66 0 003.74 4.568 4.69 4.69 0 01-2.104.08 4.66 4.66 0 004.352 3.234 9.35 9.35 0 01-5.78 1.992c-.37 0-.74-.022-1.114-.065a13.2 13.2 0 007.143 2.093c8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602a9.47 9.47 0 002.323-2.41z" /></svg></a>
                        <a href="#" className="hover:opacity-80 transition-opacity"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg></a>
                        <a href="#" className="hover:opacity-80 transition-opacity"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg></a>
                    </div>

                    <p className="text-xs" style={{ color: '#9ca3af' }}>© 2026 Arsistema - Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer