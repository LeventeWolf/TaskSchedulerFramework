import React, {useEffect} from "react";
import File from "./File"
import {RootState} from "../../../redux/store";
import {useDispatch, useSelector} from "react-redux";
import {fetchExplorer} from "../../../redux/actions/explorerActions";
import {useParams} from "react-router-dom";

export interface Explorer {
    name: string,
    isFolder: boolean
    items?: [];
    isExpanded: boolean
}

export const Drawer: React.FC = () => {
    // @ts-ignore
    const explorer = useSelector<Explorer>((state: RootState) => state.explorer);
    const dispatch = useDispatch();
    const {repository, date} = useParams();

    useEffect(() => {
        console.log('should open:', repository, date)

        // Init all results if /results
        if (!repository) {
            dispatch(fetchExplorer(`http://localhost:3001/api/results`));
            return
        }

        if (!date) {

        }

        // Init given repository results /results/repository/date
        dispatch(fetchExplorer(`http://localhost:3001/api/result/${repository}/${date}`));

    }, [])

    return (
        <div id="drawer-wrap">
            <div id="drawer">
                {/* @ts-ignore*/}
                <File explorer={explorer} path={''} />
            </div>
        </div>
    );
}

export default Drawer;

