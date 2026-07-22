import React from 'react';


export default function Footer() {

  return (
      <footer
      id="contact"
      style={{
        position: 'relative',
        background: '#0a0a0a',
        overflow: 'hidden',
        borderTop: '1px solid #2563eb'
      }}
    >
      <style>{`
        @media (max-width: 640px) {
          .footer-cta, .footer-cta-btn-row {
            text-align: left !important;
            justify-content: flex-start !important;
          }
          .footer-cta {
            margin-top: 32px !important;
          }
        }
      `}</style>
      <div style={{ position:'relative', zIndex:2 }}>
        <div style={{ maxWidth:1440, margin:'0 auto', padding:'24px clamp(20px, 4vw, 78px) 140px' }}>
          <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'space-between', gap:'clamp(16px,2vw,32px)', alignItems:'start' }}>
            {/* Brand */}
            <div className="reveal" style={{ flex:'0 0 auto' }}>
              <h2 style={{ fontSize:'clamp(22px,3vw,48px)', fontWeight:500, color:'#ffffff', lineHeight:'32px', letterSpacing:'-0.005em', marginBottom:15 }}>Next Quarter</h2>
              <p style={{ fontSize:15,margintop:'15px', color:'#fff', lineHeight:'18px', marginBottom:16 }}>Shopify CRO Agency</p>

              {/* Social icons */}
              <div style={{ display:'flex', alignItems:'center', gap:12 }}>
                <a
                  href="https://www.linkedin.com/company/nxtqtr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  style={{
                    display:'inline-flex',
                    alignItems:'center',
                    justifyContent:'center',
                    width:36,
                    height:36,
                    borderRadius:'50%',
                    border:'1px solid rgba(255,255,255,0.2)',
                    color:'#ffffff',
                    transition:'background .2s, border-color .2s'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.114 20.452H3.56V9h3.554v11.452z"/>
                  </svg>
                </a>

                <a
                  href="mailto:contact@aievoked.com"
                  aria-label="Email"
                  style={{
                    display:'inline-flex',
                    alignItems:'center',
                    justifyContent:'center',
                    width:36,
                    height:36,
                    borderRadius:'50%',
                    border:'1px solid rgba(255,255,255,0.2)',
                    color:'#ffffff',
                    transition:'background .2s, border-color .2s'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/nextquarter.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  style={{
                    display:'inline-flex',
                    alignItems:'center',
                    justifyContent:'center',
                    width:36,
                    height:36,
                    borderRadius:'50%',
                    border:'1px solid rgba(255,255,255,0.2)',
                    color:'#ffffff',
                    transition:'background .2s, border-color .2s'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </a>

                <a
                  href="https://wa.me/919266101567"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  style={{
                    display:'inline-flex',
                    alignItems:'center',
                    justifyContent:'center',
                    width:36,
                    height:36,
                    borderRadius:'50%',
                    border:'1px solid rgba(255,255,255,0.2)',
                    color:'#ffffff',
                    transition:'background .2s, border-color .2s'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12.004 2.003c-5.514 0-9.997 4.483-9.997 9.997 0 1.762.462 3.485 1.34 5.002L2 22l5.116-1.324a9.965 9.965 0 0 0 4.888 1.318h.004c5.514 0 9.997-4.483 9.997-9.997 0-2.671-1.04-5.182-2.929-7.071a9.93 9.93 0 0 0-7.072-2.923zm5.848 15.845a8.281 8.281 0 0 1-5.85 2.424h-.003a8.29 8.29 0 0 1-4.229-1.158l-.303-.18-3.037.786.81-2.96-.198-.304a8.276 8.276 0 0 1-1.269-4.406c0-4.573 3.723-8.296 8.302-8.296a8.244 8.244 0 0 1 5.868 2.432 8.234 8.234 0 0 1 2.43 5.868 8.281 8.281 0 0 1-2.521 5.794z"/>
                  </svg>
                </a>
              </div>
            </div>
            {/* CTA */}
            <div className="reveal d2 footer-cta" style={{ flex:'0 1 360px' }}>
              <h3 style={{ fontSize:'clamp(25px,1.6vw,18px)', fontWeight:400, color:'#ffffff', lineHeight:'22px', letterSpacing:'-0.002em', marginBottom:24 }}>We are just a message away</h3>
              <p style={{ fontSize:15, color:'#a3a3a3', margintop:15 , lineHeight:'16px', marginBottom:24 }}>We'll get back to you in one business day.</p>
              <div className="footer-cta-btn-row" style={{ display:'flex', justifyContent:'flex-start' }}>
              <a
                href="https://calendly.com/skillsparkmedia-emp/skillspark-media-discovery-call"
                style={{
                  display:'inline-flex',
                  alignItems:'center',
                  gap:6,
                  background:'#ffffff',
                  color:'#0a0a0a',
                  fontSize:13,
                  fontWeight:500,
                  padding:'8px 16px',
                  borderRadius:999,
                  textDecoration:'none',
                  transition:'background .2s'
                }}
              >
                Get In Touch
                <span style={{ display:'inline-flex' }}>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </a>
              </div>
            </div>
          </div>
        </div>

        {/* Watermark */}
        <div style={{ overflow:'hidden', paddingBottom:8 }}>
          <p style={{
            fontSize:'clamp(50px,14vw,200px)',
            fontWeight:500,
            color:'#ffffff',
            opacity:0.02,
            letterSpacing:'0.002em',
            whiteSpace:'nowrap',
            lineHeight:1,
          }}>NEXT QUARTER</p>
        </div>

      </div>
    </footer>
  );
}