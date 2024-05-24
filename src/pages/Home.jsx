import { useState } from "react";
import { useUser } from "../lib/context/user";
import { useIdeas } from "../lib/context/ideas";
import "../sass/home.scss";

export function Home() {
  const user = useUser();
  const ideas = useIdeas();
  console.log(user);
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleDelete = async () => {
    db.ideas.delete(idea.$id)
    setIdeas((prevState) => prevState.filter((i) => i.$id !== idea.$id))
   }

  return (
    <div className="home">
      {/* Show the submit form to logged in users. */}
      {user.current ? (
        <section className="flex justify-center">

        <h2>Submit Idea</h2>

          <form>

           <div className="newpost">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
            <textarea
              placeholder="Description"
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
            <button
              type="button"
              onClick={() =>
                ideas.add({ userId: user.current.$id, title, description })
              }
            >
              Submit
            </button>
           </div>{/* .newpost */}

          </form>
        </section>
      ) : (
        <section>
          <p>Please login to submit an idea.</p>
        </section>
      )}
      <section>
        <h2>Latest Ideas</h2>
        <ul>
          {ideas && ideas.current.map((idea) => (
            <li key={idea.$id}>
              <strong>{idea.title}</strong>
              <p>{idea.description}</p>
              {/* Show the remove button to idea owner. */}
              
              {user.current && user.current.$id === idea.userId && (
                <button type="button" onClick={() => ideas.remove(idea.$id)}>
                  Remove
                </button>
              )}

            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}