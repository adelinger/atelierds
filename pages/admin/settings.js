import React from "react";

// components

import CardSettings from "components/Cards/CardSettings.js";

// layout for page

import Admin from "layouts/Admin.js";
import { withProtected } from "auth/hook/route";

function Settings() {
  return (
    <>
    <Admin>
    <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardSettings />
        </div>
        <div className="w-full lg:w-4/12 px-4">
         
        </div>
      </div>
    </Admin>
      
    </>
  );
}

export default withProtected(Settings);
