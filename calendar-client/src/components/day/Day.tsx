import dayjs from 'dayjs';
import './Day.scss';
import { useState, useEffect } from 'react';
import TaskApi from '../../api/taskApi';
import PublicHolidayApi from '../../api/publicHolidayApi';
import styled from "@emotion/styled/macro";

const DayNumber = styled.p``;

const DayHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: start;
    ${DayNumber} {
        font-size: 0.875rem;
        line-height: 1.25rem;
        padding: 1px;
        margin-top: 1px;
        margin-bottom: 1px;
        text-align: center;
    }

`;

interface DayProps {
    day: dayjs.Dayjs,
    onDoubleClick: any,
    onTaskClick: (isOpen: boolean, task: any) => void
}

export const Day = (props: DayProps) => {
    const [tasks, setTasks] = useState(Array());
    const [publicHolidays, setPublicHolidays] = useState(Array());

    const fetchTasks = async () => {
        return await TaskApi.getAllTasks().then(tasksArr => setTasks(tasksArr.data.tasks));
    }

    const fetchHolidays = async () => {
        return await PublicHolidayApi.getPublicHolidays(dayjs().year(), "UA").then(holidays => setPublicHolidays(holidays.data));
    }

    const getTasksByDate = () => {
        return tasks.filter(task => task.date === props.day.toISOString())
            .concat(publicHolidays.filter(holiday => holiday.date === props.day.format("YYYY-MM-DD")));
    }

    const getCurrentDay = () => {
        return props.day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? "current" : "";
    }

    const getCurrentMonth = () => {
        return props.day.format("MM-YY") === dayjs().format("MM-YY") ? "" : "not-current-month";
    }

    useEffect(() => {
        fetchTasks();
        fetchHolidays();
    }, []);



    return (
        <div onDoubleClick={props.onDoubleClick} className={`day-component ${getCurrentMonth()} ${getCurrentDay()} `} >
            <DayHeader>
                <DayNumber>
                    {props.day.format('DD')}
                </DayNumber>
            </DayHeader>
            {getTasksByDate().map(task => (
                <div
                    className={`task-card`}
                    onClick={() => props.onTaskClick(true, task)}>
                    <span className={`${task.localName ? "holiday" : task.color}-label`} />
                    <span>{task.label || task.localName}</span>
                </div>
            ))}
        </div >
    )
}
