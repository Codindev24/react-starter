import { Home } from "./pages/Home";
import { useState, useEffect } from 'react';
import { createClient } from "@supabase/supabase-js";
//import Moment from 'react-moment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
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
     
    <div className="aboveideasmain">
    <h1>THis is some text here..</h1>
    </div>{/* .aboveideasmain */}

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

    </div>
  );
}

export default App;