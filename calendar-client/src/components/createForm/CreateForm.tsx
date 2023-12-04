import { useContext, useState } from 'react';
import './CreateForm.scss';
import dayjs from 'dayjs';
import TaskApi from '../../api/taskApi';
import { colors } from '../utils';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import styled from "@emotion/styled/macro";

const CreateFormComponent = styled.form``;
const CreateFormHeader = styled.header``;
const HeaderTitle = styled.span``;
const InfoBlock = styled.div``;
const InfoGrid = styled.div``;
const LabelInput = styled.input``;
const DescriptionInput = styled.input``;
const SubmitButtonFooter = styled.footer``;
const SubmitButton = styled.button``;

const CreateBox = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    ${CreateFormComponent} {
        background-color: #fff;
        border-radius: 0.5rem;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        width: 25%;
        ${CreateFormHeader} {
            background-color: rgb(202, 138, 4);
            padding-left: 1rem;
            padding-right: 1rem;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            ${HeaderTitle} {
                font-size: 1.1rem;
                line-height: 1.75rem;
                color: white;
                font-weight: 500;
            }
        }
        ${InfoBlock} {
            padding: 3px;
            ${InfoGrid} {
                display: grid;
                grid-template-columns: repeat(1/5, minmax(0, 1fr));
                align-items: flex-end;
                row-gap: 7px;
                ${LabelInput} {
                    padding: 3px;
                    border-width: 0px;
                    color: rgb(75, 85, 99);
                    font-size: 1.25rem;
                    line-height: 1.75rem;
                    font-weight: 600;
                    padding-bottom: 0.5rem;
                    border-bottom-width: 2px;
                    border-color: rgb(229, 231, 235);
                }
                ${LabelInput}:focus {
                    outline: none;
                    box-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
                    border-color: rgb(202, 138, 4);
                }
                ${DescriptionInput}{
                    padding: 3px;
                    border-width: 0px;
                    color: rgb(75, 85, 99);
                    padding-bottom: 0.5rem;
                    border-bottom-width: 2px;
                    border-color: rgb(229, 231, 235);
                }
                ${DescriptionInput}:focus {
                    outline: none;
                    box-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
                    border-color: rgb(202, 138, 4);
                }

            }
        }
        ${SubmitButtonFooter} {
            display: flex;
            justify-content: flex-end;
            border-top-width: 1px;
            padding: 3px;
            margin-top: 1.25rem;
            ${SubmitButton} {
                background-color: rgb(202, 138, 4);
                padding-left: 6px;
                padding-right: 6px;
                padding-top: 2px;
                padding-bottom: 2px;
                border-radius: 0.25rem;
                color: rgb(255, 255, 255);
                border-color: white;
            }
            ${SubmitButton}:hover {
                background-color: rgb(217, 119, 6);
            }
        }
    }
`;

interface CreateFornProps {
    selectedDay: dayjs.Dayjs,
    onClose: () => void
}

export const CreateForm = (props: CreateFornProps) => {
    const [label, setLabel] = useState<string>();
    const [description, setDescription] = useState<string>();
    const [selectedColor, setSelectedColor] = useState<string>();

    const saveNewTask = () => {
        TaskApi.createTask({
            description: description,
            label: label,
            date: props.selectedDay,
            color: selectedColor
        }).then(task => console.log(task));
    }

    const onSubmit = () => {
        if (label !== undefined && description !== undefined) {
            saveNewTask();
        }
    }

    return (
        <CreateBox>
            <CreateFormComponent>
                <CreateFormHeader>
                    <CloseIcon className="close-icon" onClick={props.onClose} />
                    <HeaderTitle>Create new task</HeaderTitle>
                </CreateFormHeader>
                <InfoBlock>
                    <InfoGrid>
                        <LabelInput
                            type="text"
                            name="label"
                            placeholder="Add title"
                            value={label}
                            required
                            className="label-input"
                            onChange={(e) => setLabel(e.target.value)}
                        />
                        <div>
                            <p>{props.selectedDay.format("dddd, MMMM DD")}</p>
                        </div>
                        <DescriptionInput
                            type="text"
                            name="description"
                            placeholder="Add a description"
                            value={description}
                            required
                            className="description-input"
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <div className="color-block">
                            {colors.map((color: any, index: any) => (
                                <span
                                    key={index}
                                    className={`${color}-label`}
                                    onClick={() => setSelectedColor(color)}
                                >
                                    {selectedColor === color && (
                                        <CheckIcon style={{ color: "white" }} />
                                    )}
                                </span>
                            ))}
                        </div>
                    </InfoGrid>
                </InfoBlock>

                <SubmitButtonFooter>
                    <SubmitButton
                        type="submit"
                        onClick={() => onSubmit()}
                        className="submit-button"
                    >
                        Save task
                    </SubmitButton>
                </SubmitButtonFooter>
            </CreateFormComponent>
        </CreateBox>
    )
}