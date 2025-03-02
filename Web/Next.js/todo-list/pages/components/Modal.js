import React from "react";

export default function Modal(props){
    if(!props.isOpen) return;

    return(
        <>
            <div>
                <div>
                    <h2>Edit task:</h2>
                    <input type="text"
                    value={props.initialvalue}
                    id="taskInput"/>
                    <div>
                        <button onClick={()=>props.onSave(document.getElementById('taskInput').value)}>Save</button>
                        <button onClick={()=>props.onClose()}>Close</button>
                    </div>
                </div>
            </div>
        </>
    );
}