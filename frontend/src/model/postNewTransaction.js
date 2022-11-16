import React from "react";
import { SERVER_URL } from "../config";

const postNewTransaction = async (data) => {
  const response = await fetch(`${SERVER_URL}transaction/new`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export { postNewTransaction };
