import React from 'react';
import { useFormik } from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import * as yup from "yup"
import { StepTwo } from './stepTwo';
import { Header } from './header';

const validationSchema = yup.object().shape({
    location: yup
        .string()
        .required('location is required'),
    destination: yup
        .string()
        .required('Destination is required'),
    carType: yup
        .string(),
    noOfPassengers: yup
        .number()
        .when('carType', {
            is: value => value === "SUV",
            then: yup
              .number()
                .max(6, 'Max 6 passengers are required'),
            otherwise: yup
              .number()   
                .max(4, 'Max 4 passengers are required'),
        }),
});

export const StepOne = () => {
    const [letsChange, setValues] = React.useState(false);
    const [headerVal, setHeaderVal] = React.useState({ number: 1, name: "Place Your Bid" });

    const formik = useFormik({
        initialValues: {
            location: '',
            destination: '',
            noOfPassengers: 0,
            carType: "Select",
        },
        validationSchema: validationSchema,
        onSubmit: (currValues) => {
            setValues(true);
            setHeaderVal({ number: 2, name: "Place your Bid" });
        }
    });

    return (
        !letsChange ?
            <div className="row">
                <div className="col-md-12">
                    <Header props={headerVal} />
                </div>
                <div className="offset-4 col-md-4">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="row" id="margin-gen">
                            <div className="col-md-6">
                                <TextField
                                    fullWidth
                                    id="outlined-basic"
                                    label="Source Location*" variant="outlined"
                                    name="location"
                                    value={formik.values.location}
                                    onChange={formik.handleChange}
                                    error={formik.touched.location && Boolean(formik.errors.location)}
                                    helperText={formik.touched.location && formik.errors.location}
                                />
                            </div>
                            <div className="col-md-6">
                                <TextField
                                    fullWidth
                                    id="outlined-basic"
                                    label="Destination*"
                                    variant="outlined"
                                    name="destination"
                                    type="text"
                                    value={formik.values.destination}
                                    onChange={formik.handleChange}
                                    error={formik.touched.destination && Boolean(formik.errors.destination)}
                                    helperText={formik.touched.destination && formik.errors.destination}
                                />
                            </div>
                        </div>
                        <div className="row" id="margin-gen">
                            <div className="col-md-12">
                                <FormControl variant="outlined" style={{ width: "460px" }}>
                                    <InputLabel id="demo-simple-select-outlined-label" style={{ top: "-7px" }}>Car Type</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        onChange={formik.handleChange}
                                        value={formik.values.carType}
                                        name="carType"
                                    >
                                        <MenuItem value={"HachBack"}>HachBack</MenuItem>
                                        <MenuItem value={"Sedan"}>Sedan</MenuItem>
                                        <MenuItem value={"SUV"}>SUV</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <div className="row" id="margin-gen">
                            <div className="col-md-12">
                                <TextField
                                    fullWidth
                                    id="outlined-basic"
                                    label="Number of travellers"
                                    variant="outlined"
                                    name="noOfPassengers"
                                    type="text"
                                    value={formik.values.noOfPassengers}
                                    onChange={formik.handleChange}
                                    error={formik.touched.noOfPassengers && Boolean(formik.errors.noOfPassengers)}
                                    helperText={formik.touched.noOfPassengers && formik.errors.noOfPassengers}
                                />
                            </div>
                        </div>
                        <Button color="primary" variant="contained" fullWidth type="submit" id="margin-gen">
                            Enter Bid Details
                      </Button>
                    </form>
                </div>
            </div>
            :
            <div>
                <Header props={headerVal} />
                <StepTwo props={formik.values} headerValChange={setHeaderVal} />
            </div>
    );
};

