import { buildOpenAPIClient } from "@platformatic/client";
import React, { useEffect } from "react";
import { type Backend } from "../backend";
import { clientConfig } from "./constant";

const Check: React.FC = () => {
  useEffect(() => {
    const getData = async () => {
      const client = await buildOpenAPIClient<Backend>(clientConfig);

      const test = await client.getCheck({ query: { ping: "foo" } });
      console.log(test);
    };

    getData();
  }, []);

  return (
    <div>
      <h2>Check</h2>
    </div>
  );
};

export default Check;
