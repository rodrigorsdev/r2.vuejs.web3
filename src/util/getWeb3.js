import Web3 from 'web3';

let getWeb3 = new Promise(function(resolve, reject) {
    // Check for injected web3

    if (window.ethereum) {
        console.log('window.ethereum started');

        let web3 = new Web3(ethereum);
        ethereum.enable();

        resolve({
            injectedWeb3: web3.isConnected(),
            web3() {
                return web3;
            }
        });
    } else if (window.web3) {
        console.log('window.web3 started');

        var web3 = new Web3(web3js.currentProvider);
        resolve({
            injectedWeb3: web3.isConnected(),
            web3() {
                return web3;
            }
        });
    } else {
        // web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
        reject(new Error('Unable to connect to Metamask'));
    }
}).then(result => {
    return new Promise(function(resolve, reject) {
        // Retrieve network ID
        result.web3().version.getNetwork((err, networkId) => {
            if (err) {
                reject(new Error('Unable to retrieve network ID'));
            } else {
                result = Object.assign({}, result, { networkId });
                resolve(result);
            }
        });
    });
}).then(result => {
    return new Promise(function(resolve, reject) {
        //Retrieve coinbase
        var coinbase = result.web3().eth.accounts[0];

        if (!coinbase) {
            reject(new Error('unable to retrieve coinbase'))
        }

        result = Object.assign({}, result, { coinbase });
        resolve(result);
    });
}).then(result => {
    return new Promise(function(resolve, reject) {
        // Retrieve balance for coinbase
        result.web3().eth.getBalance(result.coinbase, (err, balance) => {
            if (err) {
                reject(new Error('Unable to retrieve balance for address: ' + result.coinbase));
            } else {
                result = Object.assign({}, result, { balance });
                resolve(result);
            }
        });
    });
});

export default getWeb3;