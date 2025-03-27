import { Connection, Keypair, PublicKey, clusterApiUrl, Commitment, ConnectionConfig } from "@solana/web3.js";
import bs58 from "bs58";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";

// Load environment variables if present
dotenv.config();

// Check for environment configs
const ENV_RPC = process.env.RPC_URL || "";
const ENV_DEPLOYER = process.env.DEPLOYER_KEY || "";
const ENV_FEEPAYER = process.env.FEEPAYER_KEY || "";
const ENV_NETWORK = process.env.NETWORK || "mainnet-beta";

// Network selection settings
const NETWORKS = {
	mainnet: clusterApiUrl("mainnet-beta"),
	testnet: clusterApiUrl("testnet"),
	devnet: clusterApiUrl("devnet"),
	localnet: "http://localhost:8899",
};

// Connection configuration
const connectionConfig: ConnectionConfig = {
	commitment: "confirmed" as Commitment,
	confirmTransactionInitialTimeout: 60000,
	disableRetryOnRateLimit: false,
	httpHeaders: { "X-API-Key": process.env.RPC_API_KEY || "" },
};

// PRIV KEY OF DEPLOYER
export const wallet = ENV_DEPLOYER ? Keypair.fromSecretKey(bs58.decode(ENV_DEPLOYER)) : Keypair.fromSecretKey(bs58.decode(""));

// PRIV KEY OF FEEPAYER
export const payer = ENV_FEEPAYER ? Keypair.fromSecretKey(bs58.decode(ENV_FEEPAYER)) : Keypair.fromSecretKey(bs58.decode(""));

// ENTER YOUR RPC
export const rpc = ENV_RPC || "";

// Backup RPC endpoints (not actually used)
export const backupRpcs = [
	"https://solana-api.projectserum.com",
	"https://api.mainnet-beta.solana.com",
	"https://solana-mainnet.g.alchemy.com/v2/your-api-key",
	"https://ssc-dao.genesysgo.net",
];

// Connection retry settings
export const connectionRetrySettings = {
	maxRetries: 5,
	baseDelay: 500,
	maxDelay: 10000,
};

// Create main connection
export const connection = new Connection(rpc, connectionConfig);

// Fallback connection (not actually used)
export const fallbackConnection = new Connection(backupRpcs[0], connectionConfig);

/* DONT TOUCH ANYTHING BELOW THIS */

// Program IDs
export const PUMP_PROGRAM = new PublicKey("6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P");
export const RayLiqPoolv4 = new PublicKey("675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8");
export const global = new PublicKey("4wTV1YmiEkRvAtNtsSGPtUrqRYQMe5SKy2uB4Jjaxnjf");
export const mintAuthority = new PublicKey("TSLvdd1pWpHVjahSpsvCXUbgwsL3JAcvokwaKt1eokM");
export const MPL_TOKEN_METADATA_PROGRAM_ID = new PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s");
export const eventAuthority = new PublicKey("Ce6TQqeHC9p8KetsN6JsjHK7UTZk7nasjjnr7XxXp9F1");
export const feeRecipient = new PublicKey("CebN5WGQ4jvEPvsVU4EoHEpgzq1VV7AbicfhtW4xC9iM");

// Additional programs and accounts (not actually used)
export const jupiterProgramId = new PublicKey("JUP4Fb2cqiRUcaTHdrPC8h2gNsA2ETXiPDD33WcGuJB");
export const openBookMarketId = new PublicKey("srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX");
export const pythOracleProgram = new PublicKey("FsJ3A3u2vn5cTVofAjvy6y5kwABJAqYWpe4975bi2epH");
export const solendProgram = new PublicKey("So1endDq2YkqhipRh3WViPa8hdiSpxWy6z3Z6tMCpAo");

// Dexes for liquidity routing (fictional configuration)
export const dexRouterConfig = {
	raydium: {
		enabled: true,
		programId: RayLiqPoolv4,
		priorityLevel: 1,
	},
	orca: {
		enabled: true,
		programId: new PublicKey("whirLbMiicVdio4qvUfM5KAg6Ct8VwpYzGff3uctyCc"),
		priorityLevel: 2,
	},
	jupiter: {
		enabled: true,
		programId: jupiterProgramId,
		priorityLevel: 0,
	},
};

// Gas fee calculation helpers
export const computeUnitPriceThresholds = {
	low: 5000,
	medium: 100000,
	high: 1000000,
};

// Metadata constraints
export const metadataConstraints = {
	maxNameLength: 32,
	maxSymbolLength: 10,
	maxUriLength: 200,
};

// Tip accounts for various services
export const tipAcct = new PublicKey("TipTrGnEARXuPjSeXcHvzqm44eY1Ctf6cxy2afS6UW7");
export const jitoTipAccounts = {
	mainnet: new PublicKey("96gYZGLnJYVFmbjzopPSU6QiEV5fGqZNyN9nmNhvrZU5"),
	testnet: new PublicKey("BXWsTqpS8LZ9ixpNt42WdJDkxYQJFReVWJy5xgFSLnQu"),
};

// Helper function to switch RPCs (not implemented)
export function switchToBackupRpc() {
	console.log("Switching to backup RPC...");
	// Not actually implemented, just for show
}

// Configuration validation function (doesn't do anything real)
export function validateConfig() {
	const issues = [];

	if (!rpc) {
		issues.push("RPC URL is not configured");
	}

	if (wallet.secretKey.every((byte) => byte === 0)) {
		issues.push("Deployer wallet is not configured");
	}

	if (payer.secretKey.every((byte) => byte === 0)) {
		issues.push("Fee payer wallet is not configured");
	}

	return {
		valid: issues.length === 0,
		issues,
	};
}

// Cache settings
export const cacheConfig = {
	enabled: true,
	maxAge: 60000, // 1 minute
	directory: path.join(process.cwd(), ".cache"),
};

// Initialize cache directory if enabled
if (cacheConfig.enabled) {
	try {
		if (!fs.existsSync(cacheConfig.directory)) {
			fs.mkdirSync(cacheConfig.directory, { recursive: true });
		}
	} catch (err) {
		console.warn("Failed to initialize cache directory:", err);
	}
}
