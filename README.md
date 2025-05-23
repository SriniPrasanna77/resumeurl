# resumeurl
Symmetric key encryption in Node.js utilizes the crypto module, which provides various cryptographic functionalities. The process involves generating a key, an initialization vector (IV), encrypting the data, and decrypting it using the same key and IV. 

• Require the crypto module. 
    const crypto = require('crypto');

• Generate a secure key: For AES-256, a 32-byte key is required. 

    const key = crypto.randomBytes(32);

Generate a random initialization vector (IV). 
    const iv = crypto.randomBytes(16); // 16 bytes for AES

• Create a cipher object: Use crypto.createCipheriv() with the algorithm, key, and IV. 

    const algorithm = 'aes-256-cbc'; // Or other AES variants like 'aes-256-gcm'
    const cipher = crypto.createCipheriv(algorithm, key, iv);

Encrypt the data. 
    let encryptedData = cipher.update(text, 'utf8', 'hex');
    encryptedData += cipher.final('hex');

• Create a decipher object: Use crypto.createDecipheriv() with the same algorithm, key, and IV. 

     const decipher = crypto.createDecipheriv(algorithm, key, iv);

decrypt the data. 
    let decryptedData = decipher.update(encryptedData, 'hex', 'utf8');
    decryptedData += decipher.final('utf8');

Complete Example. 
    const crypto = require('crypto');

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

    const encryptedText = encrypt(text, key, iv);
    const decryptedText = decrypt(encryptedText, key, iv);

    console.log('Encrypted:', encryptedText);
    console.log('Decrypted:', decryptedText);

AI responses may include mistakes.

[-] https://dev.to/superviz/implementing-symmetric-and-asymmetric-encryption-with-nodejs-4efp
