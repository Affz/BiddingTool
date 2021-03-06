import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import { useFormik } from 'formik';
import React from 'react';
import * as yup from "yup"
import { StepThree } from './stepThree';


export const StepTwo = (props: any) => {
    const [letsChange, setValues] = React.useState(false);
    const validationSchema = yup.object({
        phoneNo: yup
            .string()
            .max(10, 'Enter 10 digits phone number'),
    });
    const formik = useFormik({
        initialValues: {
            price:0,
        },
        validationSchema: validationSchema,
        onSubmit: (currValues) => {
            setValues(true);
            props.headerValChange({ number: 3, name: "Verify OTP" });
        }
    });
    return (

        <div className="row">
            <div className="offset-4 col-md-4" id="margin-gen">
                <form onSubmit={formik.handleSubmit}>
                    <div className="row" id="margin-gen">
                        <div className="col-md-6" style={{ fontSize: "12px" }}>
                            JOUNERY DETAILS
                             </div>
                        <div className="col-md-6" style={{ fontSize: "12px" }}>
                            EDIT
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6" id="font-details">
                            {props.props.location} - {props.props.destination}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            {props.props.noOfPassengers + " persons" + "," + props.props.carType}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12" id="margin-gen">
                            <TextField
                                id="standard-basic"
                                name="price"
                                onChange={formik.handleChange}
                                value={formik.values.price}
                                label="Price"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12" id="rate">
                            <Checkbox value="checkedA" inputProps={{ 'aria-label': 'Checkbox A' }} /> Rate Negotiable
                        </div>
                    </div>

                    <div className="row">
                        {!letsChange &&
                            <div className="col-md-12">
                                <Button disabled={formik.values.price.toString().length > 3 ? false : true} color="primary" variant="contained" fullWidth type="submit"> Next  </Button>
                            </div>
                        }
                    </div>
                </form>
            </div>
            {
                letsChange &&
                <div className="offset-4 col-md-4" id="margin-gen">
                    <div className="col-md-12">
                        <StepThree props={props.headerValChange} price={formik.values.price} />
                    </div>
                </div>
            }
        </div >
    )
}