import React, {useState} from "react";
import doubleDownArrow from "../../assets/grey-double-down-arrow.png";
import styled from 'styled-components';
import {delay} from "../../lib/animations";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";

const DoubleDownArrow = styled.img`
  height: 25px;
  margin-left: -7px;
  margin-right: 4px;
  //padding-right: 5px
  transition: transform 0.2s linear;
  transform: rotate(-90deg);

  &:hover {
    filter: brightness(0.5);
    cursor: pointer;
  }
`;


export const TableHeaderShowResults: React.FC = () => {
    const rows = useSelector((state: RootState) => state.rows);
    const [isOpen, setOpen] = useState(false);

    /**
     * Show ALL directories if Arrow-Icon is rotated, else hide
     */
    async function handleAllDisplay() {
        setOpen(current => !current);

        for (const row of rows.slice(0, 15)) {
            if (row.type !== 'Repository') continue
            const repository = row.content;

            if (isOpen) {
                if (repository.isOpen) {
                    repository.hideDirectories();
                }
            } else {
                if (!repository.isOpen) {
                    repository.isOpen = true;
                    repository.showDirectories();
                }

                await delay(10);
            }
        }

    }

    return (
        <DoubleDownArrow src={doubleDownArrow} alt="showAll"
                         className={isOpen ? 'rotated' : ''}
                         onClick={handleAllDisplay}
        />
    );
}
