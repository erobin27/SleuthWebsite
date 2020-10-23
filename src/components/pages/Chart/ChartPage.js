import React from 'react';
import {Cards, Chart, CountryPicker } from '../../covidChart';
import styles from './ChartPage.module.css';
import {fetchData } from '../../covidChart/api';
//import covidImage from './images/image.png'

class ChartPage extends React.Component {
    state = {
        data: {},
        country: '',
    }
    
    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({data: fetchedData});
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({data: fetchedData, country: country})
    }

    render() {
        const { data, country } = this.state;
        console.log(data)

        return(
            <div className={styles.container}>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}


export default ChartPage;
