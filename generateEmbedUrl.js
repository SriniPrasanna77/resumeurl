const { generateToken } = require('./generateToken');
const { generateHmac } = require('./cryptoHmac');

function generateEmbedUrl(tenant_subdomain, resume_fileid, aws_account) {
    if (!tenant_subdomain || !resume_fileid || !aws_account) {
        throw new Error('Missing required parameters');
    }

    const payload = {
        resume_fileid: resume_fileid,
        tenant_subdomain: tenant_subdomain,
        account: aws_account
    };

    // const hmacKey = 'sgcorpd-sandbox';;
    // const hmacData = JSON.stringify(payload);
    // const hmacSignature = generateHmac(hmacKey, hmacData); //8589d5b2d43812e4db4313d8bbeb7eecadaabd8383bc300d3ff4ca8bbf82514a
    // payload.hmac = hmacSignature;

    console.log('payload:', payload);

    const token = generateToken(payload);
    payload.token = token;
    console.log('Payload with JWT:', payload);

    const payloadStringEncoded = btoa(JSON.stringify(payload));
    console.log('Base64 Encoded Payload String:',payloadStringEncoded);

    return `https://newapi-gw.ignyte.com/process?token=${payloadStringEncoded}`
}

generateEmbedUrl('sgcorp', '12345', 'sgcorpd-sandbox');
// module.exports = { generateEmbedUrl };