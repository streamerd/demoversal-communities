import Web3 from 'web3';
const getWeb3 = (pillChoice) => new Promise((resolve) => {
  
  if (pillChoice) {
      let currentWeb3;
  
      if (window.ethereum) {
        console.log('ethereum');
        currentWeb3 = new Web3(window.ethereum);
        try {
          // Request account access if needed
          window.ethereum.enable();
          // Acccounts now exposed
          resolve(currentWeb3);
        } catch (error) {
          // User denied account access...
          alert('Please allow access for the app to work');
        }
      } else if (window.web3) {
        console.log('Using web3 detected from external source.');
        window.web3 = new Web3(web3.currentProvider);
        // Acccounts always exposed
        resolve(currentWeb3);
      } else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
      }
  }
  
});


export default getWeb3;