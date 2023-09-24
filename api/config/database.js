const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const serviceAccount = require('./serviceAccountKey.json');

exports.init = () => {
    initializeApp({
        credential: cert(serviceAccount)
      });
}

exports.getDb = () => getFirestore();