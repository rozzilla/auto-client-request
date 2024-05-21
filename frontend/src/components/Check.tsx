import { useEffect, useState } from "react";
import { getCheck, setBaseUrl } from "../../client/client";
import { GetCheckResponseOK } from "../../client/client-types";
import { clientUrl } from "../constant";

setBaseUrl(clientUrl);

const getClassCheck = (
  status: GetCheckResponseOK["status"]
): "success" | "error" => {
  if (status === "OK") {
    return "success";
  } else if (status === "KO") {
    return "error";
  } else {
    throw new Error("invalid status code");
  }
};

export function Check() {
  const [check, setCheck] = useState<GetCheckResponseOK>();

  async function fetchCheck() {
    const result = await getCheck({ ping: "pong" });
    setCheck(result);
  }

  useEffect(() => {
    fetchCheck();
  }, []);

  if (!check) return <p>...</p>;

  return (
    <>
      <h2>Check</h2>
      <h3>Ping: {check?.ping}</h3>
      <h3>
        Status:
        <div className={getClassCheck(check.status)}>{check.status}</div>
        <button onClick={fetchCheck}>UPDATE</button>
      </h3>
    </>
  );
}
