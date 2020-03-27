const router = require("express").Router();
const User = require("../models/user.model");
const uuid = require('uuid/v4');
const crypto = require("crypto");

router.route("/").post((req, res) => {

    // Nodejs encryption with CTR
    const algorithm = 'aes-256-cbc';
    const key = new Buffer("keidakira1412|keidakira1412|1412", "utf-8");
    const iv = new Buffer("achukubuchuku123", "utf-8");

    function encrypt(text) {
        let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
        let encrypted = cipher.update(text);
        encrypted = Buffer.concat([encrypted, cipher.final()]);
        return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
    }

    const uid = uuid();
    const username = req.body.username;
    const enp = encrypt(req.body.password);
    const password = enp.encryptedData;
    const uiv = enp.iv;

    const newUser = new User({
        uid,
        username,
        password,
        uiv
    });

    User.findOne({username: new RegExp('^'+username+'$', "i")}, (err, doc) => {
        if(doc != null) {
            res.json({ "success": 0, "msg": "User already exists" });
        } else {
            newUser.save()
            .then(() => res.json({ "success": 1, "msg": "User created" }))
            .catch(err => res.json({ "success": 0, "msg": err }));
        }
    });    

});

module.exports = router;