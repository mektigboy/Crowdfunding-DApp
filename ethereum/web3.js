import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
  // Browser & Metamask running.
  window.ethereum.request({ method: 'eth_requestAccounts' });

  web3 = new Web3(window.ethereum);
} else {
  // Server or user is not running Metamask.
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/cbe42a9daef64613bff25927292e1666'
  );

  web3 = new Web3(provider);
}

export default web3;
