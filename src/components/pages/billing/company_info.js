import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input, Select, Row, Col } from 'antd'
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

export default class company_info extends Component {
    static propTypes = {
        prop: PropTypes
    }
    constructor(props) {
        super(props);
        this.state = { country: '', region: '' };
    }
    selectCountry(val) {
        this.setState({ country: val });
        console.log(val, "in select country");
    }
    selectRegion(val) {
        this.setState({ region: val });
    }
    render() {
        const { country } = this.state;
        return (
            <div className="custom-container">
                <Row gutter={24}>
                    <Col>
                        <div className="info-cntnr from">
                            <p>Name of the Company</p>
                            <Input placeholder="Name of the Company" />
                            <br /><br />
                            <p>Country</p>
                            <CountryDropdown style={{ width: '100%' }} className="country-dropdwn" value={country} onChange={(val) => this.selectCountry(val)}>
                            </CountryDropdown>
                            <br /><br />
                            <p>Company Address</p>
                            <Input placeholder="Company Address" />
                            <br /><br />
                            <p>Zip Code</p>
                            <Input placeholder="Zip code" />
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
