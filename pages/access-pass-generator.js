// A QR code that generates the correct token address
// and public address of the account that is used to
// generate the access pass.

// The QR code should be Black and white with the background as black and the code area is white.
// The QR code should be a square with the size of 200x200 pixels.
// It should be centered in the middle of the page on all screens.
// The QR code should be a PNG image.

// The code should deep link into an iOS or Android app called "Metaverse Access Pass"
// When a user scans the QR code, the app should open up and show the access pass.
// The access pass should show the name of the account, the token address, and the public address.
// The user that scans the QR code should be able to copy the access pass to their clipboard.

// The QR code should be able to be generated from the Metaverse Access Pass Generator page.
import React, { useState, useEffect } from 'react';
import QRCode from "react-qr-code";
import MatrixBG from "../components/matrix.js";

const randomContainerName = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
const size = 256;

export default function AccessPassGenerator() {
    const [QR, setQR] = useState(null);
    const [width, setWidth] = useState(size);
    const [height, setHeight] = useState(size);
    const [payload, setPayload] = useState(null);

    useEffect(() => {
        const value = window.location.href;
        const query_string = window.location.search;
        const url_params = new URLSearchParams(query_string);

        setPayload({
            "address": url_params.get('address'),
            "request_id": randomContainerName,
            "token_address": "0x0000000000000000000000000000000000000000",
            "date": new Date().toISOString(),
            "name": "Metaverse Access Pass"
        });
    }, []);

    return (
        <div>
            <div 
            style={{
                "display": "flex", 
                "justifyContent": "center", 
                "alignItems": "center",
                "flexDirection": "column",
                height: "100vh",
                width: "100vw",
            }}
            id={randomContainerName} className={'matrix'}>
                
                <h1>Access Pass</h1>
                <QRCode
                    value={JSON.stringify(payload)}
                    width={width}
                    height={height}
                    fgColor="#FFFFFF"
                    bgColor="#000000"
                />
                <p>{randomContainerName}
                <div>
                    <h2>Payload</h2>
                    <p>{JSON.stringify(payload)}</p>
                </div>
                </p>
            </div>
            <MatrixBG selection={true} />
        </div>
    );
}
