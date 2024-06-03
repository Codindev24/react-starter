import "../sass/months.scss";

export default function Juni() {
 

  return (
    <div className="juni">

       <div className="juni">

       <div className="overflow-x-hidden">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Júni</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th className="minus">-</th>
            <td>Rtx 4070 Gunni <br />
            <span className="minus">12.500<small>kr</small></span>
            </td>
          </tr>
           {/* row 2 */}
           <tr>
            <th className="minus">-</th>
            <td>Vextir Lán <br />
            <span className="minus">366.231<small>kr</small></span>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="alls">
        <span><span className="borga">Pay: 378.731<small>kr</small></span> <br />
        <span className="gain">Gain: 0<small>kr</small></span>
        </span>
      </div>{/* .alls */}
    </div>

       </div>{/* .juni */}
      
    </div>
  );
}