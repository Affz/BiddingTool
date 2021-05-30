import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useFormik } from 'formik';
import React from 'react';
import * as yup from "yup"
import { StepFour } from './stepFour';


export const StepThree = (props: any) => {
    const [letsChange, setValues] = React.useState(false);
    const validationSchema = yup.object({
        phoneNo: yup
            .string()
            .max(10, '10 digits is required')
            .min(10, '10 digits is required')
    });
    const formik = useFormik({
        initialValues: {
            phoneNo: "",
            name: "",
            remarks: ""
        },
        validationSchema: validationSchema,
        onSubmit: (currValues) => {
            console.log(currValues);
            setValues(true);
            props.props({ number: 4, name: "Summary and Submit Bid" });
        }
    });
    return (
        <div className="row">
            <div className="col-md-12" style={{ marginTop: "20px" }}>
                <form onSubmit={formik.handleSubmit}>

                    {!letsChange ?
                        <div className="row">
                            <div className="col-md-12" style={{ marginTop: "20px" }}>
                                <TextField
                                    fullWidth
                                    id="outlined-basic"
                                    label="Enter your 10 digits mobile Number" variant="outlined"
                                    name="phoneNo"
                                    value={formik.values.phoneNo}
                                    onChange={formik.handleChange}
                                    error={formik.touched.phoneNo && Boolean(formik.errors.phoneNo)}
                                    helperText={formik.touched.phoneNo && formik.errors.phoneNo}
                                />
                            </div>
                            <div className="col-md-12" style={{ marginTop: "20px" }}>
                                <TextField
                                    fullWidth
                                    id="outlined-basic"
                                    label="Enter your name"
                                    variant="outlined"
                                    name="name"
                                    type="text"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    error={formik.touched.name && Boolean(formik.errors.name)}
                                    helperText={formik.touched.name && formik.errors.name}
                                />
                            </div>
                            <div className="col-md-12" style={{ marginTop: "20px" }}>
                                <TextField
                                    fullWidth
                                    id="outlined-basic"
                                    label="Enter remarks(optional)"
                                    variant="outlined"
                                    name="remarks"
                                    type="text"
                                    value={formik.values.remarks}
                                    onChange={formik.handleChange}
                                    error={formik.touched.remarks && Boolean(formik.errors.remarks)}
                                    helperText={formik.touched.remarks && formik.errors.remarks}
                                />
                            </div>
                            <div className="col-md-12" style={{ marginTop: "20px" }}>
                                <Button color="primary" variant="contained" fullWidth type="submit">
                                    Verify via OTP
                    </Button>
                            </div>
                        </div>
                        :
                        <div className="row">
                            <div className="col-md-12">
                                <StepFour props={formik.values} price={props.price} />
                            </div>
                        </div>
                    }
                </form>
            </div>
        </div>
    )
}