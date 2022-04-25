import web3 from './web3'; // Import web3 instance created (web3.js).
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xBA2936C591cF2D0Be878c29c8287dCE244f5A0e5'
);

export default instance;
