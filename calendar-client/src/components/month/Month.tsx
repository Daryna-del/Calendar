import React, { useState } from "react";
import { Day } from "../day/Day";
import dayjs from "dayjs";
import { CreateForm } from "../createForm/CreateForm";
import { EditForm } from "../editForm/editForm";
import styled from "@emotion/styled/macro";

interface MonthProps {
    month: dayjs.Dayjs[][]
}

const MonthDiv = styled.div`
    flex: 1 1 0%;
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    grid-template-rows: repeat(5, minmax(0, 1fr));
`;


export const Month = (props: MonthProps) => {

    const [isCreateFormClicked, setIsCreateFormClicked] = useState<boolean>(false);
    const [selectedDay, setSelectedDay] = useState<any>();
    const [isEditFormOpen, setIsEditFromOpen] = useState<boolean>(false);
    const [selectedTask, setSelectedTask] = useState<any>();

    const onTaskClick = (isEditFormOpen: boolean, selectedTask: any) => {
        setIsEditFromOpen(isEditFormOpen);
        setSelectedTask(selectedTask);
    }

    return (
        <MonthDiv>
            {props.month.map((row: any, indexRow: any) => (
                <React.Fragment key={indexRow}>
                    {row.map((day: any, indexDay: any) => (
                        <Day onDoubleClick={() => {
                            setIsCreateFormClicked(true);
                            setSelectedDay(day);
                        }}
                            day={day} key={indexDay} onTaskClick={onTaskClick} />
                    ))}
                </React.Fragment>
            ))}
            {isCreateFormClicked &&
                <CreateForm onClose={() => setIsCreateFormClicked(false)} selectedDay={selectedDay} />
            }
            {isEditFormOpen &&
                <EditForm selectedTask={selectedTask} onClose={() => setIsEditFromOpen(false)} />
            }
        </MonthDiv>
    )

}