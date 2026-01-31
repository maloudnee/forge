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
                oh my full name is maloudnee, pronounced ma-lood-knee. <br />
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
                so im into fullstack development <br />
              </p>
            </div>
            <img
              src="/kohaku.gif"
              alt="kohaku"
              style={{
                width: "100%",
                height: 200,
                marginTop: 8,
                border: "2px solid #585f4b",
                display: "block",
              }}
            />
          </div>
        </div>
          <aside style={{
            marginTop: 12,
            border: "2px solid #585f4b",
            background: "#efedd6",
            padding: 10,
          }}
          >
            <div style={{
              border: "2px solid #585f4b",
              background: "#efedd6",
              padding: 10,
            }}>
              <strong> get excited !! </strong>
              <div style={{
                marginTop: 6,
                position: "relative",
                paddingBottom: "30%",
                height: 0,
                overflow: "hidden",
                border: "2px solid #585f4b",
              }}>
                <iframe 
                src="https://www.youtube.com/embed/fkAL_LeCsZs?si=RBWKKDLw9ws9NI3C" 
                title="Dr Stone Opening 2" 
                width="100%"
                height="80"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                >
                </iframe>
              </div>
            </div>

            <div
            style={{
              border: "2px solid #585f4b",
              background: "#efedd6",
              padding: 8,
              textAlign: "center",
            }}
          >
            <strong> my glorius king Senku </strong>
            <img
              src="/senku.gif"
              alt="senku ishigami"
              style={{
                width: "100%",
                marginTop: 8,
                border: "2px solid #585f4b",
                display: "block",
              }}
            />
          <strong> go watch dr stone if you havent  ⊙ _ ⊙  </strong>
          <p 
          style={{ marginTop: 6, fontSize: 13 
          }}>
            yes i decided to just make this a dr stone themed page cuz why not <br />
            senku is my second favorite anime character of all time, right after luffy <br />
          </p>
          </div>
          <div style={{
            marginTop: 12,
            border: "2px solid #585f4b",
            background: "#efedd6",
            padding: 10,
          }}>
            <strong> half-aihh synopsis </strong>
            <p style={{ marginTop: 6, fontSize: 13 }}>
              As for what this anime is about, world basically ends, like all living beings are turned into stone statues. <br />
              Then here comes this insane kid who has been counting the seconds since he's been petrified, <br />
              thousands of years later he's unpetrified thanks to the power of bat poop. <br />
              Now, he's on a mission to rebuild civilization with the power of science <br />
              This was actually one of the first mangas I started collecting when I got into anime/manga <br />
              I am like wayyyy behind on it though because well life. <br />
              Anyways yeah, go watch it its super good !!
            </p>
          </div>
          </aside>
      </div>
    </div>
  );
}
