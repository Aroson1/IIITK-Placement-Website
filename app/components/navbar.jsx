export default function Navbar() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 10,
        paddingBottom: 10,
        background: "white",
        boxShadow: "0px 4px 40px rgba(0, 0, 0, 0.10)",
        justifyContent: "space-between",
        alignItems: "center",
        display: "inline-flex",
      }}
    >
      <div
        style={{
          color: "#198F1F",
          fontSize: 24,
          fontFamily: "Inter",
          fontWeight: "600",
          lineHeight: 32.77,
          wordWrap: "break-word",
        }}
      >
        Placement cell
      </div>
      <div
        style={{
          height: 45,
          paddingTop: 10,
          paddingBottom: 10,
          justifyContent: "space-between",
          alignItems: "center",
          display: "flex",
        }}
      >
        <div
          style={{
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 10,
            display: "flex",
          }}
        >
          <div
            style={{
              color: "#4A5568",
              fontSize: 16,
              fontFamily: "Inter",
              fontWeight: "500",
              lineHeight: 25,
              wordWrap: "break-word",
            }}
          >
            Home
          </div>
        </div>
        <div
          style={{
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 10,
            display: "flex",
          }}
        >
          <div
            style={{
              color: "#4A5568",
              fontSize: 16,
              fontFamily: "Inter",
              fontWeight: "500",
              lineHeight: 25,
              wordWrap: "break-word",
            }}
          >
            For Students
          </div>
        </div>
        <div
          style={{
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 10,
            display: "flex",
          }}
        >
          <div
            style={{
              color: "#4A5568",
              fontSize: 16,
              fontFamily: "Inter",
              fontWeight: "500",
              lineHeight: 25,
              wordWrap: "break-word",
            }}
          >
            For Recruiters
          </div>
        </div>
        <div
          style={{
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 10,
            display: "flex",
          }}
        >
          <div
            style={{
              color: "#4A5568",
              fontSize: 16,
              fontFamily: "Inter",
              fontWeight: "500",
              lineHeight: 25,
              wordWrap: "break-word",
            }}
          >
            About IIITK
          </div>
        </div>
        <div
          style={{
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 10,
            display: "flex",
          }}
        >
          <div
            style={{
              color: "#4A5568",
              fontSize: 16,
              fontFamily: "Inter",
              fontWeight: "500",
              lineHeight: 25,
              wordWrap: "break-word",
            }}
          >
            Contact Us
          </div>
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
          display: "flex",
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
          Login/Register
        </div>
      </div>
    </div>
  );
}
