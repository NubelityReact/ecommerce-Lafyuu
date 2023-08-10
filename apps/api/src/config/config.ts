import dotenv from "dotenv";
import nPath from "path";

const path = nPath.resolve(__dirname, "../../.env.local");
dotenv.config({ path });

const config = {
  port: process.env.PORT || 5000,
};

export default config;
