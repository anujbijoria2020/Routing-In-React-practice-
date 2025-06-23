import React from 'react';
import { useState,useEffect } from 'react';
import {BrowserRouter,Routes,Route,Link,Outlet,useLocation} from 'react-router-dom'
// import { Header } from './Components';

export default function App(){
return(
  <React.Fragment>
  <BrowserRouter>
  <Routes>
<Route path='/' element={<Layout/>}>

    <Route index element={<Home/>}/>
    <Route path='/courses/class-11' element={<Class11/>} />
    <Route path='/courses/class-12' element={<Class12/>} />
    <Route path='/courses/jee' element={<JEE/>}/>
    <Route path='/courses/neet' element={<NEET/>}/>
    <Route path='/syllabus/jee' element={<JEE_SYLLABUS/>}/>
    <Route path="/syllabus/neet" element={<NEET_SYLLABUS/>}/>
    <Route path="/login" element={<Login/>}/>

    <Route path='*' element={<ERROR_PAGE/>}/>

</Route>
  </Routes>
  </BrowserRouter>
</React.Fragment>
)
}

function Layout(){
  const location = useLocation();

return(
  <React.Fragment>
  <Header/>
  <Outlet/>
{location.pathname === '/login' ? null : <Footer />}
</React.Fragment>
)
}

 function Header() {
  return (
    <header
      style={{
        width: "100vw",
        maxHeight: "15vh",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <nav style={{ width: "90%" }}>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: 0,
            padding: 0,
            position: "relative",
          }}
        >
          <li>
            <Link to={"/"}>
              <img
                src="https://images.seeklogo.com/logo-png/48/1/allen-career-institute-logo-png_seeklogo-482569.png"
                style={{ height: "12vh", cursor: "pointer" }}
                alt="Allen Logo"
              />
            </Link>
          </li>

          {/* Courses */}
          <li className="dropdown" style={{ position: "relative", cursor: "pointer" }}>
            Courses
            <ul className="dropdown-content">
              <li><Link to="/courses/class-11">Class-11</Link></li>
              <li><Link to="/courses/class-12">Class-12</Link></li>
              <li><Link to="/courses/jee">JEE</Link></li>
              <li><Link to="/courses/neet">NEET</Link></li>
            </ul>
          </li>

          {/* Syllabus */}
          <li className="dropdown" style={{ position: "relative", cursor: "pointer" }}>
            Syllabus
            <ul className="dropdown-content">
              <li><Link to="/syllabus/jee">JEE Syllabus</Link></li>
              <li><Link to="/syllabus/neet">NEET Syllabus</Link></li>
            </ul>
          </li>

          <li>
        <Link to={"/login"}>    <button
              style={{
                backgroundColor: "white",
                border: "3px solid lightgreen",
                borderRadius: "10px",
                width: "80px",
                height: "30px",
                fontWeight: "600",
                cursor: "pointer",
              }}>
              Login
            </button></Link>
          </li>
        </ul>
      </nav>

      {/* CSS for hover dropdown */}
      <style>{`
        .dropdown-content {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          background-color: rgba(255,255,255,0.5);
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
          list-style: none;
          padding: 10px;
          margin: 0;
          z-index: 1000;
          border: 1px solid green;
          border-radius: 10px;
        }

        .dropdown:hover .dropdown-content {
          display: block;
        }

        .dropdown-content li {
          padding: 8px 12px;
          white-space: nowrap;
        }

        .dropdown-content li:hover {
          background-color:rgba(187, 187, 187, 0.67);
          border: 1px solid green;
          border-radius: 10px;
        }

        .dropdown-content a {
          text-decoration: none;
          color: black;
        }
      `}</style>
    </header>
  );
}


function Home() {
  return( <>
  <ImageSliderComponent />
  <GetInTouch/>
  </>);
}

function ImageSliderComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageUrls = [
    "https://res.cloudinary.com/dpzpn3dkw/image/upload/v1750412146/jyxruqtkomfq60vvp7ss.png",
    "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1750412146/jyxruqtkomfq60vvp7ss.png?_upload_ref=ic_img_tool&__ar__=3.16",
    "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1750412255/x2lfijvz3ndbip6sbeke.png?_upload_ref=ic_img_tool&__ar__=3.16",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev =>
        prev === imageUrls.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [imageUrls.length]);

  const scrollLeft = () => {
    setCurrentIndex(prev =>
      prev === 0 ? imageUrls.length - 1 : prev - 1
    );
  };

  const scrollRight = () => {
    setCurrentIndex(prev =>
      prev === imageUrls.length - 1 ? 0 : prev + 1
    );
  };

  const btnStyle = {
    position: "absolute",
    zIndex: 10,
    background: "white",
    border: "2px solid lightgray",
    borderRadius: "50%",
    padding: "10px",
    cursor: "pointer",
    top: "50%",
    transform: "translateY(-50%)",
  };

  return (
<div
  style={{
    height: "60vh",
    width: "100vw",
    backgroundColor: "#f1f5fb",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  }}
>
  <button onClick={scrollLeft} style={{ ...btnStyle, left: 10 }}>◀</button>

  
  <div style={{ width: "80vw", overflow: "hidden", height: "100%" }}>
 
    <div
      style={{
        display: "flex",
        height: "100%",
        transition: "transform 0.5s ease-in-out",
        transform: `translateX(-${currentIndex * 100}%)`,
      }}
    >
      {imageUrls.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          style={{
            width: "80vw",
            height: "100%",
            objectFit: "contain",
            flexShrink: 0,
          }}
        />
      ))}
    </div>
  </div>

  <button onClick={scrollRight} style={{ ...btnStyle, right: 10 }}>▶</button>
