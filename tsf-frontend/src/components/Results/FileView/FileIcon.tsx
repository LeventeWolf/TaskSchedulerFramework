import React from "react";

import jsonIcon from '../../../assets/folder-structure/json.png'
import csvIcon from '../../../assets/folder-structure/csv.png'
import defaultIcon from '../../../assets/folder-structure/file.png'
import compressedIcon from '../../../assets/folder-structure/compressed.png'

type Props = {
    fileName: string;
}

export const FileIcon: React.FC<Props> = ( {fileName} ) => {
    const iconMap = {
        json: jsonIcon,
        csv: csvIcon,
        gz: compressedIcon,
        zip: compressedIcon,
        rar: compressedIcon,
    }

    const extension: string = fileName.split('.')[fileName.split('.').length - 1];
    // @ts-ignore
    const iconSrc = extension in iconMap ? iconMap[extension] : defaultIcon;

    return (
        <img className="file-icon" src={iconSrc} alt='icon'/>
    );
}

export default FileIcon;