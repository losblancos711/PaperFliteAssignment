import React from "react";

export const TabBody = ({ children }) => {
  return (
    <div className="tab-panel" role="tabpanel">
      {children}
    </div>
  );
};
