import Chart from 'chart.js/auto';
import React, { useEffect, useRef } from 'react';

const LineGraph: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (canvasRef.current) {
            const ctx = canvasRef.current.getContext('2d');
            if (ctx) {
                const myChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                        datasets: [{
                            label: "Last Year's Performance",
                            data: [65, 59, 80, 81, 56, 12, 3, 55, 40, 69, 45,],
                            fill: false,
                            borderColor: 'rgb(75, 192, 192)',
                            tension: 0.1
                        }]
                    },
                    options: {
                        responsive: true,
                        plugins: {
                            legend: {
                                position: 'top',
                            },
                            title: {
                                display: true,
                                text: 'Chart.js Line Chart',
                            },
                        },
                    },
                });

                return () => {
                    myChart.destroy();
                };
            }
        }
    }, []);

    return <canvas ref={canvasRef} />;
};

export default LineGraph;
