import React, { useContext, useEffect, useState } from "react";
import { Month } from "../month/Month";
import { dayNamesEnum, getMonth } from "../utils";
import './Calendar.scss';
import styled from "@emotion/styled/macro";
import dayjs from "dayjs";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const CalendarHeader = styled.div``;
const HeaderMonthYear = styled.h2``;
const DateHeader = styled.header``;
const ChevronButton = styled.button``;
const DateName = styled.p``;
const MonthComponent = styled.div``;

const CalendarDiv = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    ${CalendarHeader} {
        background-color: rgb(202, 138, 4);
        color: white;
        top: 0;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        ${HeaderMonthYear} {
            padding-left: 10px;
            margin-left: 4px;
            font-size: 1.25rem;
            /* 20px */
            line-height: 1.75rem;
            /* 28px */
            color: rgb(229, 231, 235);
            font-weight: 700;
        }
        ${ChevronButton} {
            background-color: rgb(229, 231, 235);
            border: none;
            margin-left: 10px;
            margin-top: 10px;
            margin-bottom: 10px;
        }

      }
      ${DateHeader} {
        align-items: center;
        display: grid;
        // Grid with 7 columns and 5 rows
        grid-template-columns: repeat(7, minmax(0, 1fr));
        background-color: rgb(234, 234, 234);
        ${DateName} {
            font-size: 0.875rem;
            line-height: 1.25rem;
            margin-top: 1px;
            align-items: center;
            border-width: 1px;
            border-color: gray;
        }
      }
      ${MonthComponent} {
        display: flex;
        flex: 1 1 0%;
      }
`;

//Ideally I would like to create a header of the calendar export as another component, but it will be implemented in new branch

export const Calendar = () => {
    const [currentMonth, setCurrentMonth] = useState(getMonth());
    const [monthIndex, setMonthIndex] = useState<any>(dayjs().month());

    const handlePrevMonth = () => {
        setMonthIndex(monthIndex - 1);
    }

    const handleNextMonth = () => {
        setMonthIndex(monthIndex + 1);
    }

    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex));
    }, [monthIndex]);

    return (
        <React.Fragment>
            <CalendarDiv>
                <CalendarHeader>
                    <ChevronButton onClick={handlePrevMonth}>
                        <ChevronLeftIcon className="chevron-left-icon" />
                    </ChevronButton>
                    <ChevronButton onClick={handleNextMonth}>
                        <ChevronRightIcon className="chevron-right-icon" />
                    </ChevronButton>
                    <HeaderMonthYear>
                        {dayjs(new Date(dayjs().year(), monthIndex)).format(
                            "MMMM YYYY"
                        )}
                    </HeaderMonthYear>
                </CalendarHeader>
                <DateHeader className="day-header">
                    {dayNamesEnum.map((dayName: String) => (
                        <DateName>
                            {dayName}
                        </DateName>
                    ))}
                </DateHeader>
                <MonthComponent>
                    <Month month={currentMonth} />
                </MonthComponent>
            </CalendarDiv>
        </React.Fragment >
    )
}