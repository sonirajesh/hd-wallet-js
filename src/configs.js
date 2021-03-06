export default [
  {
    code: 'TEST',
    name: 'Testnet',
    coinType: 0,
    units: {
      label: 'satoshi',
      value: 100000000,
    },
    apis: {
      minigFee: 'https://bitcoinfees.earn.com/api/v1/fees/recommended',
      addressesInfo: 'https://testnet.blockchain.info/multiaddr',
      multiAddrsUTXOs: 'https://testnet.blockexplorer.com/api/addrs/utxo',
      broadCastTxn: 'https://testnet.blockexplorer.com/api/tx/send',
      queryTxn: 'https://testnet.blockexplorer.com/api/tx/',
      confirmedBalance: 'https://testnet.blockexplorer.com/api/addr/{{address}}/balance',
      unConfirmedBalance: 'https://testnet.blockexplorer.com/api/{{address}}/unconfirmedBalance',
    },
  },
  {
    code: 'BTC',
    name: 'Bitcoin',
    coinType: 1,
    units: {
      label: 'satoshi',
      value: 100000000,
    },
    apis: {
      minigFee: 'https://bitcoinfees.earn.com/api/v1/fees/recommended',
      addressesInfo: 'https://blockchain.info/multiaddr',
      multiAddrsUTXOs: 'https://blockexplorer.com/api/addrs/utxo',
      broadCastTxn: 'https://blockexplorer.com/api/tx/send',
      queryTxn: 'https://blockexplorer.com/api/tx/',
      confirmedBalance: 'https://blockexplorer.com/api/addr/{{address}}/balance',
      unConfirmedBalance: 'https://blockexplorer.com/api/{{address}}/unconfirmedBalance',
    },
  },
];
