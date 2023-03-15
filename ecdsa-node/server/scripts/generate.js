const secp = require("ethereum-cryptography/secp256k1");
const { toHex } = require("ethereum-cryptography/utils");
const { keccak256 } = require("ethereum-cryptography/keccak");

const privateKey = secp.utils.randomPrivateKey();

console.log(`Private key: ${toHex(privateKey)}`);

const publicKey = secp.getPublicKey(privateKey);
const address = keccak256(publicKey).slice(-20);

console.log(`Public key: 0x${toHex(address)}`);
