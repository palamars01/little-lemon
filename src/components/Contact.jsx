export function Contact() {
  return (
    <section
      style={{
        height: "calc(100vh - 75px - 90px)",
        padding: "15px",
        fontSize: "18px",
      }}
    >
      <div style={{ height: "100", width: "100%" }}>
        <div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <p>Address: 123 Street, Sacramento,CA</p>
            <p>Phone number: (555) 123-4567</p>
            <p>Email: info@littlelemon.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
