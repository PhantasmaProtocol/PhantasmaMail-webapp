var $ = require("jquery");
neonJs = require('@cityofzion/neon-js');

window.PH = {
  mainWallet: -1,
  wallets: [],
  loaded: false,

  saveWallets: function() {
    localStorage.setItem("wallets", JSON.stringify(PH.wallets));
    localStorage.setItem("main_wallet", PH.mainWallet);
  },

  addWallet: function(email, priv_key) {
    // TODO use NEO api
    // and set current wallet to newly created wallet
    return false;
  },

  forgetWallet: function() {
    if (PH.mainWallet === -1 || PH.mainWallet >= PH.wallets.length) { return; }

    PH.wallets.splice(PH.mainWallet, 1);

    PH.mainWallet = PH.wallets.length > 0 ? 0 : -1;
  },

  onLoad: function() {
    if (PH.loaded) { return; }

    if (typeof(Storage) !== "undefined" && localStorage.getItem("wallets")) {
      PH.wallets = JSON.parse(localStorage.getItem("wallets"));
      PH.mainWallet = PH.wallets.length > 0 ? 0 : -1;
    }

    PH.saveWallets();

    PH.loaded = true;
  }
};

$(document).ready(function(){
  PH.onLoad();
});
