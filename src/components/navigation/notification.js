
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import 'ant-design-pro/dist/ant-design-pro.css';
import NoticeIcon from 'ant-design-pro/lib/NoticeIcon';
import { Tag } from 'antd';
const data = [
    {
        id: '000000006',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
        title: 'Mail1',
        description: 'Mail Description',
        datetime: '2017-08-07',
        type: 'mail',
        clickClose: true,
    },
    {
        id: '000000007',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
        title: 'Mail1',
        description: 'Mail Description',
        datetime: '2017-08-07',
        type: 'mail',
        clickClose: true,
    },
    {
        id: '000000008',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
        title: 'Mail1',
        description: 'Mail Description',
        datetime: '2017-08-07',
        type: 'mail',
        clickClose: true,
    },
];

function onItemClick(item, tabProps) {
    console.log(item, tabProps);
}

function onClear(tabTitle) {
    console.log(tabTitle);
}

function getNoticeData(notices) {
    if (notices.length === 0) {
        return {};
    }
    const newNotices = notices.map(notice => {
        const newNotice = { ...notice };
        if (newNotice.id) {
            newNotice.key = newNotice.id;
        }
        if (newNotice.extra && newNotice.status) {
            const color = {
                todo: '',
                processing: 'blue',
                urgent: 'red',
                doing: 'gold',
            }[newNotice.status];
            newNotice.extra = (
                <Tag color={color} style={{ marginRight: 0 }}>
                    {newNotice.extra}
                </Tag>
            );
        }
        return newNotice;
    });
    return newNotices.reduce((pre, data) => {
        if (!pre[data.type]) {
            pre[data.type] = [];
        }
        pre[data.type].push(data);
        return pre;
    }, {});
}

const noticeData = getNoticeData(data);
export default class notification extends Component {
    render() {
        return (
            <div
                style={{
                    textAlign: 'start',
                    // marginRight: '20px',
                    color: '#08c',
                    // height:'30px',
                    fontSize: '21px',

                }}
            >
                <NoticeIcon className="notice-icon" count={3} onItemClick={onItemClick} onClear={onClear}>
                    <NoticeIcon.Tab
                        className="notificateion-bar"
                        list={noticeData.mail}
                        title="mail"
                        emptyText="None"
                        emptyImage="https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg"
                    />
                </NoticeIcon>


            </div>
        )
    }
}
