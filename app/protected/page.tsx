export default function ProtectedPage() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>🔒 Protected Content</h1>
      <p>
        This is a protected page using <b>x402 testnet</b>.
      </p>
      <p>
        You will see a 402 Payment Required message if payment is not completed.
      </p>
    </div>
  );
}
