require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth meadow unveil gesture help fringe giant'; 
let testAccounts = [
"0x7d1d6f7e4cf5dcfdc7e5851c676058bc963c0c7e1335764934f5aa958884755b",
"0xc9a98cce3a20c9cc9972a4761a4f54ab0a658c99976b6aa084d640e29ebbf111",
"0x189a4b9964c796f6e02ca9a4d6d6f382d90fe6301902617717d27a8071158728",
"0xc03582177bcbff6fddca3053c5f77dc5468834c6d5b692022d9ac730f0f2e664",
"0x0e662acea4aa7c2ab6b625075019cc5b96d052fc6013f1000ec240276e233698",
"0x7845b3aa3f8b3f5373ec6085ca3ee6954159a9324d9784a239b68def7f2a1a74",
"0xc200b3568a0dd378f7a7e8e2afe746002eb69001a6fd958b98213e043ffb4f44",
"0x93ea6fc6b30712afa9af445028fbe172c85f49672e1107c504124acc081469e8",
"0x28787ea557d93dc3be79eeb12acedba688d93d48ce7d9547c5f681b5ccb999f2",
"0x8e9c7df3b5456c113cafc50c9c4d843aa0eae4d53e096630455818f9189c50c7"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
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
