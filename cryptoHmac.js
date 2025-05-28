const { createHmac } = require('crypto');

function generateHmac(key, data) {
    const hmac = createHmac('sha256', key);
    hmac.update(data);
    return hmac.digest('hex');
}

module.exports = { generateHmac };