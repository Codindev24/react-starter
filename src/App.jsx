import { Home } from "./pages/Home";
import { useState, useEffect } from 'react';
import { createClient } from "@supabase/supabase-js";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./sass/app.scss";

const supabase = createClient("https://hdqsavcxdnrqtzqpxofj.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkcXNhdmN4ZG5ycXR6cXB4b2ZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY2MzIxMTMsImV4cCI6MjAzMjIwODExM30.w_bEXaTKIARv-k9mEYx9y2MZqvtoiIsvv4iI6rXGAo8");

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

      <ul>
        {ideas.map((idea) => (
          <li key={idea.title}>{idea.desc}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;