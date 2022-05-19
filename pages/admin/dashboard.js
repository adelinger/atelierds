import React from "react";
import { withProtected } from "auth/hook/route";

import Admin from "layouts/Admin.js";

import PostsOverview from "components/Posts/PostsOverview";

function Dashboard({ auth, pathname }) {
  const { logout, user, error } = auth;
  return (
    <Admin>
      <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <PostsOverview />
        </div>
      </div>
    </>
    </Admin>

    
   
  );
}



export default withProtected(Dashboard);
