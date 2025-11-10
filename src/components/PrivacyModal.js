import React from 'react';

const PrivacyModal = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg max-w-2xl mx-4 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8">
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 rounded-full border-2 border-google-blue flex items-center justify-center">
              <div className="w-2 h-2 bg-google-blue rounded-full"></div>
            </div>
            <span className="text-sm text-google-secondary">SV</span>
          </div>
          <button className="text-google-blue text-sm hover:underline">
            Logga in
          </button>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-2xl text-google-text mb-6 font-normal">
        Innan du fortsätter till Google
      </h1>

      {/* Content */}
      <div className="space-y-4 text-sm text-google-text leading-relaxed">
        <p>Vi använder cookies och data för att</p>
        
        <div className="space-y-3 ml-4">
          <div className="flex items-start space-x-3">
            <div className="w-4 h-4 mt-0.5 flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-full h-full text-google-secondary">
                <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <span>leverera och underhålla Googles tjänster</span>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-4 h-4 mt-0.5 flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-full h-full text-google-secondary">
                <path fill="currentColor" d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
              </svg>
            </div>
            <span>spåra avbrott och skydda mot spam, bedrägerier och otillåten användning</span>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-4 h-4 mt-0.5 flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-full h-full text-google-secondary">
                <path fill="currentColor" d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
              </svg>
            </div>
            <span>mäta målgruppsengagemang och webbplatsstatistik så att vi kan analysera hur våra tjänster används och förbättra tjänsternas kvalitet.</span>
          </div>
        </div>

        <p className="mt-4">Om du väljer knappen Godkänn alla använder vi även cookies och data för att</p>
        
        <div className="space-y-3 ml-4">
          <div className="flex items-start space-x-3">
            <div className="w-4 h-4 mt-0.5 flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-full h-full text-google-secondary">
                <path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <span>utveckla och förbättra nya tjänster</span>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-4 h-4 mt-0.5 flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-full h-full text-google-secondary">
                <path fill="currentColor" d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
              </svg>
            </div>
            <span>leverera annonser och mäta hur effektiva de är</span>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-4 h-4 mt-0.5 flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-full h-full text-google-secondary">
                <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <span>visa anpassat innehåll utifrån dina inställningar</span>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-4 h-4 mt-0.5 flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-full h-full text-google-secondary">
                <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <span>visa anpassade annonser utifrån dina inställningar</span>
          </div>
        </div>

        <p className="mt-4">Om du väljer knappen Avvisa alla använder vi inte cookies i dessa ytterligare syften.</p>

        <p className="mt-4">
          Innehåll utan anpassning påverkas bland annat av vad du tittar på för tillfället, aktivitet i din aktiva 
          söksession och din plats. Innehåll utan anpassning påverkas bland annat av vad du tittar på för 
          tillfället och din ungefärliga plats. Innehåll och annonser med anpassning kan även omfatta mer 
          relevanta resultat, rekommendationer och anpassade annonser utifrån tidigare aktivitet i 
          webbläsaren, till exempel tidigare sökningar på Google. Vi använder även cookies och data för att 
          anpassa upplevelsen efter lämplighet för din målgrupp, om tillämpligt.
        </p>

        <p className="mt-4">
          Välj knappen Fler alternativ för mer information, till exempel om hur du hanterar dina 
          integritetsinstallningar. Du kan även besöka g.co/privacytools när som helst.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-center space-x-4 mt-8">
        <button className="google-button google-button-secondary px-8">
          Avvisa alla
        </button>
        <button className="google-button google-button-primary px-8">
          Godkänn alla
        </button>
      </div>

      {/* More options link */}
      <div className="text-center mt-4">
        <button className="google-link text-sm">
          Fler alternativ
        </button>
      </div>

      {/* Footer links */}
      <div className="flex items-center justify-center space-x-6 mt-6 text-xs text-google-secondary">
        <button className="hover:underline">Integritet</button>
        <button className="hover:underline">Villkor</button>
      </div>
    </div>
  );
};

export default PrivacyModal;