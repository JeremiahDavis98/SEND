import {React, useState} from "react";
import * as data from "./mock-data.json";

export default function Projects() {
    const [projs, setProjects] = useState(data);
    const [addFormData, setAddFormData] = useState({
        name: '',
        desc: '',
        own: '',
        funds: ''
    })

    const handleAddFormChange = (event) => {
        event.preventDefault()
        const fieldName = event.target.getAttribute('name');
        const fieldVal = event.target.value;
        const newFormData = {...addFormData};
        newFormData[fieldName] = fieldVal;
        setAddFormData(newFormData);
    }

    return (
        <div>
            <form method="GET" action="/api/projects">
                <table>
                    <thead>
                        <tr>
                            <th>Project Name</th>
                            <th>Project Description</th>
                            <th>Project Owner</th>
                            <th>Funds</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projs.map((projsA)=> {
                            <tr>
                                <th>{projsA.name}</th>
                                <th>{projsA.desc}</th>
                                <th>{projsA.own}</th>
                                <th>{projsA.funds}</th>
                            </tr>
                        })}  
                    </tbody>
                </table>
                <h2>Add a new project</h2>
                <form>
                    <input
                        type="text"
                        name="name"
                        required="required"
                        placeholder="Enter a name:"
                        onChange={handleAddFormChange}
                    />
                    <input
                        type="text"
                        name="desc"
                        required="required"
                        placeholder="Enter a description:"
                        onChange={handleAddFormChange}
                    />
                    <input
                        type="email"
                        name="own"
                        required="required"
                        placeholder="Enter owner's email:"
                        onChange={handleAddFormChange}
                    />
                    <input
                        type="text"
                        name="funds"
                        required="required"
                        placeholder="Enter funds:"
                        onChange={handleAddFormChange}
                    />
                    <button type="submit">Add row</button>
                </form>
            </form>
        </div>
    )
}