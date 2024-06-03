import "../sass/months.scss";

export default function Juli() {
 

  return (
    <div className="juli">

       <div className="juli">

       <div className="overflow-x-hidden">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Júlí</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th className="minus">-</th>
            <td>LB Lán <br />
            <span className="minus">58.000<small>kr</small></span>
            </td>
          </tr>
          {/* row 2 */}
          <tr>
            <th className="minus">-</th>
            <td>Rtx 4070 Gunni <br />
            <span className="minus">12.500<small>kr</small></span>
            </td>
          </tr>
           {/* row 3 */}
           <tr>
            <th className="minus">-</th>
            <td>Pabba <br />
            <span className="minus">100.000<small>kr</small></span>
            </td>
          </tr>
           {/* row 4 */}
           <tr>
            <th className="plus">+</th>
            <td>Húsbætur <br />
            <span className="plus">30.000<small>kr</small></span>
            </td>
          </tr>
             {/* row 5 */}
             <tr>
            <th className="plus">+</th>
            <td>S Eigin Vali <br />
            <span className="plus">30.000<small>kr</small></span>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="alls">
        <span><span className="borga">Pay: 170.500<small>kr</small></span> <br />
        <span className="gain">Gain: 60.000<small>kr</small></span>
        </span>
      </div>{/* .alls */}
    </div>

       </div>{/* .juni */}
      
    </div>
  );
}