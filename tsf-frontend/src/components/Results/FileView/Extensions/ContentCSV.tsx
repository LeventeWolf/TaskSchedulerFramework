import {useSelector} from "react-redux";
import {RootState} from "../../../../redux/store";
import {useAlert} from "react-alert";
import React, {useEffect, useState} from "react";
import Axios from "axios";

export const ContentCSV = () => {
    const activeResult = useSelector((state: RootState) => state.activeResult);
    const alert = useAlert();

    const [csv, setCsv] = useState([]);
    const [header, setHeader] = useState([]);

    useEffect(() => {
        Axios.post(`http://localhost:3001/api/file/csv`, {csvPath: activeResult})
            .then(response => {
                setCsv(response.data);
            })
            .catch(response => {
                console.log(response)
                alert.error("Unexpected error!");
            })
    }, [activeResult])

    useEffect(() => {
        if (csv.length !== 0) {
            // @ts-ignore
            setHeader(Object.keys(csv[0]));
        }

        header.forEach(key => {
            console.log(key)
        })
    }, [csv]);

    const Row: React.FC<any> = ({data}) => {
        return (
            <tr>
                {Object.keys(data).map((cell: string) =>
                    {return <td>{data[cell]}</td>}
                )}
            </tr>
        )
    }

    if (csv.length === 0) {
        return (
            <div className="csv-wrap">
                <table className="table table-dark">
                    <thead>
                    <th> CSV </th>
                    </thead>
                    <tbody>
                    <tr>
                        <td> empty </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }

    return (
        <div className="csv-wrap">
            <table className="table table-dark">
                <thead>
                {header.map(name => {return <th>{name}</th>})}
                </thead>
                <tbody>
                {csv.map(data => {return <Row data={data} />})}
                </tbody>
            </table>
        </div>
    );
}

export default ContentCSV;
