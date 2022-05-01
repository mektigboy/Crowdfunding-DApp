import web3 from './web3'; // Import web3 instance created (web3.js).
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xE50EfDBE93687AC60082aece8e18f7e7c8B4eD38'
);

export default instance;
