import React from 'react';
import {Line, Bar} from 'react-chartjs-2';
import chartData from '../../data/Court_Summary.json';
import styles from './Chart.module.css';

const Chart = ({data, state}) => {
                let output = Object.values(data);
                let vals = [];
                let emailFinal = 0;
                let peopleFinal = 0;
                for (var i = 0; i < output.length; i++) {
                    emailFinal = output[i].Emails;
                    peopleFinal = output[i].Reporters;
                }
                const lineChart = (
                <Line 
                    data={{
                        labels: chartData.map(function(e) { return e.State_Letters }),
                        datasets: [{
                            data: chartData.map(function(e) { return e.Emails }),
                            label: 'Emails',
                            borderColor: 'white',
                            backgroundColor: '#e67716',
                            fill: true
                        },{
                            data: chartData.map(function(e) { return e.Reporters }),
                            label: 'Reporters',
                            borderColor: '#00c6d4',
                            backgroundColor: '#0059ab',
                            fill: true
                        }]
                    }}
                />
            );

            const barChart = (
                <Bar 
                    data={{
                        labels: ['Emails', 'Reporters'],
                        datasets: [{
                            label: 'People',
                            backgroundColor: [
                                'rgba(0, 0, 255, 0.5)', 
                                'rgba(0, 255, 0, 0.5)', 
                                'rgba(255, 0, 0, 0.5)'
                            ],
                            data: [emailFinal,peopleFinal]
                        }]
                    }}
                    options = {{
                        legend: {display: false},
                        title: { display: true, text: `Current numbers in ${state}`},

                    }}
                />
            );
        return (
            <div className={styles.container} >
                {state ? barChart : lineChart}
            </div>
        );
}

export default Chart;