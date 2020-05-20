const functions = require('firebase-functions');
const admin = require('firebase-admin');
const algoliasearch = require("algoliasearch");


admin.initializeApp();
const env = functions.config();
const client = algoliasearch(env.algolia.appid, env.algolia.apikey);
const index = client.initIndex('intrebari_search');

exports.indexPachet = functions.firestore.document('pachete/{pachet_id}').onCreate((snap, context) => {
    const data = snap.data();
    const objectId = snap.id;
    const f = async (data) => {
        data.arr.forEach((element, index) => {
            index.addObject({
                objectId: `${snap.id}_${index + 1}`,
                nr_intrebare: index + 1,
                ...element
            })
        });
    }
    return f(data);
})

exports.unindexPachet = functions.firestore.document('pachete/{pachet_id}').onDelete((snap, context) => {
    const data = snap.data();
    const objectId = snap.id;
    const f = async (data) => {
        data.arr.forEach((element, index) => {
            index.deleteObject(`${snap.id}_${index + 1}`);
        });
    }
    return f(data);
})
