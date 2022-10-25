import React from "react";
import CandyMachine from "../components/CandyMachine";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
// Constants
const Home = () => {
    const wallet = useWallet();
    const renderNotConnectedContainer = () => (
        <div>
            <h2>Hey there! 👋</h2>
            <img src="https://media.giphy.com/media/eSwGh3YK54JKU/giphy.gif" alt="emoji"/>
            <div className="button-container">
                <WalletMultiButton  className="cta-button connect-wallet-button"/>
            </div>
        </div>
    )

    return (
        <div className="App">
            <div className="container">
                <div className="header-container">
                    <p className="header">🍭 Candy Drop</p>
                    <p className="sub-text">NFT drop machine with fair mint</p>
                        {wallet.publicKey ? <CandyMachine walletAddress={wallet} /> : renderNotConnectedContainer()}
                </div>
            </div>
        </div>
    );
};

export default Home;
