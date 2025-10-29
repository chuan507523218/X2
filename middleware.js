import { paymentMiddleware } from "x402-next";
import { facilitator } from "@coinbase/x402"; // ✅ 主网facilitator

console.log("🔑 Coinbase API Key ID:", process.env.CDP_API_KEY_ID);


export const middleware = paymentMiddleware(
  "0x8b12a3c1AC1D1356cB24A642daFCA8f0f60cDeF2", // ✅ 可接收USDC的钱包
  {
    "/protected": {
      price: "$1",
      network: "base", // ✅ base主网
    },
  },
  facilitator // ✅ 不再用 { url: ... }
);

export const config = {
  matcher: ["/protected", "/protected/:path*"],
};

