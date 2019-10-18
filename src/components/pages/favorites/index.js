import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import rotateAction from "actions/rotateAction";
import { DatePicker, Col, Row, Tag, Menu, Dropdown, Icon, Input, Tooltip, Select, Rate } from 'antd';
import { Link } from "react-router-dom";
import Mail from "../../images/mail.png";
import Mail1 from "../../images/mail1.png";
import '../dashboard/singlemail';
const { Option } = Select;
const { Search } = Input;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const desc = ['Add to favorites'];
function onChange(date, dateString) {
    console.log(date, dateString);
}
class Index extends Component {
    static propTypes = {
        prop: PropTypes
    }
    state = {
        value: 1,
    };
    handleChange = value => {
        this.setState({ value });
    };
    render() {
        const { value } = this.state;
        return (
            <div className="custom-container">
                <Row className="app-hdng">
                    <h2>Favorites Mail</h2>
                </Row>
                <Row gutter={24}>
                    <Col span={24} style={{ marginTop: '50px' }}>
                        <Row gutter={24} type="flex">
                            <Col xs={24} md={12} lg={6} className="select_site">
                                <RangePicker onChange={onChange} />
                            </Col>
                            <Col xs={24} md={12} lg={6} className="select_site">
                                <Select placeholder="Select Website" style={{ width: '70%' }}>
                                    <Option value="website1">Website 1</Option>
                                    <Option value="website2">Website 2</Option>
                                    <Option value="website3">Website 3</Option>
                                </Select>
                            </Col>
                            <Col xs={24} md={12} lg={6} className="select_site">
                                <Select placeholder="select tag" style={{ width: '70%' }}>
                                    <Option value="tag1">tag 1</Option>
                                    <Option value="tag2">tag 2</Option>
                                    <Option value="tag3">tag 3</Option>
                                </Select>
                            </Col>
                            <Col xs={24} md={12} lg={6}>
                                <Search placeholder="Search Subject" onSearch={value => console.log(value)} enterButton />
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row gutter={24} style={{ marginTop: '50px' }}>
                    <Col span={24} style={{ marginTop: '50px' }}>
                        <Row gutter={24} type="flex">
                            <Col xs={24} md={12} lg={6}>
                                <div className="analytics-container">
                                    <div className="analytics-card-header">
                                        <div className="mail-title app-hdng">
                                            <h3>This Is Just A Test</h3>
                                        </div>
                                        <div className="fav-icon">
                                            <Rate style={{ fontSize: '30px', color: '#1890ff' }} tooltips={desc} count={1} onChange={this.handleChange} value={value} />
                                        </div>
                                    </div>
                                    <Link to="dashboard/singlemail">
                                        <div className="analytics-card">
                                            <Row gutter={24}>
                                                <div>
                                                    <Col xs={24} md={6} lg={6}>
                                                        <div className="from">
                                                            <p>From :</p>
                                                        </div>
                                                    </Col>
                                                    <Col xs={24} md={18} lg={18}>
                                                        <div className="Sent">

                                                            <p>
                                                                sam ota
                                                            </p>

                                                        </div>
                                                    </Col>
                                                </div>
                                                <div>
                                                    <Col xs={24} md={4} lg={6}>
                                                        <div className="from">
                                                            <p>Sent: </p>
                                                        </div>
                                                    </Col>
                                                    <Col xs={24} md={20} lg={18}>
                                                        <div className="Sent">
                                                            <p>Sun, 29 Sep 2019 03:35:20</p>
                                                        </div>
                                                    </Col>
                                                </div>

                                            </Row>
                                        </div>
                                        <div className="mail-image">
                                            <img src={Mail} />
                                        </div>
                                    </Link>
                                </div>
                            </Col>

                            <Col xs={24} md={12} lg={6}>
                                <div className="analytics-container">
                                    <div className="analytics-card-header">
                                        <div className="mail-title app-hdng">
                                            <h3>This Is Just A Test</h3>
                                        </div>
                                        <div className="fav-icon">
                                            <Rate style={{ fontSize: '30px', color: '#1890ff' }} tooltips={desc} count={1} onChange={this.handleChange} value={value} />
                                        </div>
                                    </div>
                                    <Link to="dashboard/singlemail">
                                        <div className="analytics-card">
                                            <Row gutter={24}>
                                                <div>
                                                    <Col xs={24} md={6} lg={6}>
                                                        <div className="from">
                                                            <p>From :</p>
                                                        </div>
                                                    </Col>
                                                    <Col xs={24} md={18} lg={18}>
                                                        <div className="Sent">

                                                            <p>
                                                                sam ota
                                                            </p>

                                                        </div>
                                                    </Col>
                                                </div>
                                                <div>
                                                    <Col xs={24} md={4} lg={6}>
                                                        <div className="from">
                                                            <p>Sent: </p>
                                                        </div>
                                                    </Col>
                                                    <Col xs={24} md={20} lg={18}>
                                                        <div className="Sent">
                                                            <p>Sun, 29 Sep 2019 03:35:20</p>
                                                        </div>
                                                    </Col>
                                                </div>

                                            </Row>
                                        </div>
                                        <div className="mail-image">
                                            <img src={Mail} />
                                        </div>
                                    </Link>
                                </div>
                            </Col>

                        </Row>
                    </Col>
                </Row>


            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state
});
const mapDispatchToProps = dispatch => ({
    rotateAction: (payload) => dispatch(rotateAction(payload))
});
export default connect(mapStateToProps, mapDispatchToProps)(Index);
