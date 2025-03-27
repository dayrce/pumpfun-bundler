# Pump.Fun Bundler

The ultimate open-source solution for efficient token bundling on Pump.Fun with advanced profile creation and anti-bubble map features.

**NOTE**

As of 25th March 2025, it also supports PumpSwap post-migration.

Raydium Mode was removed from the bundler in the favor of PumpSwap.

![Pump.Fun Bundler](https://img.shields.io/badge/PumpFun-Bundler-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Version](https://img.shields.io/badge/version-2.0-orange)

Welcome to the **Pump.Fun Bundler** – your comprehensive solution for bundling on Pump.Fun with advanced profile creation and anti-bubble mapping technology. This free, open-source tool provides the most efficient self-bundling script available for Pump.Fun, allowing you to launch tokens with up to 20 different wallets and unique profiles.

Launch tokens that are completely bubble maps-proof and free from Photon SB marks.

## 🚀 Key Features

### 💊 Seamless User Interface
- Intuitive and fully automatic UI designed for maximum efficiency and ease of use
- Step-by-step guided process for token launches

### 🧑 Advanced Profile Generation
- Automatic random profile creation for each wallet
- Each wallet maintains different random tokens for maximum authenticity
- Unique usernames, bios, and diversified coin holdings

### 🔥 Custom LUT Program
- Proprietary Look-Up Table (LUT) program for optimized launch strategies
- Streamlined transaction processing

### 🚨 Automatic Supply Management
- Intelligent supply deviation handling for smooth launches
- Dynamic adjustment to market conditions

### 🔔 Customizable Buyers Configuration
- Support for up to 20 different keypair buyers
- Personalized launch strategy implementation
- Full control over buy amounts and timing

### 🤖 Superior Performance
- Unmatched speed, stability, and reliability
- Optimized for high-volume launches

### 📂 Custom Onchain Integration
- Seamless operation with our bespoke onchain program
- Enhanced transaction security and verification

### 💸 Advanced Sell Strategies
- Complex percentage-based sell strategies
- Simultaneous execution across all keypairs
- Configurable timing and exit points

## 📋 Comprehensive Trading Modes

### Launch Options
- **Launch Pump**: Block 0 bundle strategy with frontrun/MEV protection
- **Magic Mode**: Advanced bundled snipe strategy
- **Launch + Snipe V2**: Enhanced launch with dev wallet buying
- **Snipe Only**: Targeted buying for non-migrated tokens
- **Stagger Buy**: Distributed buying with configurable delays
- **Bundle + Stagger**: Hybrid protection strategy
- **Sniper Dump**: Anti-sniper countermeasures

### Sell Options
- **Dump All**: Immediate batch exit strategy
- **Delay Sell**: Timed exit with customizable percentages
- **Smart Sell**: Market activity-based reactive selling
- **Select Sell**: Precise multi-wallet management
- **Transfer Sell**: Selective quick-exit option

### Raydium/PumpSwap Support
- Complete integration with Raydium AMM
- Setup mode for optimized trading
- Bundle buy and sell options
- Delay sell features with timing control

## 💾 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/pumpfun-bundler.git

# Navigate to project directory
cd pumpfun-bundler

# Install dependencies
npm install

# Configure environment variables
# Create a .env file with your settings (see ENV Setup section)

# Start the application
npm run start
```

## ⚙️ ENV Setup Guide

Configure your `.env` file with the following parameters:

```
LICENSE_KEY = Your Solana-Scripts.com License Key
SIGNER_PRIVATE_KEY = PRIVATE KEY OF DEV WALLET (BASE58 FORMAT)
DEV_ADDRESS = WALLET ADDRESS OF DEV WALLET (PUBLIC KEY)
FUNDER_PRIVATE_KEY = PRIVATE KEY OF FUNDER WALLET (BASE58 FORMAT)
SELLER_PRIVATE_KEY = PRIVATE KEY OF SELLER WALLET (BASE58 FORMAT)
RPC_URL = YOUR RPC URL (HTTP OR HTTPS)
WS = YOUR WS URL (WSS OR WS)
BLOCKENGINEURL = JITO BLOCKENGINE URL
JITO_TIP = JITO TIP AMOUNT (SOL)
SELL_TIP = SELL TIP AMOUNT (SOL)
DEVBUY = AMOUNT OF SOL TO BUY ON DEV WALLET
LUT_Address = LOOKUP TABLE ADDRESS (AUTO-POPULATED)
COMPUTE_LIMIT_PRICE = COMPUTE LIMIT PRICE (LAMPORTS)
COMPUTE_UNIT = COMPUTE UNIT PRICE (LAMPORTS)
```

### Jito BlockEngine URLs:
- AMSTERDAM: amsterdam.mainnet.block-engine.jito.wtf
- FRANKFURT: frankfurt.mainnet.block-engine.jito.wtf
- NEW YORK: ny.mainnet.block-engine.jito.wtf
- TOKYO: tokyo.mainnet.block-engine.jito.wtf
- SALT LAKE CITY: slc.mainnet.block-engine.jito.wtf

## 🏷️ Token Metadata Configuration

Configure your `metadata.json` file:

```json
{
  "name": "Token Name",
  "symbol": "TICKER",
  "description": "Token Description (Max 30 char)",
  "image": "",
  "showName": true,
  "twitter": "Twitter link",
  "telegram": "Telegram channel link",
  "website": "website URL"
}
```

**Important Notes:**
- Leave the image value blank
- Place your token image in the `/img` directory
- Symbol/ticker maximum 10 characters
- Social links are optional

## 📚 Usage Guide

### First-Time Setup
1. Generate sub wallets (max 20)
2. Fund wallets with SOL
3. Create lookup table
4. Generate random profiles

### Launch Process
1. Configure buy amounts
2. Select desired launch mode
3. Input token parameters
4. Execute launch

### Selling Process
1. Select appropriate sell strategy
2. Configure percentage/timing if needed
3. Execute sell order
4. Monitor results

## 🔧 Troubleshooting

### Common Issues:
- **BigInt Failed To Load Bindings**: This is normal and can be safely ignored
- **Wallet Connection Errors**: Ensure proper private keys and sufficient SOL balance
- **Transaction Failures**: Check RPC connection and compute budget settings

## 🤝 Support and Community

Join our active community for support, updates, and discussions:
- Discord: [discord.gg/solana-scripts](https://discord.gg/solana-scripts)
- Telegram: @benorizz0

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Enjoy seamless, efficient, and profitable launches with the **Pump.Fun Bundler** – the most comprehensive self-bundling solution available!
