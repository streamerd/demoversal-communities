import React, { useState, useEffect } from "react";
import MatrixBG from "../components/matrix.js";
import MetaverseSelector from "../components/metaverse-selector.js";

export default function GateKeeper() {
  const [address, setAddress] = useState(false);
  const [payload, setPayload] = useState(null);
  const [ready, setReady] = useState(false);
  
  const submitAddress = () => {
    console.log(address)
    setReady(true);
  };

  useEffect(() => {
    const value = window.location.href;
    const query_string = window.location.search;
    const url_params = new URLSearchParams(query_string);
    const randomContainerName = url_params.get("container");

    setPayload({
        "address": url_params.get('address'),
        "request_id": randomContainerName,
        "token_address": "0x0000000000000000000000000000000000000000",
        "date": new Date().toISOString(),
        "name": "Metaverse Access Pass"
    });
}, []);

  useEffect(() => {
    if (ready) {
      // Navigate to {root_url}/access-pass-generator with the address as a query parameter
      window.location.href = `${window.location.origin}/access-pass-generator?address=${address}`;
    }
  }, [ready]);
    return (
      <>
      <div
          className={'matrix'}>
            <MetaverseSelector />
          </div>
          <MatrixBG selection={true} />
      </>
    );
  }
  