
import React, { useEffect, useState } from 'react'
// import {Button} from "@material-ui/core";
// import useAuth from "../../utilities/useAuth";
// import styled from "styled-components";
// import Link from "../Link/Link";

import cms from '../../api/cms/cms';
import app from "../../api/app/app";




// export const Logout = () => {
//   const { handleLogOutButton } = useAuth({
//     shouldBeLoggedIn: true,
//   });
//   return (
//     <div>
//       <button onClick={handleLogOutButton}>Log out</button>
//     </div>
//   );
// };



 function Assessments() {

        
const [assessments,  setAssessments] = useState([])

const checkAndSync = async () => {
  if(app.calcIfShowIdSync()) {
    const response = await cms.syncAssessments();
    setAssessments(response);
  }

  const response = JSON.parse(window.localStorage.getItem("assessments"))
  setAssessments(response);

};

useEffect(() => checkAndSync(), []);


return (
  <div>
    <div>
      {assessments.map(({ name }) => (
        <div>{name}</div>     
      ))}
    </div>
  </div>
);


}
   
  

  export default Assessments;