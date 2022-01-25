import { config, https, logger, firestore } from "firebase-functions";
import { initializeApp, firestore as _firestore } from "firebase-admin";
initializeApp(config().firebase)


export const helloWorld = https.onRequest((request, response) => {
    logger.info("Hello logs!", {structuredData: true});
    response.send("Hello from functions");
});

const createNotifications = (async notifications => {
    const doc = await _firestore().collection('notifications')
        .add(notifications);
    return console.log("notifications added", doc);
})

export const postCreated = firestore
.document('posts/{postId}')
.onCreate( doc => {
    const post = doc.data();
    const notifications = {
        content: 'Added a new post',
        user: `${post.authorFirstName} ${post.authorLastName}`,
        time: _firestore.FieldValue.serverTimestamp()
    }
})