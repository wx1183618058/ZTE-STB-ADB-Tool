const md5 = require('md5');

function sum(msg) {
    let rv = 0;

    for (let c of msg)
        rv = rv * 31 + c.charCodeAt() & 0xFFFFFFFF;

    return (rv + (rv >> 31)) ^ (rv >> 31);
}

function hash_code(mac, random) {
    let salt = Math.random().toString().substring(2, 6);
    mac = mac.split("");

    switch (random[0]) {
        case 'C':
            mac[2] = random[0];
            mac[5] = random[1];
            mac[8] = random[2];
            mac[11] = random[3];
            mac[14] = random[4];
            mac[16] = random[5];
            break;
        case 'D':
            mac[2] = '@';
            mac[5] = 'd';
            mac[8] = 'a';
            mac[11] = '9';
            mac[14] = 'M';
            random += salt;
            break;
        default:
            break;
    }

    mac = mac.join("");
    msg = `open_ADB${random}@${mac}ZTE_ENCRYPT`;
    rv = sum(md5(msg).toUpperCase()).toString();

    if ('D' == random[0])
        rv = rv.substring(0, 2) + salt + rv.substring(2);

    return rv;
}

console.log(hash_code("FF:FF:FF:FF:FF:FF", "D00000"));

window.hash_code = hash_code;
