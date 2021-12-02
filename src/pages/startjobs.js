import React, { Component } from "react";
import styled from "styled-components";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Input, Title, Text, Button, Select } from "./theme.js";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';



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

function validateForm(formValues) {

    // console.log("%c form values are : " + formValues.uuid + "product name " + formValues.duration + " last value " + formValues.iteration, 'background: #222; color: #bada55');
    let error = {}
    if (formValues.uuid === '') {
        error.uuid = 'Please enter uuid value';
    }
    return error;
}



export default function StartJob(props) {

    console.log("parent value : " + props.data)
    return (
        <div>
            <div style={{display: "flex"}}>
                <div style={{width: "70%"}}> 
                    <h3 style={{ marginLeft: "50px" }}>Start a New Job</h3>
                </div>
                <div style={{float: "right", width: "30%"}}>                    
                    <div style={{ marginLeft: "90px"}}>
                        <ChevronLeftIcon onClick={props.handleDrawerClose} style={{ fontSize: 50, color: "gray" }}/>
                    </div>
                </div>
            </div>
           
            {/* FORMIK */}
            <Formik
                initialValues={{
                    uuid: '',
                    Job: '',
                    packetpath: '',
                    include_stat: false,
                    duration: '',
                    iteration: '',

                    // productname: ''
                }}
                validate={validateForm}
                onSubmit={(submitValues) => {
                    console.log("submit!");
                    console.log("submitted values are ==> product name : " + props.data + " , Job : " + submitValues.Job + " , UUID : " + submitValues.uuid + ", PacketPath : " + submitValues.packetpath + " , Include stat : " + submitValues.include_stat + " ,  Duraton : " + submitValues.duration + ", Iteration : " + submitValues.iteration);

                }}

            >
                {({ values, errors, touched, isValidating, resetForm, handleChange, handleReset, enableReinitialize }) => (
                    <Form style={{ marginLeft: "50px", width: "400px", display: "flex", flexDirection: "column" }}>

                        <Label>
                            Product Name
                            <Field
                                type="text"
                                name="productname"
                                placeholder="Equinix Fabric"
                                readOnly
                                value={props.data}
                                style={{ width: "280px", height: "35px", border: "1px solid #ccc", backgroundColor: "#D3D3D3", borderRadius: 5 }}
                            />
                        </Label>
                        <Label>
                            Job*
                            <Select
                                name="Job" 
                                onChange={handleChange}
                                value=  {values.Job}
                                style={{ borderRadius: 5 }}
                            >
                                <option value="" label="Select a Value" />
                                <option value="Fabric VC Sanity -1" label="Fabric VC Sanity-1" />
                                <option value="Fabric VC Sanity -2" label="Fabric VC Sanity-2" />
                            </Select>

                        </Label>
                        <Label>
                            UUID*
                            <Field style={{ width: "280px", height: "35px", border: "1px solid #ccc", backgroundcolor: "#fff", borderRadius: 5 }}
                                border={errors.uuid && "1px solid red"}
                                name="uuid"
                                placeholder="UUID"
                            />
                            {errors.uuid && touched.uuid && <div>{errors.uuid}</div>}
                        </Label>
                        <Label>
                            Packet Path Direction
                            <Select 
                                name="packetpath" 
                                style={{ borderRadius: 5 }}
                                onChange={handleChange}
                                value=  {values.packetpath}
                                
                            >
                                <option value="" label="Select a Value" />
                                <option value="A to Z" label="A to Z" />
                                <option value="Z to A" label="Z to A" />
                            </Select>

                        </Label>
                        {/* <div style={{ float: "left", width: "280px" }}><FormControlLabel control={<Checkbox />} label="Include Stat" style={{ float: "left" }} name="include_stat" /></div> */}
                        
                        <div style={{ float: "left", width: "280px" ,marginTop: "5px" , marginBottom: "5px"}}>
                        <Field
                                type="checkbox"
                                name="include_stat"
                                id="include_stat"
                                
                            /> Include Stat
                         </div>  
                                     
                        <Label>
                            <div>
                                <div style={{ float: "left" }}>
                                    <Label>
                                        Duration
                                        <Field
                                            type="text"
                                            name="duration"
                                            style={{ width: "120px", height: "35px", borderRadius: 5, border: "1px solid #ccc" }}
                                        />
                                    </Label>
                                </div>

                                {/* </Label>
                                <Label>   */}
                                <div style={{ marginLeft: "160px", alignItems: "center" }}>
                                    <Label>
                                        Iteration
                                        <Field
                                            type="text"
                                            name="iteration"
                                            style={{ width: "120px", height: "35px", borderRadius: 5, border: "1px solid #ccc" }}
                                        />
                                    </Label>
                                </div>
                            </div>
                        </Label>
                        
                        <div>
                            <div style={{ float: "left" }}><button  type="submit" style={{ width: "150px", height: "35px", backgroundColor: "#006DB5", border: "0px", borderRadius: 5, color: "white" }} disabled={ !(Object.keys(touched).length)} >Find Issues</button></div>
                            {/* <div style={{ alignItems: "center", marginLeft: "190px", cursor: "anchor", marginTop: "10px" }} onClick={handleReset} >Reset</div> */}
                            <div style={{ alignItems: "center", marginLeft: "190px", cursor: "anchor", marginTop: "8px" }}>
                                <button type="reset">
                                    Reset
                                </button>
                            </div>    
                        </div>


                    </Form>
                )}
            </Formik>
            {/* END OF FORMIK */}
        </div>
    );

}