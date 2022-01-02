import Web3 from 'web3';

const getToken = (web3, tokenABI, tokenAddress) => new Promise((resolve) => {
    var tokenInst = new web3.eth.Contract(tokenABI,tokenAddress);
    tokenInst.methods.balanceOf('0x2Ca68647Db1b789e496faFb3eC9447A97Cfd716C').call().then(function (bal) {
        console.log(bal);
    })
});

export default getToken;