
// Enabling Ethereum
window.ethereum.enable();

// Setting up our provider (Ropsten)
var provider = new ethers.providers.Web3Provider(
    web3.currentProvider,
    "ropsten"
);

// Contract Address
var MoodContractAddress = "0x2aF388e8B80F11cd164731785AB870a543d8b2c7"

// Contract ABI
var MoodContractABI =
    [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_mood",
                    "type": "string"
                }
            ],
            "name": "setMood",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getMood",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]

// Defining vars for our Contract and signer
var MoodContract;
var signer;

// Getting accounts and setting up Contract using above vars
provider.listAccounts().then(function (accounts) {

    // Connecting Signer to Metamask Account
    signer = provider.getSigner(accounts[0]);

    // Setting up Contract
    MoodContract = new ethers.Contract(
        MoodContractAddress,
        MoodContractABI,
        signer
    );
});

// Creating Async Functions to call Contract Functions
// Note: Otherwise, we will only get a Promise (like using APIs)

async function getMood() {
    getMoodPromise = MoodContract.getMood();
    var Mood = await getMoodPromise;
    console.log(Mood);
}

async function setMood() {
    let mood = document.getElementById("mood").value
    getMoodPromise = MoodContract.setMood(mood);
    await setMoodPromise;
    console.log("Mood Set!")
} 
