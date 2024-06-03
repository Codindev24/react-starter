import { Home } from "./pages/Home";
import { useState, useEffect } from 'react';
import { createClient } from "@supabase/supabase-js";
//import Moment from 'react-moment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import Navbar from "./components/Navbar";
import Jan from "./months/Jan";
import Feb from "./months/Feb";
import Juni from "./months/Juni";
import Juli from "./months/Juli";
import "./sass/app.scss";

const supabase = createClient("https://hdqsavcxdnrqtzqpxofj.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkcXNhdmN4ZG5ycXR6cXB4b2ZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY2MzIxMTMsImV4cCI6MjAzMjIwODExM30.w_bEXaTKIARv-k9mEYx9y2MZqvtoiIsvv4iI6rXGAo8");

const created_at = 'Mm/DD/YY Hh:Mm';

function App() {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    getIdeas();
  }, []);

  async function getIdeas() {
    const { data } = await supabase.from("ideas").select();
    setIdeas(data);
  }

  return (
    <div className="app">

     <Navbar/>
     
    <div className="story flex justify-between">
     
    <div className="first">

    <h1>
     Started coding <br />
    <span>age 6</span> <br />
    <small><KeyboardIcon/>Sinclair Spectrum</small>
    </h1>

    </div>{/* .first */}

    <div className="middle">
    Main focus <br />
    <span>React, Next</span> <br />
    <small>Pocketbase, Supabase</small>
    </div>{/* .middle */}

    <div className="now">
    Started coding <br />
    <span>age 6</span> <br />
    <small>Sinclair Spectrum</small>
    </div>{/* .now */}

    </div>{/* .story */}

    <div className="ideasmain">

      <ul className="grid grid-cols-4">

        {ideas.map((idea) => (

          <li key={idea.id}>

           <div className="idea">

          <div className="card w-96 bg-base-100 shadow-xl">

         <figure><img src={idea.image} alt="Shoes" /></figure>
         
         <div className="card-body">

           <h2 className="card-title">
           <div className="badge badge-secondary">{idea.tag}</div>
             {idea.title}
           </h2>

           <p>{idea.desc}</p>

           <div className="collapse">
            <input type="checkbox" /> 
            <div className="collapse-title">
              Read more..
            </div>
            <div className="collapse-content"> 
            {idea.body}
            </div>
          </div>{/* .collapse */}

           <div className="card-actions justify-end">
             <div className="badge badge-outline">Fashion</div> 
             <div className="badge badge-outline">Products</div>
           </div>
           
         </div>
       </div>
            
            </div>{/* .idea */}

          </li>

        ))}
      </ul>
     </div>{/* .ideasmain */}

     <div className="calendar grid grid-cols-12">

        {/* <div><Jan/></div>
        <div><Feb/></div> */}
        <div><Juni/></div>
        <div><Juli/></div>

     </div>{/* .calendar */}

    </div>
  );
}

export default App;