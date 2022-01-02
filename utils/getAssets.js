import Web3 from 'web3';

const getAssets = (web3, address) => new Promise((resolve) => {
    web3.eth.getBalance(address, (error, balance) => {
        if (error) {
            console.log(error);
        } else {
            resolve(balance);
        }
    });
});

export default getAssets;