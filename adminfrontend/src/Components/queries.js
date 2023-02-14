import { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import { queries } from "@testing-library/react";

function Home() {

  const [Feedback, setFeedback] = useState([]);


  useEffect(() => {
    getFeedback();
  }, []);

  const getFeedback = async () => {
    let result = await fetch("http://localhost:5000/queries");
    result = await result.json();
    setFeedback(result);
  };

  return (
    <>
    <h1 className="feedback" style={{"color":"rgb(22,201,249)", textAlign:"center", marginTop:"5vh"}}> Feedback</h1>
      <div style={{ width: "90%", margin: " auto" }} >
        <div className="row m-3"  >
          {Feedback.map((item, index) => (
            <>
              <div class="col-sm-4 my-2 ">
                <div class="card bg-light" style={{ borderRadius: "10px", marginLeft: "10px", marginTop: "10px", minHeight: "145px" , border:"3px solid rgb(172,235,253)"}} >
                  <div class="card-body" >
                    <h5 class="card-title">Name :  {item.name}</h5>
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
      </div>

    </>
  );
}

export default Home;
