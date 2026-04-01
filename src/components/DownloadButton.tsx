import React from 'react';

interface Props {
  href: string;
  label?: string;
}

export default function DownloadButton({ href, label = 'DOWNLOAD' }: Props) {
  return (
        <a
      href={href}
      download
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '10px 24px',
        backgroundColor: '#1B6B3A',
        color: '#ffffff',
        borderRadius: '6px',
        fontWeight: '600',
        fontSize: '14px',
        letterSpacing: '0.05em',
        textDecoration: 'none',
        marginBottom: '24px',
        boxShadow: '0 2px 8px rgba(27,107,58,0.25)',
        transition: 'background-color 0.2s ease, box-shadow 0.2s ease',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#145230';
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 12px rgba(27,107,58,0.35)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#1B6B3A';
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 2px 8px rgba(27,107,58,0.25)';
      }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
      {label}
    </a>
  );
}