</div>

  );
}

function GetInTouch() {
  const inputStyle = {
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "14px",
  outline: "none",
  backgroundColor: "#fff",
};
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 20px",
        margin: "5% auto",
        backgroundColor: "#f9f9f9",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "400px",
          backgroundColor: "rgba(189, 167, 167, 0.15)",
          border: "2px solid rgba(0, 0, 0, 0.2)",
          borderRadius: "20px",
          padding: "30px 20px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h3 style={{ textAlign: "center", marginBottom: "20px" }}>Get In Touch</h3>

        <form style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <label htmlFor="name" style={{ fontWeight: "bold" }}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            style={inputStyle}
          />

          <label htmlFor="contact" style={{ fontWeight: "bold" }}>
            Contact:
          </label>
          <input
            type="text"
            id="contact"
            placeholder="Phone or Email"
            style={inputStyle}
          />

          <label htmlFor="query" style={{ fontWeight: "bold" }}>
            Query:
          </label>
          <textarea
            id="query"
            rows="2"
            placeholder="Type your message here"
            style={{...inputStyle, resize: "vertical" }}
          />

          <button
            type="submit"
            style={{
              marginTop: "10px",
              padding: "10px",
              backgroundColor: "#4caf50",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

function Class11() {
  return (
    <div
      style={{
        minHeight: "80vh",
        backgroundColor: "#f1f5fb",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          maxWidth: "600px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#2e7d32", marginBottom: "20px" }}>Class 11 Courses</h2>
        <p style={{ fontSize: "16px", color: "#444" }}>
          Welcome to the Class 11 section. Here you can explore JEE/NEET foundation courses,
          topic-wise breakdowns, and test series to boost your preparation.
        </p>

        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#4caf50",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Explore Courses
        </button>
      </div>
    </div>
  );
}



function Class12() {
  return (
    <div
      style={{
        minHeight: "80vh",
        backgroundColor: "#f1f5fb",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          maxWidth: "600px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#2e7d32", marginBottom: "20px" }}>Class 12 Courses</h2>
        <p style={{ fontSize: "16px", color: "#444" }}>
          Welcome to the Class 12 section. Here you can explore JEE/NEET foundation courses,
          topic-wise breakdowns, and test series to boost your preparation.
        </p>

        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#4caf50",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Explore Courses
        </button>
      </div>
    </div>
  );
}


function JEE() {
  return (
    <div
      style={{
        minHeight: "80vh",
        backgroundColor: "#f1f5fb",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          maxWidth: "600px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#2e7d32", marginBottom: "20px" }}>JEE Courses</h2>
        <p style={{ fontSize: "16px", color: "#444" }}>
          Welcome to the JEE section. Here you can explore JEE/NEET foundation courses,
          topic-wise breakdowns, and test series to boost your preparation.
        </p>

        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#4caf50",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Explore Courses
        </button>
      </div>
    </div>
  );
}


function NEET() {
  return (
    <div
      style={{
        minHeight: "80vh",
        backgroundColor: "#f1f5fb",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          maxWidth: "600px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#2e7d32", marginBottom: "20px" }}>NEET Courses</h2>
        <p style={{ fontSize: "16px", color: "#444" }}>
          Welcome to the NEET section. Here you can explore JEE/NEET foundation courses,
          topic-wise breakdowns, and test series to boost your preparation.
        </p>

        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#4caf50",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Explore Courses
        </button>
      </div>
    </div>
  );
}


function JEE_SYLLABUS() {
  return (
    <div
      style={{
        minHeight: "80vh",
        backgroundColor: "#f1f5fb",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          maxWidth: "600px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#2e7d32", marginBottom: "20px" }}>JEE Syllabus</h2>
        <p style={{ fontSize: "16px", color: "#444" }}>
          The JEE syllabus includes Physics, Chemistry, and Mathematics from Class 11 and 12. Explore topic-wise breakdown and key concepts.
        </p>
        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#4caf50",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          View Details
        </button>
      </div>
    </div>
  );
}

 function NEET_SYLLABUS() {
  return (
    <div
      style={{
        minHeight: "80vh",
        backgroundColor: "#f1f5fb",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          maxWidth: "600px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#2e7d32", marginBottom: "20px" }}>NEET Syllabus</h2>
        <p style={{ fontSize: "16px", color: "#444" }}>
          NEET syllabus covers Physics, Chemistry, and Biology (Botany + Zoology). Get chapter breakdowns and NCERT-aligned content here.
        </p>
        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#4caf50",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          View Details
        </button>
      </div>
    </div>
  );
}


 function Login() {
  return (
    <div
      style={{
        minHeight: "80vh",
        backgroundColor: "#f1f5fb",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#2e7d32", marginBottom: "20px" }}>Login</h2>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              fontSize: "14px",
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              fontSize: "14px",
            }}
          />
        </div>

        <button
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#4caf50",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Log In
        </button>
      </div>
    </div>
  );
}

 function ERROR_PAGE() {
  return (
    <div
      style={{
        minHeight: "80vh",
        backgroundColor: "#fdf2f2",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "#b91c1c",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "60px", margin: 0 }}>404</h1>
      <h2 style={{ fontSize: "24px", margin: "10px 0" }}>Oops! Page Not Found</h2>
      <p style={{ fontSize: "16px", color: "#7f1d1d", maxWidth: "400px" }}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <a
        href="/"
        style={{
          marginTop: "20px",
          textDecoration: "none",
          backgroundColor: "#dc2626",
          color: "white",
          padding: "10px 20px",
          borderRadius: "8px",
          fontWeight: "bold",
        }}
      >
        Go Back Home
      </a>
    </div>
  );
}


 function Footer() {
  const ulStyle = {
  listStyle: "none",
  padding: 0,
  lineHeight: "1.8",
};

  return (
    <footer
      style={{
        width: "100vw",
        boxSizing: "border-box",
        padding: "40px 5%",
        backgroundColor: "#f1f5fb",
        fontFamily: "Arial, sans-serif",
        color: "#333",
        fontSize: "14px",
      
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "40px",
        }}
      >
        {/* Column 1 - About */}
        <div>
          <h4>About</h4>
          <ul style={ulStyle}>
            <li>About us</li>
            <li>Blog</li>
            <li>News</li>
            <li>MyExam EduBlogs</li>
            <li>Privacy policy</li>
            <li>Public notice</li>
            <li>Careers</li>
            <li>Dhoni Inspires NEET Aspirants</li>
            <li>Dhoni Inspires JEE Aspirants</li>
          </ul>
        </div>

        {/* Column 2 - Help & Support */}
        <div>
          <h4>Help & Support</h4>
          <ul style={ulStyle}>
            <li>Refund policy</li>
            <li>Transfer policy</li>
            <li>Terms & Conditions</li>
            <li>Contact us</li>
          </ul>
        </div>

        {/* Column 3 - Popular Goals */}
        <div>
          <h4>Popular goals</h4>
          <ul style={ulStyle}>
            <li>NEET Coaching</li>
            <li>JEE Coaching</li>
            <li>6th to 10th</li>
          </ul>
        </div>

        {/* Column 4 - Courses */}
        <div>
          <h4>Courses</h4>
          <ul style={ulStyle}>
            <li>Online Courses</li>
            <li>Distance Learning</li>
            <li>Online Test Series</li>
            <li>International Olympiads Online Course</li>
            <li>NEET Test Series</li>
            <li>JEE Test Series</li>
            <li>JEE Main Test Series</li>
          </ul>
        </div>

        {/* Column 5 - Centers */}
        <div>
          <h4>Centers</h4>
          <ul style={ulStyle}>
            <li>Kota</li>
            <li>Bangalore</li>
            <li>Indore</li>
            <li>Delhi</li>
            <li>More centres</li>
          </ul>
        </div>

        {/* Column 6 - Exam Info */}
        <div>
          <h4>Exam information</h4>
          <ul style={ulStyle}>
            <li>JEE Main</li>
            <li>JEE Advanced</li>
            <li>NEET UG</li>
            <li>CBSE</li>
            <li>NCERT Solutions</li>
            <li>Olympiad</li>
            <li>NEET 2025 Results</li>
            <li>NEET 2025 Answer Key</li>
            <li>NEET College Predictor</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div
        style={{
          marginTop: "40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", gap: "10px" }}>
          {/* Replace with real icons or use FontAwesome */}
          <span>📺</span>
          <span>📘</span>
          <span>📷</span>
          <span>🐦</span>
          <span>💼</span>
        </div>
        <p>ALLEN Career Institute Pvt. Ltd. © All Rights Reserved.</p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/ISO_9001-2000.svg/2048px-ISO_9001-2000.svg.png"
          alt="ISO logo"
          style={{ height: "40px" }}
        />
      </div>
    </footer>
  );
}

