require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict robot flock tribe story cruise misery unaware include another army gaze'; 
let testAccounts = [
"0x8346d8240096161f4c98292fea090d749c626c42483cb67756a23bcfe938eecb",
"0xcdd0866fa7f1458b0f487b8d29f3b19e7dd16fe7df028626378525232b3964e2",
"0x873f1e21ef80769d46c4155b2e70c13689abe5e485dab6e55f46b208e98fdb30",
"0x760006f310d0c07c1567219127102c0b7626f94d0e4155ff4c45f6adc2c6f078",
"0xfa1e6eb409b379d6dad02eb7d1d3586384c7f4f93a267c2f1c2a8b2f5e1964d6",
"0x3e11605585465f742b6f8f62a2ccc5763a1e40d38791327835b312f6c8e59f17",
"0xf572cd67312b4626afed404d38703a627e4f0de02b89a4c0126e79a9c7db9bdc",
"0x3c39f04599eecd29a57a50f8894641b0f7c00352a70b7563ee9342e4848f73ec",
"0x81946bc3322de74d32f4e0949d3beef4651a8393790f95f9cea24ac1496a778b",
"0xeef78c177a35b75626f7c923343730078c06639323f46ebec003c955cffe74e0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
