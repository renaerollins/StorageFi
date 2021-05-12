const StorageFi = artifacts.require("StorageFi");

module.exports = function(deployer) {
  deployer.deploy(StorageFi);
};
