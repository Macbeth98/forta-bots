# Compound III Protocol.

## Summary

- Compound III is a powerful tool that allows users to earn interest on their cryptocurrency deposits and borrow other assets against their collateral.The protocol is designed to be secure, efficient, and easy to use.
- Comet is the main contract of the Compound III protocol featuring a base asset and collateral assets. This comet contract instance is deployed for every base asset.
- Users can supply the base asset and earn interest on the supplied asset. Users can also supply the collateral asset and borrow a certain amount of base token. The borrowing and repaying of assets depends on the below mentioned collateral factors.
- Each collateral asset has a defiend collateral factors such as `borrowCollateralFactor` which defines the percentage of collateral value the user is allowed to borrow in base asset and `liquidateCollateralFactor` which defines the percentage of collateral value the user is allowed to have in outstanding borrows before aa liquidation occurs.
- Compound III protocol is currently live on Ethereum Mainnet with USDC and WETH as base assets.

## Proposed Bots:

- COMP01: Pause Guardian Bot
  - The bot tracks whenever a protocol functionality is paused. The method pause() in `comet` contract pauses the ability to supply, transfer, withdraw, absorb, and buy assets in the event of an unforseen vulnerability.
  - This method can only be called by a special account known as `PauseGuardian`.
  - This alert can let the users know that there is some vulnerability or a critical issue in the protocol through which the users can be aware of the issue before it is too late.
  - The bot also monitors whenever the `PauseGuardian` was changed.

## Proposed Solution:

- COMP01: Pause Guardian Bot
  - To monitor the protocol's pause functionality, the bot looks for the `PauseAction` in the transactions that are of Comet transactions.
  - To monitor the change in `PauseGuardian`, `SetPauseGuardian` event is monitored.
