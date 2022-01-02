import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';

export default function UserObjectCanvas() {
    const [userObjects, setUserObjects] = useState([]);

    const addNew = () => {
        // get url from clipboard
        const url = window.prompt("Enter a URL");
        if (url) {
            // add new url to state
            setUserObjects([...userObjects, url]);
        }
    }

    
      // Fire addNew on paste
      useEffect(() => {
        document.addEventListener('paste', addNew);
        return () => {
          document.removeEventListener('paste', addNew);
        };
      }, [])

      const allowDrop = (ev) => {
        ev.preventDefault();
      }
      
      const drag = (ev) => {
        ev.dataTransfer.setData("text", ev.target.id);
      }
      
      const drop = (ev) => {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
      }

    return (
        <>
            <div 
            id="user-object-canvas">
                {userObjects.map((url, index) => {
                    return (
                        <div key={index}>
                        <Draggable >
                            <div style={{
                                backgroundImage: `url(${url})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                position: "absolute",
                                top: "0px",
                                left: "0px",
                                width: "240px",
                                height: "160px",
                                zIndex: "1"
                            }} />
                        </Draggable>
                        </div>
                    )
                })}
            </div>
        </>
    )
}