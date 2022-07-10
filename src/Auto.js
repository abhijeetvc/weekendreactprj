import { Controller, useForm } from "react-hook-form";
import { Autocomplete,TextField ,Button,Select} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";

import React,{useState} from 'react'

import * as Yup from "yup";

export default function App() {

    const validationSchema = Yup.object().shape({
        item: 
            Yup.object().shape({
              value: Yup.string().required(),
              label: Yup.string().required()
            }),
        personalInfo: Yup.object().shape({
                username: Yup.string().required("Name required"),
                email: Yup.string().required("Email required"),
              }),       
      });

    const [itemList, setItemList] = useState([
      { label: 1, value: "item1" },
      { label: 2, value: "item2" }
    ]);

    const[selectedOption,setSelectedOption]=React.useState()

    const {
      control,
      reset,
      handleSubmit,
      setValue,
      defaultValues,
      formState: { errors }
    } = useForm({
      mode: "onChange",
      defaultValues: {
     item:{
        item:{
            label:'',
            value:''
        }
    }  ,
    personalInfo: {
        username: '',
        email: '',
      },
 },
      resolver:yupResolver(validationSchema)
    });
  
    const onSubmit = (formInputs) => {
      console.log("formInputs", formInputs);
      reset(defaultValues)
    };
  
    return (
      <div>
          <form onSubmit={handleSubmit(onSubmit)}>

            <Controller
              control={control}
              name="item"
              render={({ field: { onChange, value } }) => (
                <Autocomplete
                  onChange={(event, item) => {
                    onChange(item);
                    setSelectedOption(item)
                  }}
                  value={value}
                  options={itemList}
                  getOptionLabel={(item) => (item.value ? item.value : "")}
                  isOptionEqualToValue={(option, value) =>
                    value === undefined ||
                    value === "" ||
                    option.value === value.value
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="items"
                      margin="normal"
                      variant="outlined"
                    
                      error={!!errors.item}
                      helperText={errors.item && "item required"}
                     // helperText={fieldState.error?.message}
                    />
                  )}
                />
              )}
            />

        <Controller
          name="personalInfo.username"
          control={control}
        //  rules={{ required: 'First name required' }}
          render={({ field: { onChange, value, ref} ,fieldState: { error }}) => (
            <TextField
              onChange={onChange}
              value={value}
              type="text"
            //   variant="filled"
              placeholder="username"
              ref={ref}
              error={!!error}
              helperText={error ? error.message : null}

            />
          )}
        />

        <Controller
          name="personalInfo.email"
          control={control}
          render={({ field: { onChange, value, ref }, fieldState:{error}  }) => (
            <TextField
              onChange={onChange}
              value={value}
              ref={ref}
              type="email"
              placeholder="Email"
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
        />

       
            <Button
              type="submit"
              fullWidth
              size="large"
              variant="contained"
              color="primary"
            >
              submit
            </Button>
          </form>
          {JSON.stringify(selectedOption)}
          </div>
          )
         }