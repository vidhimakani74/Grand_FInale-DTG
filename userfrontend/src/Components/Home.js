  import { useState ,useEffect} from "react";
  import { Link } from "react-router-dom";
  import CardGroup from 'react-bootstrap/CardGroup';
  import Card from 'react-bootstrap/Card';

  function Home() {
    const [name, setName] = useState("");
    const [number,setNumber] = useState("");
    const [msg, setMsg] = useState("");
    const [Feedback, setFeedback] = useState([]);
    const collectData = async () => {
      const result = await fetch("http://localhost:5000/queries", {
        method: "post",
        body: JSON.stringify({
          name,
          number,
          msg,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(name);  
    };

    // useEffect(() => {
    //   getFeedback();
    // }, []);

    // const getFeedback = async () => {
    //   let result = await fetch("http://localhost:5000/queries");
    //   result = await result.json();
    //   setFeedback(result);
    // };

    return (
      <>
        {/* carosoul */}
        <div
          id="carouselExampleCaptions"
          className="carousel slide mt-5 cdiv"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="2000">
              <img
                src="https://img.freepik.com/free-vector/men-women-standing-long-queue-reception-3d-isometric-illustration_1284-55195.jpg?w=2000"
                className="d-block cimg "
                alt="..."
              />
            
            </div>
            
            
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src="https://altezatel.com/public/images/token-system.webp"
                className="d-block cimg"
                alt="..."
              />
            
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <section
          className="text-center my-5 py-5"
          style={{ backgroundColor: "#87CEFA" }}
        >
          <div className="container">
            <h1 style={{ fontSize: "25px" }}>
            Tired of waiting in a Queue for your turn?<br></br>
            Here's a solution for it!! Generate Token
            </h1>
            <p>
              <button type="button" className="btn btn-dark finddr mx-3 mt-3 ">
              
                <Link to={"/services"}>Generate Token</Link>
              </button>
            
            </p>
          </div>
        </section>

        <div id="faqs" class="container">
          <div class="row mb-4">
            <div class="col-9 mx-auto py-5 mb-3">
              <h4 class="text-center mt-2 mb-4 display-6">FAQs</h4>

              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item border">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      How to generate the token?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                    For generating token, you just need to select the service and enter contact number, you can get an email of token number and time slot with necessary document.
                    </div>
                  </div>
                </div>
                <div class="accordion-item border">
                  <h2 class="accordion-header" id="flush-headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      How we can come to know whether our token is generated or not?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                    If you get an email with token number from e-Jan Seva Kendra, that means your token is generated.{" "}
                    </div>
                  </div>
                </div>
                <div class="accordion-item border">
                  <h2 class="accordion-header" id="flush-headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                    Why Jan Seva Kendra CSC service portal?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                    Jan Seva Kendra CSC Services Portal is an organization with the aim of providing better services, management solutions and financial solutions to the e-governance kiosk, educational institutes, etc. In pan India. At bg techno solutions, customer satisfaction is the top priority. 
                    </div>
                  </div>
                </div>
                <div class="accordion-item border">
                  <h2 class="accordion-header" id="flush-headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                    Why we should use the website?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                    In order to save time, we can use the website. We just need to choose service. just after doing this, we can enter mobile number , get OTP and time slot and necessary document via mail . This way we can save our time and also get to know which document we should carry along with us. 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* <h2 className="doctorlist"> Feedback</h2>
        <div style={{ width: "90%", margin: " auto" }} >
          <div className="row m-3"  >
            {Feedback.map((item, index) => (
              <>
                <div class="col-sm-4 my-2 ">
                  <div class="card bg-light" style={{ borderRadius: "2%", marginLeft: "10px", marginTop: "10px", minHeight: "145px" }} >
                    <div class="card-body" >
                      <h5 class="card-title"> {item.name}</h5>
                      <p class="card-text">
                      Number : {item.number}<br></br>
                      Msg : {item.msg}

                      </p>

                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div> */}

        <div class="container-fluid bg-dark text-white p-5">
          <div class="container">
            <div class="row justify-content-evenly py-3">
              <div class="col-md-6 col-10 mt-5 mb-3 ">
                <i className="fas fa-clipboard-list fa-2x"></i>{" "}
                <span className="fs-3">Digital Token Generation!</span>
                <div class="container-fluid">
                  <p class=" pt-2">
                    Designed by Digital Token Generation Team
                  </p>
                </div>
              </div>
              
              <div class="col-md-3 col-10">
                <h5 class="pb-2">Feedback Form</h5>
                <p>
                  <form class="row g-3">
                    <div class="col-md-6">
                      <label class="form-label">Name</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        class="form-control"
                        required
                      />
                    </div>
                    <div class="col-md-6">
                      <label class="form-label">Contact Number</label>
                      <input
                        type="text"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        class="form-control"
                        required
                      />
                    </div>
                    <div class="col-md-12">
                      <label class="form-label">Message</label>

                      <input
                        type="textarea"
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                        class="form-control"
                        style={{ height: "50px" }}
                        required
                      />
                    </div>

                    <div class="col-12">
                      <button
                        class="btn btn-primary"
                        onClick={collectData}
                        type="submit"
                      >
                        Send Feedback
                      </button>
                    </div>
                  </form>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  export default Home;
