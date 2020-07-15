import SummaryData from '../data/Court_Main_Summary.json';
import stateData from '../data/Court_Summary.json';

export const fetchData = (state) => {
    let output = Object.values(stateData);
    let vals = [];
    let finalReturn = [];
    if (state) {
        for (var i = 0; i < output.length; i++) {
            var datum=output[i];
            vals.push(datum);
        }
        let returnInfo = Object.values(vals);
        for (var j = 0; j < returnInfo.length; j++){
            if (returnInfo[j].State_Letters === state){
                finalReturn.push(returnInfo[j]);
            }
        }
        return finalReturn;
    }
    try {
            const response = SummaryData;
            return response;
        

    } catch (error) {

    }
}

export const fetchDailyData = () => {
    try {
        
    } catch (error) {

    }
}

export const states = () => {
    const response = stateData;
}