import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import { useFormik } from 'formik';
import React from 'react';
import * as yup  from "yup"


export const StepFour= (props:any) => {
    const [letsChange, setValues] = React.useState(false);
    const validationSchema = yup.object({
        phoneNo: yup
          .string()
          .max(10,'Enter 10 digits phone number')
      });
    const formik = useFormik({
        initialValues: {
         price:"",
         phoneNo:"",
         name:"",
         remarks:""
        },
        validationSchema: validationSchema,
        onSubmit: (currValues) => {
           console.log(currValues);
           setValues(true);
        }
    });
    return (
        <div>
            Step 4
        </div>
    )};
    