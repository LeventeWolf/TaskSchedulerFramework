import React from "react";

import styled from "styled-components";


const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

`

type props = {
    extension: string
}

export const ContentDefault: React.FC<props> = ( {extension}) => {
    const logos = {
        compression: ['zip', 'tar.gz', 'rar', 'tgz', 'gz']
    }

    if (logos['compression'].includes(extension)) {
        return (
            <Center>
                <div style={{transform: 'scale(2.0)'}} />
            </Center>
        )
    }


    return (
        <div> This extension is not supported! </div>
    );
}

export default ContentDefault;