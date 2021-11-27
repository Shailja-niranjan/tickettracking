import React, { Component } from "react";
import styled from "styled-components";
import { Formik, Field } from "formik";
import { Form, Input, Title, Text, Button, Select } from "./theme.js";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #777;
  font-family: "Raleway", sans-serif;
  font-size: 0.8em;
  margin: 0.5em 0;
  position: relative;
`;


export default function StartJob() {

    return (
        <div>
            <h3 style={{ marginLeft: "30px" }}>Strat a New Job</h3>
            {/* FORMIK */}
            <Formik
                initialValues={{ job: "", uuid: "" }}
                validate={values => {
                    console.log(values);
                }}
                onSubmit={values => {
                    console.log(values);
                }}
                render={({
                    touched,
                    errors,
                    values,
                    handleChange,
                    handleBlur,
                    handleSubmit
                }) => (
                    <Form onSubmit={handleSubmit} style={{ marginLeft: "30px" }}>

                        <Label>
                            Product Name
                            <Input
                                type="text"
                                name="productname"
                                placeholder="Equinix Fabric"
                                readOnly
                            />
                        </Label>
                        <Label>
                            Job*
                            <Select name="Job" >
                                <option value="Fabric VC Sanity Check" label="Fabric VC Sanity Check" />
                                <option value="Fabric VC Sanity Check" label="Fabric VC Sanity Check" />
                                <option value="Fabric VC Sanity Check" label="Fabric VC Sanity Check" />
                            </Select>

                        </Label>
                        <Label>
                            UUID*
                            {errors.uuid && <Text color="red">{errors.uuid}</Text>}
                            <Input
                                border={errors.uuid && "1px solid red"}
                                name="uuid"
                                placeholder="UUID"
                            />
                        </Label>
                        <Label>
                            Packet Path Direction
                            <Select name="packetpath" >
                                <option value="A to Z" label="A to Z" />
                                <option value="Z to A" label="Z to A" />
                            </Select>

                        </Label>
                        <div style={{ float: "left" ,width: "300px"}}><FormControlLabel control={<Checkbox />} label="Include Stat" style={{ float: "left" }} /></div>
                        <Label>
                            <div>
                                <div style={{ float: "left" }}>
                                    <Label>
                                        Duration
                                        <Input
                                            type="text"
                                            name="duration"
                                            style={{ width: "130px", height: "35px" }}
                                        />
                                    </Label>
                                </div>

                                {/* </Label>
                                <Label>   */}
                                <div style={{ float: "right", marginLeft: "20px" }}>
                                    <Label>
                                        Iteration
                                        <Input
                                            type="text"
                                            name="iteration"
                                            style={{ width: "130px", height: "35px" }}
                                        />
                                    </Label>
                                </div>
                            </div>
                        </Label>

                        <Button type="submit" >Find Issues</Button>
                    </Form>
                )}
            />
            {/* END OF FORMIK */}
        </div>
    );

}