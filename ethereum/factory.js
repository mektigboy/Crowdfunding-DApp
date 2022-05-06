import web3 from './web3'; // Import web3 instance created (web3.js).
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xdA1B14aB7bfB259F64E7a77ffD5c95584ce89fb8'
);

export default instance;
