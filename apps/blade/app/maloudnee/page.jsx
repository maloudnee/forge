export default function Page() {
  return (
    <div
    style={{
      minHeight: "100vh",
      backgroundImage: "url('/senku-tile.png')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundColor: "#9ac09f",
      padding: 18,
    }}
    >
      <div style={{
        width: "100%",
        height: 150,
        margin: "0 auto",
        backgroundImage: "url('/Kohaku.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        border: "8px solid #585f4b",
        borderRadius: 12,
      }}
      >
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "220px 1fr 260px",
        gap: 12,
        padding: 12
      }}
      >
        <aside style={{
          border: "6px solid #585f4b",
          borderRadius: 8,
          padding: 10,
          backgroundColor: "#efedd6"
        }}
        >
          <strong>links</strong>
          <div style={{ 
            marginTop: 8,
            display: "grid",
            gap: 6
          }}>
            <a href="https://www.linkedin.com/in/maloudneemarcier/" target="_blank" rel="noreferrer" style={{
              display: "block",
              padding: "6px 10px",
              border: "2px solid #585f4b",
              background: "#efedd6",
              color: "#000",
              fontSize: 13,
              textDecoration: "none",
              marginBottom: 6,
            }}>linkedin</a>
            <a href="https://github.com/maloudnee" target="_blank" rel="noreferrer" style={{
              display: "block",
              padding: "6px 10px",
              border: "2px solid #585f4b",
              background: "#efedd6",
              color: "#000",
              fontSize: 13,
              textDecoration: "none",
              marginBottom: 6,
            }}>github</a>
            <a href="https://marcier.dev/" target="_blank" rel="noreferrer" style={{
              display: "block",
              padding: "6px 10px",
              border: "2px solid #585f4b",
              background: "#efedd6",
              color: "#000",
              fontSize: 13,
              textDecoration: "none",
              marginBottom: 6,
            }}>portfolio</a>
            <a href="/my-resume.pdf" target="_blank" rel="noreferrer" style={{
              display: "block",
              padding: "6px 10px",
              border: "2px solid #585f4b",
              background: "#efedd6",
              color: "#000",
              fontSize: 13,
              textDecoration: "none",
              marginBottom: 6,
            }}>resume</a>
          </div>

          <hr style={{
            margin: "13px 0",
            borderColor: "#585f4b",
          }} />
          <div style={{
            border: "2px solid ##585f4b",
            padding: 8,
            fontSize: 13,
            backgroundColor: "#efedd6"
          }}>
            <strong>my interests..</strong>
            <p style={{ 
              marginTop: 6 
              }}>
                well i love sleeping, reading, animanga, learning, travelling, cats, and ofc coding.<br />
                i've decided to start learning french and i can understand it more and more everyday, but speaking it? haha no.<br />
                oh as for coding, im into frontend and backend, love the designing that comes with frontend, love the data handling that comes with backend.
            </p>
          </div>

          <hr style={{
            margin: "13px 0",
            borderColor: "#585f4b"
          }}/>

          <img src='/conquered.png' alt="volcano" style={{ width: "100%", border: "2px solid #585f4b", borderRadius: 4}}/>
        </aside>
        <div style={{
          border: "6px solid #585f4b",
          borderRadius: 8,
          background: "#efedd6",
          padding: 12,
        }}
        >
          <div id="intro" style={{
            gridColumn: "span 2",
            border: "2px solid #585f4b",
            background: "#efedd6",
            padding: 10,
            display: "grid",
            gridTemplateColumns: "160px 1fr",
            gap: 12,
            alignItems: "center",
          }}
          >
            <img src="/me.png" alt="me" style={{
              width: "100%",
              height: 160,
              objectFit: "cover",
              border: "2px solid #585f4b",
              borderRadius: 4,
              display: "block",
            }}/>

            <div>
              <strong style={{ fontSize: 16}}>hi, i'm mal ...</strong>
              <p style={{
                marginTop: 6,
                fontSize: 13,
              }}>
                oh my full nme is maloudnee, pronounced ma-lood-knee. <br />
                i'm a haitan-american cs student who loves coding and learning new things. <br />
                i graduate december 2026, or well thats the plan .. <br />
                idk im not really much of a talker -_-
              </p>
            </div>

            <div style={{
              gridRow: "span 3",
              border: "2px solid #585f4b",
              background: "#efedd6",
              padding: 10,
            }}
            >
              <strong> why dev team .. </strong>
              <p style={{
                marginTop: 6,
                fontSize: 13,
                lineHeight: 1.4,
              }}>
                i want to experience contribution to a real codebase with other developers, <br />
                so i can overall improve my skills as a developer, <br />
                shaping me into becoming a great engineer. i believe by joining dev team <br />
                i can learn more and grow faster. <br />
                also, probaly a good idea to get out of the loner <br />
                mindset i have since thats not plausible in the real world. 
              </p>
            </div>
            <div style={{
              border: "2px solid #585f4b",
              background: "#efedd6",
              padding: 10,
            }}
            >
              <strong> more stuff ..</strong>
              <p style={{
                marginTop: 6,
                fontSize: 13,
                lineHeight: 1.4,
              }}>
                i'm a pretty fast learner, and strangely enough i love debugging .. <br />
                for software development i love love love python duh, getting into sql and i love that too .. <br />
                i prefer managing data, though i do love designing amd coding my designs to life. <br />
                so i guess that means i love fullstack development? <br />
                umm here are my top three languages:
              </p>
              <img src="/blahblahblah.png" alt="langs" style={{ width: "100%", border: "2px solid #585f4b", borderRadius: 4}}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
