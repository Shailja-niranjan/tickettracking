import React, { Component } from "react";
import styled from "styled-components";
import { Formik, Field, Form , ErrorMessage } from "formik";
import { Input, Title, Text, Button, Select } from "./theme.js";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import * as Yup from 'yup';

const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #777;
  font-family: "Raleway", sans-serif;
  font-size: 0.8em;
  margin: 0.5em 0;
  position: relative;
`;

function validateUuid(value) {
    let error;
    if (value === '') {
      error = 'Please enter uuid value';
    }
    return error;
  }

export default function StartJob() {
   
    return (
        <div>
            <h3 style={{ marginLeft: "5px" }}>Start a New Job</h3>
            {/* FORMIK */}
            <Formik
                initialValues={{
                    uuid: '',
                  }}
                  onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                  }}>
                {({ errors, touched, isValidating }) => (
                    <Form  style={{ marginLeft: "5px",width: "300px", display: "flex", flexDirection: "column", alignItems: "center" }}>

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
                            
                            <Field validate={validateUuid}
                                border={errors.uuid && "1px solid red"}
                                name="uuid"
                                placeholder="UUID"
                            />
                            {errors.uuid && touched.uuid && <div>{errors.uuid}</div>}
                        </Label>
                        <Label>
                            Packet Path Direction
                            <Select name="packetpath" >
                                <option value="A to Z" label="A to Z" />
                                <option value="Z to A" label="Z to A" />
                            </Select>

                        </Label>
                        <div style={{ float: "left" ,width: "280px"}}><FormControlLabel control={<Checkbox />} label="Include Stat" style={{ float: "left" }} /></div>
                        <Label>
                            <div>
                                <div style={{ float: "left" }}>
                                    <Label>
                                        Duration
                                        <Input
                                            type="text"
                                            name="duration"
                                            style={{ width: "120px", height: "35px" }}
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
                                            style={{ width: "120px", height: "35px" }}
                                        />
                                    </Label>
                                </div>
                            </div>
                        </Label>

                        <Button type="submit" >Find Issues</Button>
                    </Form>
                )}
            </Formik>
            {/* END OF FORMIK */}
        </div>
    );

}