import { useEffect, useState } from "react";
import { getCheck, setBaseUrl } from "../../backend/backend";
import { GetCheckResponseOK } from "../../backend/backend-types";
import { backendUrl } from "../constant";

setBaseUrl(backendUrl);

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

  useEffect(() => {
    async function fetchMovies() {
      const result = await getCheck({ ping: "pong" });
      setCheck(result);
    }

    fetchMovies();
  }, []);

  if (!check) return <p>...</p>;

  return (
    <>
      <h2>Check</h2>
      <h3>Ping: {check?.ping}</h3>
      <h3>
        Status:
        <div className={getClassCheck(check.status)}>{check.status}</div>
      </h3>
    </>
  );
}
