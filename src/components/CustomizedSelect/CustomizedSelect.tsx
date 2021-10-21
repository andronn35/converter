import React from 'react';
import { createStyles, makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import selectClasses from './CustomizedSelect.module.css'

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
      "& .MuiFormLabel-root": {
        color: "rgba(255, 255, 255, 1)" // or black
      }
    },
    input: {
      
      borderRadius: 0,
      color: '#ffffff',
      position: 'relative',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      border: '1px solid #ced4da',
      fontSize: 18, 
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 0,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }),
)(InputBase);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(0)      
    },
  }),
);

const divStyle = {
  color: 'white',
  padding: '3px',
  fontSize: 14
};

const selectStyle = {
  backgroundColor:'#505050'
};

type PropsType = {
  optionValue?: string
  inputValue?: number
  onSelectChange?: any
  onInputChange?: any
}

const CustomizedSelects: React.FC<PropsType> = (props) => {
  const classes = useStyles();

  let handleChangeSelect = (e: any) => {
    props.onSelectChange(e.target.value)
  };

  let handleChangeInput = (e: any) => {
    props.onInputChange(e.target.value)
  }

  return (
    <div className={selectClasses.selects}> 

      <div className={selectClasses.oneSelect}>
        <div>
          <FormControl className={classes.margin}>
            <InputLabel htmlFor="demo-customized-textbox"></InputLabel>
            <BootstrapInput id="demo-customized-textbox" value={props.inputValue} onChange={handleChangeInput} type="number"/>
          </FormControl>
        </div>
        
        <div>
          <FormControl className={classes.margin}>
            <InputLabel htmlFor="demo-customized-select-native" style={divStyle}>Валюта</InputLabel>
            <NativeSelect
              id="demo-customized-select-native"
              value={props.optionValue}
              onChange={handleChangeSelect}
              input={<BootstrapInput />}
            >
              <option style={selectStyle} aria-label="None" value="" />
              <option style={selectStyle} value={'RUB'}>RUB</option>
              <option style={selectStyle} value={'USD'}>USD</option>
              <option style={selectStyle} value={'EUR'}>EUR</option>
              <option style={selectStyle} value={'CHF'}>CHF</option>
              <option style={selectStyle} value={'CNY'}>CNY</option>
            </NativeSelect>
          </FormControl>
        </div>
      </div>
    </div>
  );
}

export default CustomizedSelects;

