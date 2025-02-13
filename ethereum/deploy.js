const HDWalletProvider = require('@truffle/hdwallet-provider');
const { Web3 } = require('web3');
const compiledFactory = require('./build/campaignFactory.json');

const provider = new HDWalletProvider(
    'title canal brown they profit repair achieve task van morning weasel phone',
    'https://sepolia.infura.io/v3/3cb030615b8d4232a275d281a896cb27'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: compiledFactory.bytecode })
        .send({ gas: '1000000', from: accounts[0] });

    console.log('Contract deployed to', result.options.address);
    provider.engine.stop();
};
deploy();

//deployed to 0x9fdCba8CC7d630f879711ff96a22B73D22b0c8d7