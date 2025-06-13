import Link from "next/link"

export default function Home() {
  return (
    <div
      style={{
        position: "absolute",
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Link
        href="/NOC/NOC25/SEM1/Ecertificates/106/noc25-cs75/Course/NPTEL25CS75S243100662.pdf"
        target="_blank"
        style={{
          color: "white",
          backgroundColor: "#3070bf",
          padding: "10px 20px",
          borderRadius: "8px",
          textDecoration: "none",
          display: "inline-block",
          fontWeight: "500",
          fontFamily: "inherit",
          textAlign: "center",
          whiteSpace: "nowrap",
          width: "180px"
        }}
      >
        Course Certificate
      </Link>
    </div>
  )
}
