import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
    // We are in the browser and metamask is running.
    //window.ethereum.request({ method: "eth_requestAccounts" });
    web3 = new Web3(window.currentProvider);
} else {
    // We are on the server *OR* the user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        "https://sepolia.infura.io/v3/3cb030615b8d4232a275d281a896cb27"
    );
    web3 = new Web3(provider);
}

export default web3;