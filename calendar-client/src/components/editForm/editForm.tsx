import CloseIcon from '@mui/icons-material/Close';
import TaskApi from '../../api/taskApi';
import dayjs from 'dayjs';
import './editForm.scss';
import { useState } from 'react';
import { colors } from '../utils';
import CheckIcon from '@mui/icons-material/Check';
import styled from "@emotion/styled/macro";

const EditFormComponent = styled.form``;
const EditFormHeader = styled.header``;
const HeaderTitle = styled.span``;
const InfoBlock = styled.div``;
const InfoGrid = styled.div``;
const LabelInput = styled.input``;
const DescriptionInput = styled.input``;
const SubmitButtonFooter = styled.footer``;
const SubmitButton = styled.button``;

const EditBox = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    ${EditFormComponent} {
        background-color: #fff;
        border-radius: 0.5rem;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        width: 25%;
        ${EditFormHeader} {
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

interface EditFormProps {
    selectedTask: any,
    onClose: () => void
}

export const EditForm = (props: EditFormProps) => {
    const [newLabel, setNewLabel] = useState<string>(props.selectedTask.label);
    const [newDescription, setNewDescription] = useState<string>(props.selectedTask.description);
    const [newColor, setNewColor] = useState<string>(props.selectedTask.color);

    const updateTask = () => {
        TaskApi.updateTask({
            ...props.selectedTask,
            description: newDescription,
            label: newLabel,
            date: props.selectedTask.date,
            color: newColor,
        });
    }

    const onSubmitChanges = () => {
        updateTask();
    }

    return (
        <EditBox>
            <EditFormComponent>
                <EditFormHeader>
                    <CloseIcon className="close-icon" onClick={props.onClose} />
                    <HeaderTitle>Edit task</HeaderTitle>
                </EditFormHeader>
                <InfoBlock>
                    <InfoGrid>
                        <LabelInput
                            type="text"
                            name="label"
                            placeholder="Add title"
                            value={newLabel}
                            required
                            className="label-input"
                            onChange={(e) => setNewLabel(e.target.value)}
                        />
                        <div>
                            <p>{dayjs(props.selectedTask.date).format("dddd, MMMM DD")}</p>
                        </div>
                        <DescriptionInput
                            type="text"
                            name="description"
                            placeholder="Add a description"
                            value={newDescription}
                            required
                            className="description-input"
                            onChange={(e) => setNewDescription(e.target.value)}
                        />
                        <div className="color-block">
                            {colors.map((color: any, index: any) => (
                                <span
                                    key={index}
                                    className={`${color}-label`}
                                    onClick={() => setNewColor(color)}
                                >
                                    {newColor === color && (
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
                        onClick={() => onSubmitChanges()}
                    >
                        Save changes
                    </SubmitButton>
                </SubmitButtonFooter>
            </EditFormComponent>
        </EditBox>
    )
}