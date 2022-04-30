import web3 from './web3'; // Import web3 instance created (web3.js).
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x79dB97E6dBD657726bFF729488Fd8Bd2e6AA2b10'
);

export default instance;
