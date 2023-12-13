import { useEffect, useState } from "react";
import useAxiosSecure from "./../../Hooks/AxiosSecure";

const LeaderBoard = () => {
  const [leaderBoard, setLeaderBoard] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get("/leaderBoard").then((res) => setLeaderBoard(res.data));
  }, [axiosSecure]);

  return (
    <div className="overflow-x-auto">
        <h1 className="text-center text-3xl font-bold primary-btn">Leader board</h1>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Sl.</th>
            <th>Email</th>
            <th>Total Donate</th>
          </tr>
        </thead>
        <tbody>
          {
            leaderBoard.map((user, idx) => 
            <tr key={idx}>
                <td>
                  {idx + 1}
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    
                    <div>
                      <div className="font-bold">{user._id}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {user.totalFoodDonated}
                </td>
              </tr>
              )
          }
        </tbody>
      </table>
    </div>
  );
};

export default LeaderBoard;
