import React from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import SeedInput from '../component/seed-input';

//
// Restore Wallet View
//

const RestoreWalletView = ({ store, nav, wallet }) => (
  <SeedInput
    title="Restore your wallet"
    copy={store.seedVerifyCopy}
    navBack={nav.goSeed}
    seedInputs={store.wallet.seedVerify}
    indexes={store.seedVerifyIndexes}
    setSeedVerify={wallet.setSeedVerify}
    checkSeed={wallet.checkSeed}
  />
);

RestoreWalletView.propTypes = {
  store: PropTypes.object.isRequired,
  nav: PropTypes.object.isRequired,
  wallet: PropTypes.object.isRequired,
};

export default observer(RestoreWalletView);
