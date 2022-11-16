import React from "react";
import { SERVER_URL } from "../config";

const getChain = async (setChain) => {
  const response = await fetch(`${SERVER_URL}chain`);
  const data = await response.json();
  setChain(data);
};

export { getChain };
