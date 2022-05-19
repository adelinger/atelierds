import React from "react";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";

// layout for page

import Admin from "layouts/Admin.js";
import { withProtected } from "auth/hook/route";

function Dashboard({ auth, pathname }) {
  const { logout, user, error } = auth;

  return (

    <div>
          {error?.[pathname] && <h4 style={{ color: "red" }}>{error[pathname]}</h4>}
      <button onClick={logout}>
        Log out
      </button>
   </div>
   
  );
}



export default withProtected(Dashboard);
