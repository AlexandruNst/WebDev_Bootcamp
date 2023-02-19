const bcrypt = require("bcrypt");

const hashPassword = async (pw) => {
    const saltRounds = 12;
    // the larger the number, the longer the function will take to compute
    // not generating the salt takes long, but when we hash
    // 12 is a good standard, makes the function around 250ms long
    // increases exponentially
    const hash = await bcrypt.hash(pw, saltRounds);
    console.log(hash);
}

const login = async (pw, hashPw) => {
    const result = await bcrypt.compare(pw, hashPw);
    if (result) {
        console.log("LOGGED IN!");
    } else {
        console.log("WRONG CREDENTIALS");
    }
}

// hashPassword("monkey");
// Output:
// $2b$12$hSwqruCAUVphvNgN7LRqeeMNrwiuff/JiVOK3sOBhOHMorggA/aUq -> hash

// $2b$12$hSwqruCAUVphvNgN7LRqee -> this is the salt
// Bcrypt adds the salt at the beginning of the hash

login("monkey", "$2b$12$hSwqruCAUVphvNgN7LRqeeMNrwiuff/JiVOK3sOBhOHMorggA/aUq");