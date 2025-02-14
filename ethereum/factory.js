import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface), '0x9fdCba8CC7d630f879711ff96a22B73D22b0c8d7'
);

export default instance;