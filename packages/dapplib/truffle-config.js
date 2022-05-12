require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture globe frown ski strong cost snow coconut hard light army gather'; 
let testAccounts = [
"0x915a7b4cfc5985f5b690487bc8de27a98f3e393a7ab98f55d1b41a968596f9e1",
"0x805045bed9264033caf388c643fc5a00ae652b99f876d568de5e57d090ceb23e",
"0x575507ff95e17562e76bb1e964267993251bd7429cfdf7d0006d681cb58185d1",
"0x39719a1129f97497a544245422c35ecf4646229f7ddd80327e422ac356fca2fa",
"0x9aecfbaa0fe5bd996ea730137551434a4f6254a110d471b64a30ff1ac1d5f5f0",
"0xb8eac70a9916da0c30c2876fba785bb6a31e7c419c75ccb9e7b9462c6b5960d8",
"0x78d7f614ef9ebe22a6c033a0558618844b6ca6cc0f29e5a9a92c8c0e145e2613",
"0x4ca65b42b21f433214c7f8e0ae250bf009bebd0e77c0f953e33a93608f86cdfc",
"0x654f24801319293e8829b2dae805a4c4a065c60286cef6731e0725535eedbf6e",
"0x879bb5870e32eb92687d3e849216398bcc8a0a3837a76de4f1bc1ce788d8cf22"
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
            version: '^0.8.0'
        }
    }
};

