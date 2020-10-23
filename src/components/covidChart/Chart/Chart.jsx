import React, { useState, useEffect, Fragment } from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { fetchDailyData } from '../api';
import styles from './Chart.module.css';

const Chart = ({ data: { confirmed, deaths, recovered }, country }) => {
	const [dailyData, setDailyData] = useState([]);

	useEffect(() => {
		const fetchAPI = async () => {
			setDailyData(await fetchDailyData());
		};

		fetchAPI();
	}, []);

	const lineChart = dailyData.length ? (
		<Line
			data={{
				labels: dailyData.map(({ date }) => date),
				datasets: [
					{
						data: dailyData.map(({ confirmed }) => confirmed),
						label: 'Infected',
						borderColor: 'rgba(255, 0, 0, 0.5)',
						backgroundColor: 'rgba(255, 0, 0, 0.1)',
						fill: true,
					},
					{
						data: dailyData.map(({ deaths }) => deaths),
						label: 'Deaths',
						borderColor: '#333FFF',
						backgroundColor: 'rgba(0, 0, 255, 0.4)',
						fill: true,
					},
				],
			}}
		/>
	) : null;

	const barChart = confirmed ? (
		<Bar
			data={{
				labels: ['Infected', 'Recovered', 'Deaths'],
				datasets: [
					{
						label: 'People',
						backgroundColor: [
							'rgba(255, 0, 0, 0.5)',
							'rgba(0, 255, 0, 0.5)',
							'rgba(0, 0, 255, 0.5)',
						],
						data: [confirmed.value, recovered.value, deaths.value],
					},
				],
			}}
			options={{
				legend: { display: false },
				title: { display: true, text: `Current State in ${country}` },
			}}
		/>
	) : null;

	const pieChart = confirmed ? (
		<Pie
			data={{
				labels: ['Infected', 'Recovered', 'Deaths'],
				datasets: [
					{
						label: 'People',
						backgroundColor: [
							'rgba(255, 0, 0, 0.5)',
							'rgba(0, 255, 0, 0.5)',
							'rgba(0, 0, 255, 0.5)',
						],
						data: [confirmed.value, recovered.value, deaths.value],
					},
				],
			}}
			options={{
				legend: { display: true },
			}}
		/>
	) : null;

	return (
		<div className={styles.container}>
			{country ? (
				<Fragment>
					{' '}
					{barChart}
					<div className={styles.pieChart}>{pieChart}</div>{' '}
				</Fragment>
			) : (
				lineChart
			)}
		</div>
	);
};

export default Chart;
