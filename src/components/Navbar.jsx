import "../sass/navbar.scss";

export default function Navbar() {
 

  return (
    <div className="navbar flex justify-between">

        <div className="logo">
            <h1>C<span>odin</span>dev</h1>
        </div>{/* .logo */}

        <div className="middle">
            middle
        </div>{/* .middle */}

        <div className="end">
            end
        </div>{/* .end */}
      
    </div>
  );
}