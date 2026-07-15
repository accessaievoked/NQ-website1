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
        }
      `}</style>
      <div style={{ position:'relative', zIndex:2 }}>
        <div style={{ maxWidth:1440, margin:'0 auto', padding:'24px clamp(20px, 4vw, 78px) 140px' }}>
          <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'space-between', gap:'clamp(16px,2vw,32px)', alignItems:'start' }}>
            {/* Brand */}
            <div className="reveal" style={{ flex:'0 0 auto' }}>
              <h2 style={{ fontSize:'clamp(22px,3vw,48px)', fontWeight:500, color:'#ffffff', lineHeight:'32px', letterSpacing:'-0.005em', marginBottom:15 }}>Next Quarter</h2>
              <p style={{ fontSize:15,margintop:'15px', color:'#fff', lineHeight:'18px' }}>Shopify CRO Agency</p>
            </div>
            {/* CTA */}
            <div className="reveal d2 footer-cta" style={{ flex:'0 1 360px' }}>
              <h3 style={{ fontSize:'clamp(25px,1.6vw,18px)', fontWeight:400, color:'#ffffff', lineHeight:'22px', letterSpacing:'-0.002em', marginBottom:24 }}>We are just a message away</h3>
              <p style={{ fontSize:15, color:'#a3a3a3', margintop:15 , lineHeight:'16px', marginBottom:24 }}>We'll get back to you in one business day.</p>
              <div className="footer-cta-btn-row" style={{ display:'flex', justifyContent:'flex-start' }}>
              <a
                href="mailto:hello@nextquarter.co"
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