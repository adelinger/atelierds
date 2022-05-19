import React from "react";
import { withProtected } from "auth/hook/route";

import Admin from "layouts/Admin.js";


function Dashboard({ auth, pathname }) {
  const { logout, user, error } = auth;
  return (
    <Admin>
      <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          
        </div>
        <div className="w-full xl:w-4/12 px-4">
         
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
         
        </div>
        <div className="w-full xl:w-4/12 px-4">
          
        </div>
      </div>
    </>
    </Admin>

    
   
  );
}



export default withProtected(Dashboard);
