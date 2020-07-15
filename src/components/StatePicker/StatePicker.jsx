import React from 'react';
import { NativeSelect, FormControl} from '@material-ui/core';
import styles from './StatePicker.module.css';
import stateData from '../../data/Court_Summary.json';

const StatePicker = ({ handleStateChange }) => {
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleStateChange(e.target.value)}>
                <option></option>
                {stateData.map((state,i) => <option key={i} value={state.State_Letters}>{state.State_Letters}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default StatePicker;