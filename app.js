const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const { generateToken } = require('./generateToken');

function encrypt(text, key, iv) {
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

function decrypt(encryptedText, key, iv) {
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
const text = 'Sensitive information';

const user = {
    resume_fileid: '12345',
    tenant_subdomain: 'sgcorp.app.sandbox.ignyte.app'
};

const token = generateToken(user);
console.log('Generated JWT:', token);

const encryptedText = encrypt(token, key, iv);
const decryptedText = decrypt(encryptedText, key, iv);

console.log('Encrypted:', encryptedText);
console.log('Decrypted:', decryptedText);

// verify token
const verified = jwt.verify(decryptedText, process.env.JWT_SECRET_KEY);
if (verified) {
    console.log("Successfully Verified");
} else {
    // Access Denied
    console.log(error);
}