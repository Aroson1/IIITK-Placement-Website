export default function Hero() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        paddingLeft: 45,
        paddingRight: 45,
        background:
          "linear-gradient(91deg, white 18%, white 44%, rgba(255, 255, 255, 0.62) 82%, rgba(255, 255, 255, 0.33) 93%, rgba(255, 255, 255, 0) 100%)",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 75,
        display: "inline-flex",
      }}
    >
      <div
        style={{
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 28,
          display: "flex",
        }}
      >
        <div>
          <span style="color: '#1A202C', fontSize: 45, fontFamily: 'Inter', fontWeight: '300', lineHeight: 71, wordWrap: 'break-word'">
            Welcome to IIITK{" "}
          </span>
          <span style="color: '#1A202C', fontSize: 53, fontFamily: 'Inter', fontWeight: '300', lineHeight: 71, wordWrap: 'break-word'">
            <br />
          </span>
          <span style="color: '#1A202C', fontSize: 53, fontFamily: 'Inter', fontWeight: '800', lineHeight: 71, wordWrap: 'break-word'">
            PLACEMENT CELL
          </span>
        </div>
        <div
          style={{
            width: 531,
            height: 58,
            color: "#4A5568",
            fontSize: 18,
            fontFamily: "Inter",
            fontWeight: "400",
            lineHeight: 36,
            wordWrap: "break-word",
          }}
        >
          Indian Institute of Information Technology Kottayam. <br />
          An Institute of National Importance.
        </div>
      </div>
      <div
        style={{
          paddingLeft: 25,
          paddingRight: 25,
          paddingTop: 14,
          paddingBottom: 14,
          background: "linear-gradient(225deg, #0B7F0F 0%, #73EF80 100%)",
          borderRadius: 5,
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
          display: "inline-flex",
        }}
      >
        <div
          style={{
            color: "#FAFAFA",
            fontSize: 14,
            fontFamily: "Inter",
            fontWeight: "600",
            lineHeight: 14,
            wordWrap: "break-word",
          }}
        >
          Contact Us{" "}
        </div>
      </div>
    </div>
  );
}
