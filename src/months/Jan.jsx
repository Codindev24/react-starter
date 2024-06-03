import "../sass/months.scss";

export default function Jan() {
 

  return (
    <div className="jan">

       <div className="jan">

       <div className="overflow-x-hidden">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Janúar</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>Landsbankinn Lán <br />
            <span>58.000kr</span>
            </td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>2</th>
            <td>Rtx 4070 Gunni <br />
            <span>13.098kr</span>
            </td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>3</th>
            <td>Aukalán <br />
            <span>30.000kr</span>
            </td>
          </tr>
           {/* row 4 */}
           <tr>
            <th>4</th>
            <td>Aukalán <br />
            <span>30.000kr</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="alls">
        <span>Samt: 110.000kr</span>
      </div>{/* .alls */}
    </div>

       </div>{/* .jan */}
      
    </div>
  );
}