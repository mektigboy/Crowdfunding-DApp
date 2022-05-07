import web3 from './web3'; // Import web3 instance created (web3.js).
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xe099c9E2aE3026B649436d8E8c8Bb3D21C8cC980'
);

export default instance;
