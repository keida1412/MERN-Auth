const router = require("express").Router();
const User = require("../models/user.model");
const crypto = require("crypto");

router.route("/").post((req, res) => {

    // Nodejs encryption with CTR
    const algorithm = 'aes-256-cbc';
    const key = new Buffer.from("keidakira1412|keidakira1412|1412", "utf-8");
    const iv = new Buffer.from("achukubuchuku123", "utf-8");

    function encrypt(text) {
        let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
        let encrypted = cipher.update(text);
        encrypted = Buffer.concat([encrypted, cipher.final()]);
        return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
    }

    const username = req.body.username;
    const password = encrypt(req.body.password).encryptedData;
    User.findOne({ username: RegExp("^"+username+"$")}, (err, doc) => {
        if(doc != null)
            res.json(doc.password === password);
        else
            res.json(false);
    });
});

module.exports = router;