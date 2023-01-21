import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../../../redux/store";
import {useAlert} from "react-alert";
import Axios from "axios";
import ReactJson from "react-json-view";
import ContentDefault from "./ContentDefault";

const ContentJSON = () => {
    const activeResult = useSelector((state: RootState) => state.activeResult);
    const alert = useAlert();

    const [json, setJson] = useState({});

    useEffect(() => {
        Axios.post(`http://localhost:3001/api/file/json`, {jsonPath: activeResult})
            .then(response => {
                setJson(response.data);
            })
            .catch(response => {
                console.log(response)
                alert.error("Unexpected error!");
            })
    }, [activeResult])

    return (
        <div className="json-wrap">
            <ReactJson src={json} theme="railscasts" displayDataTypes={false} displayObjectSize={false}/>
        </div>
    )
};

export default ContentJSON;