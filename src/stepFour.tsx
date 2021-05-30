import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useFormik } from 'formik';
import React from 'react';
import * as yup from "yup"


export const StepFour = (props: any) => {
    const [letsChange, setValues] = React.useState(false);
    console.log(props);
    const validationSchema = yup.object({
        phoneNo: yup
            .string()
            .max(10, 'Enter 10 digits phone number')
    });
    const formik = useFormik({
        initialValues: {
            phoneNo: "",
            name: "",
            remarks: "",
            otpZero:"",
            otpOne:"",
            otpTwo:"",
            otpThree:""
               
        },
        validationSchema: validationSchema,
        onSubmit: (currValues) => {
            console.log(currValues);
            if(formik.values.otpZero === "1" && formik.values.otpOne === "2" && formik.values.otpTwo === "3" && formik.values.otpThree === "4"){
                setValues(true);
            }
        }
    });
    return (

        <div className="row">
            <div className="col-md-12" style={{ marginTop: "20px" }}>
            <div className="row" >
                        <div className="col-md-6" style={{ fontSize: "12px" }}>
                            BID DETAILS
                     </div>
                        <div className="col-md-6">
                            EDIT
                      </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6" style={{ fontSize: "12px", fontWeight: "bold" }}>
                            {"+91-"+ props.props.phoneNo}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6" style={{ fontSize: "12px", fontWeight: "bold" }}>
                            {props.props.name}
                        </div>
                        <div className="col-md-6" style={{ fontSize: "12px", fontWeight: "bold" }}>
                            {props.price}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6" style={{ fontSize: "12px", fontWeight: "bold" }}>
                            {props.props.remarks}
                        </div>
                        <div className="col-md-6" style={{ fontSize: "12px" ,color:"grey"}}>
                            Fixed Price
                    </div>
                    </div>

                    <div className="row" style={{ marginTop: "20px" }}>
                        <div className="col-md-12">
                            We've sent an OTP to your number. Please enter it to submit your Bid {props.phoneNo}
                        </div>
                    </div>
                <form onSubmit={formik.handleSubmit}>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-12">
                                    <TextField
                                        id="standard-multiline-static"
                                        rows={4}
                                        variant="standard"
                                        className="col-md-1"
                                        onChange={formik.handleChange}
                                        name="otpZero"
                                        type="text"
                                        value={formik.values.otpZero}
                                    />

                                    <TextField
                                        id="standard-multiline-static"
                                        rows={4}
                                        variant="standard"
                                        className="col-md-1"
                                        onChange={formik.handleChange}
                                        name="otpOne"
                                        type="text"
                                        value={formik.values.otpOne}
                                    />
                                    <TextField
                                        id="standard-multiline-static"
                                        rows={4}
                                        variant="standard"
                                        className="col-md-1"
                                        onChange={formik.handleChange}
                                        name="otpTwo"
                                        type="text"
                                        value={formik.values.otpTwo}
                                    />
                                    <TextField
                                        id="standard-multiline-static"
                                        rows={4}
                                        variant="standard"
                                        className="col-md-1"
                                        onChange={formik.handleChange}
                                        name="otpThree"
                                        type="text"
                                        value={formik.values.otpThree}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {formik.values.otpZero === "1" && formik.values.otpOne === "2" && formik.values.otpTwo === "3" && formik.values.otpThree === "4" ?
                     <Button color="primary" variant="contained" fullWidth type="submit" style={{ marginTop: "20px" }}>
                         Submit Bid
                      </Button> 
                     :
                    <div className="row" style={{ marginTop: "20px" }}>
                        <div className="col-md-12" >
                            <Button color="primary" variant="contained" fullWidth type="submit">
                                Check OTP
                            </Button>     
                              
                        </div>
                    </div>
                    }
                </form>
            </div>
        </div>

    )
};
