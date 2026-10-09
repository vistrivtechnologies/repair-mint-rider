import CryptoJS from 'crypto-js';

export const decryptData = (encryptedData :any) => {
  try {
    console.log("encryptedData====",encryptedData)
    const bytes = CryptoJS.AES.decrypt(encryptedData, '7A9Q2641PZ023');
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);

    if (!decryptedData) {
      throw new Error('Decryption failed');
    }

    return JSON.parse(decryptedData); // Assuming it's JSON data
  } catch (error) {
    console.error('Decryption error:', error);
    return null;
  }
};