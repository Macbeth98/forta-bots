export const pauseEventABI =
  'event PauseAction(bool supplyPaused, bool transferPaused, bool withdrawPaused, bool absorbPaused, bool buyPaused)';

export const pauseGuardianEventABI =
  'event SetPauseGuardian(address indexed cometProxy, address indexed oldPauseGuardian, address indexed newPauseGuardian)';

export interface AssetData {
  comet: string;
  configurator: string;
  [key: string]: string;
}

export interface NetworkConstants {
  assets: { [key: string]: AssetData };
}

const mappedData = new Map<string, { asset: string; type: string }>();

export const networks: {
  [key: number]: NetworkConstants;
  getNetworkData: typeof mappedData;
} = {
  1: {
    assets: {
      USDC: {
        comet: '0xc3d688B66703497DAA19211EEdff47f25384cdc3',
        configurator: '0x316f9708bB98af7dA9c68C1C3b5e79039cD336E3',
      },
      WETH: {
        comet: '0xA17581A9E3356d9A858b789D68B4d866e593aE94',
        configurator: '0xA17581A9E3356d9A858b789D68B4d866e593aE94',
      },
    },
  },
  getNetworkData: mappedData,
};

export const populateNetworkData = (id: number) => {
  const network = networks[id];
  if (network === undefined) {
    return;
  }

  const { assets } = network;

  for (const asset in assets) {
    const assetData = assets[asset];
    for (const type in assetData) {
      mappedData.set(assetData[type].toLowerCase(), { asset, type });
    }
  }

  return;
};
