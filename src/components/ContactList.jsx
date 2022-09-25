import React from "react";
import { Card } from "./card/Card";

export const ContactList = ({ contact }) => {
  return (
    <div className="row">
      {!contact.length
        ? "No User Found"
        : contact.map((usr, i) => <Card key={i} user={usr} />)}
    </div>
  );
};
