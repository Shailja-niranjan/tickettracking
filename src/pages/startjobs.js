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

function validateUuid(values) {
    console.log("values are : " + values + ".");

    let error = {}
    if (values === '') {
      error = 'Please enter uuid value';
    }
    return error;
  }

function validateForm(formValues){
    console.log("form values are : " + formValues.uuid + "product name "+ formValues.duration + " last value " + formValues.iteration);
    let error = {}
    if (formValues.uuid === '') {
      error.uuid = 'Please enter uuid value';
    }
    return error;

}

export default function StartJob() {
   
    return (
        <div>
            <h3 style={{ marginLeft: "13px" }}>Start a New Job</h3>
            {/* FORMIK */}
            <Formik
                initialValues={{
                    uuid: '',
                    // productname: ''
                  }}
                  validate={validateForm}
                  onSubmit={(submitValues) => { 
                      console.log("submit!"); 
                      console.log("submitted values are : " + submitValues.uuid + ", " +  submitValues.duration + ", " + submitValues.iteration);

                    }}
                    
                  >
                {({ errors, touched, isValidating }) => (
                    <Form  style={{ marginLeft: "13px",width: "400px", display: "flex", flexDirection: "column" }}>

                        <Label>
                            Product Name
                            <Input
                                type="text"
                                name="productname"
                                placeholder="Equinix Fabric"
                                readOnly
                                value = "Test Replace"
                                style={{borderRadius: 5}}
                            />
                        </Label>
                        <Label>
                            Job*
                            <Select name="Job" style={{borderRadius: 5}}>
                                <option value="Fabric VC Sanity Check" label="Fabric VC Sanity Check" />
                                <option value="Fabric VC Sanity Check" label="Fabric VC Sanity Check" />
                                <option value="Fabric VC Sanity Check" label="Fabric VC Sanity Check" />
                            </Select>

                        </Label>
                        <Label>
                            UUID*
                            <Field style={{width: "280px" , height: "35px", border: "1px solid #ccc" , backgroundcolor: "#fff" , borderRadius: 5}}
                                border={errors.uuid && "1px solid red"}
                                name="uuid"
                                placeholder="UUID"
                            />
                            {errors.uuid && touched.uuid && <div>{errors.uuid}</div>}
                        </Label>
                        <Label>
                            Packet Path Direction
                            <Select name="packetpath" style={{borderRadius: 5}}>
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
                                        <Field
                                            type="text"
                                            name="duration"
                                            style={{ width: "120px", height: "35px" , borderRadius: 5}}
                                        />
                                    </Label>
                                </div>

                                {/* </Label>
                                <Label>   */}
                                <div style={{marginLeft: "160px" ,alignItems: "center"}}>
                                    <Label>
                                        Iteration
                                        <Field
                                            type="text"
                                            name="iteration"
                                            style={{ width: "120px", height: "35px",borderRadius: 5 }}
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