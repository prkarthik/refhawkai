import React, {Component, Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';
import classnames from 'classnames';
import SubComponent from '../Basic/dataSources';
import {dateFormat, datePFormat} from '../../../utils/common';

import {
    Row, Col,
    Button,
    CardHeader,
    Card,
    CardBody,
    Progress,
    TabContent,
    TabPane,
} from 'reactstrap';

import PageTitle from '../../../Layout/AppMain/PageTitle';

import {
    AreaChart, Area, Line,
    ResponsiveContainer,
    Bar,
    BarChart,
    ComposedChart,
    CartesianGrid,
    Tooltip,
    LineChart
} from 'recharts';

import {
    faAngleUp,
    faArrowRight,
    faArrowUp,
    faArrowLeft,
    faAngleDown
} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import avatar1 from '../../../assets/utils/images/avatars/1.jpg';
import avatar2 from '../../../assets/utils/images/avatars/2.jpg';
import avatar3 from '../../../assets/utils/images/avatars/3.jpg';
import avatar4 from '../../../assets/utils/images/avatars/4.jpg';
import DataSources from '../Basic/dataSources';


const data = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
    {name: 'Page C', uv: 2000, pv: 6800, amt: 2290},
    {name: 'Page D', uv: 4780, pv: 7908, amt: 2000},
    {name: 'Page E', uv: 2890, pv: 9800, amt: 2181},
    {name: 'Page F', uv: 1390, pv: 3800, amt: 1500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

const data2 = [
    {name: 'Page A', uv: 5400, pv: 5240, amt: 1240},
    {name: 'Page B', uv: 7300, pv: 4139, amt: 3221},
    {name: 'Page C', uv: 8200, pv: 7980, amt: 5229},
    {name: 'Page D', uv: 6278, pv: 4390, amt: 3200},
    {name: 'Page E', uv: 3189, pv: 7480, amt: 6218},
    {name: 'Page D', uv: 9478, pv: 6790, amt: 2200},
    {name: 'Page E', uv: 1289, pv: 1980, amt: 7218},
    {name: 'Page F', uv: 3139, pv: 2380, amt: 5150},
    {name: 'Page G', uv: 5349, pv: 3430, amt: 3210},
];


// const requestData = (pageSize, page, sorted, filtered) => {
//     return new Promise((resolve, reject) => {
//         var subTableData = [];
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(response => response.json())
//         .then(json => subTableData.push(json));
//          let filteredData = subTableData;
//     });
//   };
export default class AnalyticsDashboard1 extends Component {
    constructor() {
        super();

        this.state = {
            dropdownOpen: false,
            activeTab1: '11',
            tableData: [
                {
                  "sheetzIdx": 38,
                  "userIdx": 63,
                  "name": "Walmart Stores",
                  "url": "file:///var/www/uploads/8414129875.xlsx",
                  "creationTime": "2017-03-30 15:36:24",
                  "group": 0
                },
                {
                  "sheetzIdx": 41,
                  "userIdx": 63,
                  "name": "ConversionLogs_Raw",
                  "url": "file:///var/www/uploads/525263962.xlsx",
                  "creationTime": "2017-03-31 12:01:56",
                  "group": 0
                },
                {
                  "sheetzIdx": 48,
                  "userIdx": 63,
                  "name": "conversionLogs",
                  "url": "file:///var/www/uploads/8562106490.xlsx",
                  "creationTime": "2017-04-05 14:54:48",
                  "group": 0
                },
                {
                  "sheetzIdx": 49,
                  "userIdx": 63,
                  "name": "Hawkai-logo_V8",
                  "url": "file:///var/www/uploads/5069127669.png",
                  "creationTime": "2017-04-05 17:35:35",
                  "group": 0
                },
                {
                  "sheetzIdx": 50,
                  "userIdx": null,
                  "name": "SiteNames",
                  "url": "file:///var/www/uploads/7690974390.xlsx",
                  "creationTime": "2017-04-07 12:19:11",
                  "group": 0
                },
                {
                  "sheetzIdx": 51,
                  "userIdx": null,
                  "name": "SiteNames",
                  "url": "file:///var/www/uploads/5163014167.xlsx",
                  "creationTime": "2017-04-07 12:20:17",
                  "group": 0
                },
                {
                  "sheetzIdx": 52,
                  "userIdx": 63,
                  "name": "SiteNames",
                  "url": "file:///var/www/uploads/2570396596.xlsx",
                  "creationTime": "2017-04-07 12:25:10",
                  "group": 0
                },
                {
                  "sheetzIdx": 53,
                  "userIdx": 63,
                  "name": "SiteNames",
                  "url": "file:///var/www/uploads/5703734555.xlsx",
                  "creationTime": "2017-04-07 12:30:13",
                  "group": 0
                },
                {
                  "sheetzIdx": 54,
                  "userIdx": 63,
                  "name": "SiteNames",
                  "url": "file:///var/www/uploads/1439660326.xlsx",
                  "creationTime": "2017-04-07 12:31:26",
                  "group": 0
                },
                {
                  "sheetzIdx": 55,
                  "userIdx": 63,
                  "name": "SiteNames1",
                  "url": "file:///var/www/uploads/8216131376.xlsx",
                  "creationTime": "2017-04-07 13:28:57",
                  "group": 0
                },
                {
                  "sheetzIdx": 56,
                  "userIdx": 63,
                  "name": "SummaryImpressions",
                  "url": "file:///var/www/uploads/8018780341.xlsx",
                  "creationTime": "2017-04-13 14:25:56",
                  "group": 0
                },
                {
                  "sheetzIdx": 57,
                  "userIdx": 63,
                  "name": "SummaryImpressions10",
                  "url": "file:///var/www/uploads/9024246372.xlsx",
                  "creationTime": "2017-04-18 11:56:40",
                  "group": 0
                },
                {
                  "sheetzIdx": 58,
                  "userIdx": 63,
                  "name": "Conversion Logs 0307",
                  "url": "file:///var/www/uploads/4130668779.xlsx",
                  "creationTime": "2017-07-21 15:59:25",
                  "group": 0
                },
                {
                  "sheetzIdx": 60,
                  "userIdx": 63,
                  "name": "911CallDataJanMar2015",
                  "url": "file:///var/www/uploads/3560724318.xlsx",
                  "creationTime": "2017-09-12 14:48:27",
                  "group": 0
                },
                {
                  "sheetzIdx": 73,
                  "userIdx": 68,
                  "name": "20102015SanJoseCrashData_30K",
                  "url": "file:///var/www/uploads/2649459913.xlsx",
                  "creationTime": "2017-09-19 13:30:22",
                  "group": 0
                },
                {
                  "sheetzIdx": 75,
                  "userIdx": 68,
                  "name": "walmart_store_openings",
                  "url": "file:///var/www/uploads/6489845695.xlsx",
                  "creationTime": "2017-09-20 11:46:09",
                  "group": 0
                },
                {
                  "sheetzIdx": 77,
                  "userIdx": 68,
                  "name": "SummaryImpressions10",
                  "url": "file:///var/www/uploads/4980907258.xlsx",
                  "creationTime": "2017-09-20 14:03:09",
                  "group": 0
                },
                {
                  "sheetzIdx": 78,
                  "userIdx": 68,
                  "name": "SummaryImpressions100",
                  "url": "file:///var/www/uploads/2066518752.xlsx",
                  "creationTime": "2017-09-20 14:08:16",
                  "group": 0
                },
                {
                  "sheetzIdx": 80,
                  "userIdx": 68,
                  "name": "SummaryImpressions100",
                  "url": "file:///var/www/uploads/4083933243.xlsx",
                  "creationTime": "2017-09-20 15:55:55",
                  "group": 0
                },
                {
                  "sheetzIdx": 81,
                  "userIdx": 68,
                  "name": "20102015SanJoseCrashData_30K",
                  "url": "file:///var/www/uploads/7145543703.xlsx",
                  "creationTime": "2017-09-22 10:32:44",
                  "group": 0
                },
                {
                  "sheetzIdx": 82,
                  "userIdx": 68,
                  "name": "20102015SanJoseCrashData_30K",
                  "url": "file:///var/www/uploads/9106310061.xlsx",
                  "creationTime": "2017-09-22 12:13:40",
                  "group": 0
                },
                {
                  "sheetzIdx": 83,
                  "userIdx": 63,
                  "name": "airports",
                  "url": "file:///var/www/uploads/1316415397.xlsx",
                  "creationTime": "2017-09-22 15:36:05",
                  "group": 0
                },
                {
                  "sheetzIdx": 84,
                  "userIdx": 69,
                  "name": "Meter_Location_Lookup",
                  "url": "file:///var/www/uploads/637171030.xlsx",
                  "creationTime": "2017-09-26 11:08:58",
                  "group": 0
                },
                {
                  "sheetzIdx": 85,
                  "userIdx": 69,
                  "name": "Street_Tree_Map",
                  "url": "file:///var/www/uploads/1774358917.xlsx",
                  "creationTime": "2017-09-26 13:39:15",
                  "group": 0
                },
                {
                  "sheetzIdx": 86,
                  "userIdx": 69,
                  "name": "Street_Tree_Map",
                  "url": "file:///var/www/uploads/147306015.csv",
                  "creationTime": "2017-09-26 14:01:08",
                  "group": 0
                },
                {
                  "sheetzIdx": 87,
                  "userIdx": 69,
                  "name": "Street_Tree_Map-All",
                  "url": "file:///var/www/uploads/6492067347.csv",
                  "creationTime": "2017-09-27 13:44:25",
                  "group": 0
                },
                {
                  "sheetzIdx": 88,
                  "userIdx": 69,
                  "name": "Analysis Neighborhoods",
                  "url": "file:///var/www/uploads/4810549025.json",
                  "creationTime": "2017-09-28 16:08:06",
                  "group": 0
                },
                {
                  "sheetzIdx": 89,
                  "userIdx": 69,
                  "name": "Street_Tree_Map-XLS",
                  "url": "file:///var/www/uploads/1623214818.xls",
                  "creationTime": "2017-10-02 11:41:52",
                  "group": 0
                },
                {
                  "sheetzIdx": 90,
                  "userIdx": 63,
                  "name": "Country-Populations",
                  "url": "file:///var/www/uploads/3046183772.xlsx",
                  "creationTime": "2017-10-04 11:54:06",
                  "group": 0
                },
                {
                  "sheetzIdx": 91,
                  "userIdx": 63,
                  "name": "SummaryImpressions100",
                  "url": "file:///var/www/uploads/8526569930.xlsx",
                  "creationTime": "2017-10-13 15:35:58",
                  "group": 0
                },
                {
                  "sheetzIdx": 92,
                  "userIdx": 63,
                  "name": "walmart_store_openings",
                  "url": "file:///var/www/uploads/3982554585.xlsx",
                  "creationTime": "2017-10-13 15:39:30",
                  "group": 0
                },
                {
                  "sheetzIdx": 93,
                  "userIdx": 69,
                  "name": "Existing_Commercial_Buildings_Energy_Performance_Ordinance_Report",
                  "url": "file:///var/www/uploads/8388874186.csv",
                  "creationTime": "2017-10-16 17:02:22",
                  "group": 0
                },
                {
                  "sheetzIdx": 94,
                  "userIdx": 63,
                  "name": "Wines",
                  "url": "file:///var/www/uploads/1699377493.xlsx",
                  "creationTime": "2017-10-20 14:04:32",
                  "group": 0
                },
                {
                  "sheetzIdx": 95,
                  "userIdx": 63,
                  "name": "Wine-Data",
                  "url": "file:///var/www/uploads/1085001071.csv",
                  "creationTime": "2017-10-20 17:22:37",
                  "group": 0
                },
                {
                  "sheetzIdx": 96,
                  "userIdx": 63,
                  "name": "SummaryImpressions",
                  "url": "file:///var/www/uploads/9861294948.xlsx",
                  "creationTime": "2017-10-30 14:31:27",
                  "group": 0
                },
                {
                  "sheetzIdx": 97,
                  "userIdx": 63,
                  "name": "SummaryImpressions",
                  "url": "file:///var/www/uploads/401244079.xlsx",
                  "creationTime": "2017-10-30 17:05:50",
                  "group": 0
                },
                {
                  "sheetzIdx": 98,
                  "userIdx": 63,
                  "name": "SummaryImpressions",
                  "url": "file:///var/www/uploads/5108451480.xlsx",
                  "creationTime": "2017-11-14 09:49:36",
                  "group": 0
                },
                {
                  "sheetzIdx": 99,
                  "userIdx": 63,
                  "name": "walmart_store_openings",
                  "url": "file:///var/www/uploads/6657397360.xlsx",
                  "creationTime": "2017-11-15 10:36:46",
                  "group": 0
                },
                {
                  "sheetzIdx": 100,
                  "userIdx": 63,
                  "name": "Conversion Logs 1117",
                  "url": "file:///var/www/uploads/8977875825.xlsx",
                  "creationTime": "2017-11-17 12:27:46",
                  "group": 0
                },
                {
                  "sheetzIdx": 101,
                  "userIdx": 63,
                  "name": "Conversion Logs 1117 :: SiteNames1",
                  "url": "view://100/55/6/1/inner",
                  "creationTime": "2017-11-21 12:23:27",
                  "group": 0
                },
                {
                  "sheetzIdx": 105,
                  "userIdx": 63,
                  "name": "airports",
                  "url": "file:///var/www/uploads/6198442485.xlsx",
                  "creationTime": "2017-11-28 16:15:24",
                  "group": 0
                },
                {
                  "sheetzIdx": 106,
                  "userIdx": 63,
                  "name": "OpenFlights-Airports",
                  "url": "file:///var/www/uploads/9375587780.xlsx",
                  "creationTime": "2017-11-28 16:35:02",
                  "group": 0
                },
                {
                  "sheetzIdx": 107,
                  "userIdx": 63,
                  "name": "Airline-Routes",
                  "url": "file:///var/www/uploads/2237605601.xlsx",
                  "creationTime": "2017-11-29 14:41:25",
                  "group": 0
                },
                {
                  "sheetzIdx": 109,
                  "userIdx": 63,
                  "name": "Airline-Routes50K",
                  "url": "file:///var/www/uploads/983336144.xlsx",
                  "creationTime": "2017-11-29 16:03:48",
                  "group": 0
                },
                {
                  "sheetzIdx": 110,
                  "userIdx": 63,
                  "name": "Wine-Reds-Quality",
                  "url": "file:///var/www/uploads/8109217197.xlsx",
                  "creationTime": "2017-12-19 12:51:52",
                  "group": 0
                },
                {
                  "sheetzIdx": 111,
                  "userIdx": 63,
                  "name": "Wine-Whites-Quality",
                  "url": "file:///var/www/uploads/4402368911.xlsx",
                  "creationTime": "2017-12-19 12:52:03",
                  "group": 0
                },
                {
                  "sheetzIdx": 112,
                  "userIdx": 71,
                  "name": "MILPITAS Sites, Workers locations",
                  "url": "file:///var/www/uploads/1955910818.xlsx",
                  "creationTime": "2018-01-10 22:28:37",
                  "group": 0
                },
                {
                  "sheetzIdx": 113,
                  "userIdx": 71,
                  "name": "MILPITAS Sites Workers locations _revised",
                  "url": "file:///var/www/uploads/7264728536.xlsx",
                  "creationTime": "2018-01-10 22:34:24",
                  "group": 0
                },
                {
                  "sheetzIdx": 114,
                  "userIdx": 71,
                  "name": "MILPITAS Sites Workers locations _revised",
                  "url": "file:///var/www/uploads/5873462576.xlsx",
                  "creationTime": "2018-01-10 22:37:12",
                  "group": 0
                },
                {
                  "sheetzIdx": 115,
                  "userIdx": 71,
                  "name": "Los Altos Amenities",
                  "url": "file:///var/www/uploads/6617089901.xlsx",
                  "creationTime": "2018-01-18 09:31:26",
                  "group": 0
                },
                {
                  "sheetzIdx": 116,
                  "userIdx": 63,
                  "name": "YellowCab10k",
                  "url": "file:///var/www/uploads/8788603562.xlsx",
                  "creationTime": "2018-01-22 11:15:21",
                  "group": 0
                },
                {
                  "sheetzIdx": 126,
                  "userIdx": 68,
                  "name": "Streetlightdata_2554654684420271508",
                  "url": "file:///var/www/uploads/4551795446.xlsx",
                  "creationTime": "2018-02-14 10:51:53",
                  "group": 0
                },
                {
                  "sheetzIdx": 127,
                  "userIdx": 63,
                  "name": "sample-feed-1",
                  "url": "file:///var/www/uploads/7042573844.zip",
                  "creationTime": "2018-04-03 11:51:45",
                  "group": 1
                },
                {
                  "sheetzIdx": 161,
                  "userIdx": 63,
                  "name": "grta-gtfs",
                  "url": "file:///var/www/uploads/9749596216.zip",
                  "creationTime": "2018-04-05 11:20:38",
                  "group": 1
                },
                {
                  "sheetzIdx": 178,
                  "userIdx": 63,
                  "name": "agency :: routes",
                  "url": "view://170/173/1/2/inner",
                  "creationTime": "2018-04-11 09:54:24",
                  "group": 0
                },
                {
                  "sheetzIdx": 192,
                  "userIdx": 68,
                  "name": "Closed_Circuit_TV_Street_Cameras",
                  "url": "file:///var/www/uploads/7552637616.csv",
                  "creationTime": "2018-06-08 17:04:05",
                  "group": 0
                },
                {
                  "sheetzIdx": 193,
                  "userIdx": 63,
                  "name": "Array_of_Things_Locations",
                  "url": "file:///var/www/uploads/2206515539.csv",
                  "creationTime": "2018-06-19 09:59:06",
                  "group": 0
                },
                {
                  "sheetzIdx": 194,
                  "userIdx": 63,
                  "name": "Travel_Sensors",
                  "url": "file:///var/www/uploads/4677388076.csv",
                  "creationTime": "2018-06-19 23:25:13",
                  "group": 0
                },
                {
                  "sheetzIdx": 195,
                  "userIdx": null,
                  "name": "march18_myspeed",
                  "url": "file:///var/www/uploads/6513043087.csv",
                  "creationTime": "2018-07-11 22:20:15",
                  "group": 0
                },
                {
                  "sheetzIdx": 196,
                  "userIdx": 73,
                  "name": "hmis-uk-Operation-major-General-and-spinal-anaesthesia-October-2015",
                  "url": "file:///var/www/uploads/4587870761.csv",
                  "creationTime": "2018-07-11 22:20:56",
                  "group": 0
                },
                {
                  "sheetzIdx": 197,
                  "userIdx": 73,
                  "name": "Road Accidents",
                  "url": "file:///var/www/uploads/2262592329.csv",
                  "creationTime": "2018-07-12 10:04:52",
                  "group": 0
                },
                {
                  "sheetzIdx": 198,
                  "userIdx": 73,
                  "name": "Vehicle Data",
                  "url": "file:///var/www/uploads/3921842277.csv",
                  "creationTime": "2018-07-12 10:09:00",
                  "group": 0
                },
                {
                  "sheetzIdx": 200,
                  "userIdx": 73,
                  "name": "datafile",
                  "url": "file:///var/www/uploads/5225900523.xls",
                  "creationTime": "2018-08-01 10:52:01",
                  "group": 0
                },
                {
                  "sheetzIdx": 201,
                  "userIdx": 73,
                  "name": "Frontier (1)",
                  "url": "file:///var/www/uploads/3973575006.xlsx",
                  "creationTime": "2018-08-01 10:54:05",
                  "group": 0
                },
                {
                  "sheetzIdx": 203,
                  "userIdx": 71,
                  "name": "Mountain View Amenities",
                  "url": "file:///var/www/uploads/2253090171.xlsx",
                  "creationTime": "2018-09-24 12:12:26",
                  "group": 0
                },
                {
                  "sheetzIdx": 207,
                  "userIdx": 63,
                  "name": "Conversion Logs 1210",
                  "url": "file:///var/www/uploads/6401923694.xlsx",
                  "creationTime": "2018-12-10 12:03:42",
                  "group": 0
                },
                {
                  "sheetzIdx": 209,
                  "userIdx": 63,
                  "name": "Sewer_Easements",
                  "url": "file:///var/www/uploads/9241515123.csv",
                  "creationTime": "2018-12-30 18:49:02",
                  "group": 0
                },
                {
                  "sheetzIdx": 210,
                  "userIdx": 63,
                  "name": "SewerEasementsLA",
                  "url": "file:///var/www/uploads/162055632.xlsx",
                  "creationTime": "2019-01-03 13:59:32",
                  "group": 0
                },
                {
                  "sheetzIdx": 211,
                  "userIdx": 75,
                  "name": "Campaign Conversion Logs",
                  "url": "file:///var/www/uploads/6495371148.xlsx",
                  "creationTime": "2019-01-08 12:46:13",
                  "group": 0
                },
                {
                  "sheetzIdx": 212,
                  "userIdx": 76,
                  "name": "Campaign Conversion Logs",
                  "url": "file:///var/www/uploads/455589611.xlsx",
                  "creationTime": "2019-01-08 13:55:48",
                  "group": 0
                },
                {
                  "sheetzIdx": 213,
                  "userIdx": 77,
                  "name": "Gastronomy",
                  "url": "file:///var/www/uploads/3177695730.csv",
                  "creationTime": "2019-02-23 07:11:23",
                  "group": 0
                },
                {
                  "sheetzIdx": 214,
                  "userIdx": 77,
                  "name": "Recreation",
                  "url": "file:///var/www/uploads/2024040613.csv",
                  "creationTime": "2019-02-23 07:13:11",
                  "group": 0
                },
                {
                  "sheetzIdx": 215,
                  "userIdx": 77,
                  "name": "Accommodation",
                  "url": "file:///var/www/uploads/6407743245.csv",
                  "creationTime": "2019-02-23 08:26:59",
                  "group": 0
                },
                {
                  "sheetzIdx": 216,
                  "userIdx": 77,
                  "name": "Cultural",
                  "url": "file:///var/www/uploads/4615470021.csv",
                  "creationTime": "2019-02-23 08:27:09",
                  "group": 0
                },
                {
                  "sheetzIdx": 217,
                  "userIdx": 77,
                  "name": "Religious_Establishments",
                  "url": "file:///var/www/uploads/9299852289.csv",
                  "creationTime": "2019-02-23 08:27:19",
                  "group": 0
                },
                {
                  "sheetzIdx": 218,
                  "userIdx": 77,
                  "name": "Auto_Stands",
                  "url": "file:///var/www/uploads/5568457921.csv",
                  "creationTime": "2019-02-23 10:37:47",
                  "group": 0
                },
                {
                  "sheetzIdx": 219,
                  "userIdx": 77,
                  "name": "PBS Stops Excel",
                  "url": "file:///var/www/uploads/3050841283.csv",
                  "creationTime": "2019-02-23 10:38:11",
                  "group": 0
                },
                {
                  "sheetzIdx": 223,
                  "userIdx": 77,
                  "name": "KMRL-MetroGTFS",
                  "url": "file:///var/www/uploads/6054662046.zip",
                  "creationTime": "2019-02-23 11:05:10",
                  "group": 1
                },
                {
                  "sheetzIdx": 234,
                  "userIdx": 77,
                  "name": "Kochi-FerryGTFS",
                  "url": "file:///var/www/uploads/7054738025.zip",
                  "creationTime": "2019-02-23 11:32:02",
                  "group": 1
                },
                {
                  "sheetzIdx": 272,
                  "userIdx": 78,
                  "name": "Garbage-Douala4",
                  "url": "file:///var/www/uploads/9761635866.csv",
                  "creationTime": "2019-07-03 12:14:09",
                  "group": 0
                },
                {
                  "sheetzIdx": 273,
                  "userIdx": 78,
                  "name": "Garbage-Douala3LL",
                  "url": "file:///var/www/uploads/1733739031.csv",
                  "creationTime": "2019-07-03 15:41:24",
                  "group": 0
                },
                {
                  "sheetzIdx": 274,
                  "userIdx": 78,
                  "name": "Douala Garbage Event Log",
                  "url": "auto://",
                  "creationTime": "2019-07-11 17:59:41",
                  "group": 0
                },
                {
                  "sheetzIdx": 276,
                  "userIdx": 63,
                  "name": "happiness_2017",
                  "url": "file:///var/www/uploads/1463068882.csv",
                  "creationTime": "2019-09-10 12:42:15",
                  "group": 0
                },
                {
                  "sheetzIdx": 277,
                  "userIdx": 63,
                  "name": "KLA-OrboTech",
                  "url": "file:///var/www/uploads/9265128090.csv",
                  "creationTime": "2019-09-26 13:31:38",
                  "group": 0
                },
                {
                  "sheetzIdx": 278,
                  "userIdx": 63,
                  "name": "KLA-OrboTech",
                  "url": "file:///var/www/uploads/8132167006.csv",
                  "creationTime": "2019-09-26 13:49:56",
                  "group": 0
                },
                {
                  "sheetzIdx": 279,
                  "userIdx": 63,
                  "name": "KLA-OrboTech",
                  "url": "file:///var/www/uploads/6923030847.xlsx",
                  "creationTime": "2019-09-26 14:24:31",
                  "group": 0
                },
                {
                  "sheetzIdx": 280,
                  "userIdx": 71,
                  "name": "KLA-OrboTech",
                  "url": "file:///var/www/uploads/2099848580.xlsx",
                  "creationTime": "2019-09-29 22:27:39",
                  "group": 0
                },
                {
                  "sheetzIdx": 281,
                  "userIdx": 71,
                  "name": "KLA-OrboTech",
                  "url": "file:///var/www/uploads/2716297814.xlsx",
                  "creationTime": "2019-09-29 22:46:57",
                  "group": 0
                },
                {
                  "sheetzIdx": 282,
                  "userIdx": 79,
                  "name": "Mekelle_Health-Medical",
                  "url": "file:///var/www/uploads/1722906804.csv",
                  "creationTime": "2019-10-03 15:01:37",
                  "group": 0
                },
                {
                  "sheetzIdx": 283,
                  "userIdx": 79,
                  "name": "Mekelle_Government",
                  "url": "file:///var/www/uploads/4138668598.csv",
                  "creationTime": "2019-10-03 15:01:47",
                  "group": 0
                },
                {
                  "sheetzIdx": 284,
                  "userIdx": 79,
                  "name": "Mekelle_Public-Safety",
                  "url": "file:///var/www/uploads/5244652200.csv",
                  "creationTime": "2019-10-03 15:23:31",
                  "group": 0
                },
                {
                  "sheetzIdx": 285,
                  "userIdx": 79,
                  "name": "Mekelle_RoadNetwork",
                  "url": "file:///var/www/uploads/179327405.csv",
                  "creationTime": "2019-10-03 16:00:29",
                  "group": 0
                },
                {
                  "sheetzIdx": 286,
                  "userIdx": 79,
                  "name": "Mekelle_Religious",
                  "url": "file:///var/www/uploads/1240050974.csv",
                  "creationTime": "2019-10-03 16:00:38",
                  "group": 0
                },
                {
                  "sheetzIdx": 287,
                  "userIdx": 80,
                  "name": "Pemba-Communication",
                  "url": "file:///var/www/uploads/6144194961.csv",
                  "creationTime": "2019-10-10 13:42:07",
                  "group": 0
                },
                {
                  "sheetzIdx": 288,
                  "userIdx": 80,
                  "name": "Pemba-Emergency",
                  "url": "file:///var/www/uploads/3597870930.csv",
                  "creationTime": "2019-10-10 13:42:47",
                  "group": 0
                },
                {
                  "sheetzIdx": 289,
                  "userIdx": 80,
                  "name": "Pemba-Energy",
                  "url": "file:///var/www/uploads/8123762933.csv",
                  "creationTime": "2019-10-10 13:43:01",
                  "group": 0
                },
                {
                  "sheetzIdx": 290,
                  "userIdx": 80,
                  "name": "Pemba-Open_Space",
                  "url": "file:///var/www/uploads/1685316637.csv",
                  "creationTime": "2019-10-10 13:43:37",
                  "group": 0
                },
                {
                  "sheetzIdx": 291,
                  "userIdx": 80,
                  "name": "Pemba-Religious",
                  "url": "file:///var/www/uploads/5835171602.csv",
                  "creationTime": "2019-10-10 13:43:57",
                  "group": 0
                },
                {
                  "sheetzIdx": 292,
                  "userIdx": 80,
                  "name": "Pemba-Solid_Waste",
                  "url": "file:///var/www/uploads/9292090074.csv",
                  "creationTime": "2019-10-10 13:44:13",
                  "group": 0
                },
                {
                  "sheetzIdx": 293,
                  "userIdx": 80,
                  "name": "Pemba-Water_Sanitation",
                  "url": "file:///var/www/uploads/2927786819.csv",
                  "creationTime": "2019-10-10 13:44:46",
                  "group": 0
                },
                {
                  "sheetzIdx": 294,
                  "userIdx": 81,
                  "name": "PortHarcourt-Public_Safety",
                  "url": "file:///var/www/uploads/1475403467.csv",
                  "creationTime": "2019-10-10 14:49:31",
                  "group": 0
                },
                {
                  "sheetzIdx": 295,
                  "userIdx": 81,
                  "name": "PortHarcourt-Health",
                  "url": "file:///var/www/uploads/1485904688.csv",
                  "creationTime": "2019-10-10 14:51:19",
                  "group": 0
                },
                {
                  "sheetzIdx": 296,
                  "userIdx": 81,
                  "name": "PortHarcourt-Government",
                  "url": "file:///var/www/uploads/7587316157.csv",
                  "creationTime": "2019-10-10 15:00:02",
                  "group": 0
                },
                {
                  "sheetzIdx": 297,
                  "userIdx": 82,
                  "name": "Kamsar_Religious",
                  "url": "file:///var/www/uploads/8095568814.csv",
                  "creationTime": "2019-10-11 14:46:37",
                  "group": 0
                },
                {
                  "sheetzIdx": 298,
                  "userIdx": 82,
                  "name": "Kamsar_Economy",
                  "url": "file:///var/www/uploads/3622668106.csv",
                  "creationTime": "2019-10-11 14:47:38",
                  "group": 0
                },
                {
                  "sheetzIdx": 299,
                  "userIdx": 82,
                  "name": "Kamsar_Communication",
                  "url": "file:///var/www/uploads/8129892656.csv",
                  "creationTime": "2019-10-11 14:48:21",
                  "group": 0
                },
                {
                  "sheetzIdx": 300,
                  "userIdx": 82,
                  "name": "Kamsar_Energy",
                  "url": "file:///var/www/uploads/6770638627.csv",
                  "creationTime": "2019-10-11 14:49:03",
                  "group": 0
                },
                {
                  "sheetzIdx": 301,
                  "userIdx": 82,
                  "name": "Kamsar_Shelter",
                  "url": "file:///var/www/uploads/7475842479.csv",
                  "creationTime": "2019-10-11 14:49:57",
                  "group": 0
                },
                {
                  "sheetzIdx": 302,
                  "userIdx": 71,
                  "name": "Ted Eyre Lease Comps",
                  "url": "file:///var/www/uploads/5352099412.xlsx",
                  "creationTime": "2019-10-14 12:06:47",
                  "group": 0
                },
                {
                  "sheetzIdx": 303,
                  "userIdx": 71,
                  "name": "Ted Eyre Lease Comps",
                  "url": "file:///var/www/uploads/8256619004.xlsx",
                  "creationTime": "2019-10-14 12:07:14",
                  "group": 0
                },
                {
                  "sheetzIdx": 304,
                  "userIdx": 71,
                  "name": "Zip_code(Dublin Team)",
                  "url": "file:///var/www/uploads/3219094849.csv",
                  "creationTime": "2019-11-20 10:38:46",
                  "group": 0
                },
                {
                  "sheetzIdx": 305,
                  "userIdx": 78,
                  "name": "CityApp User Form Data",
                  "url": "auto://",
                  "creationTime": "2019-12-11 13:21:33",
                  "group": 0
                }
                
              ],
            subTableData:[],
            loading:0,

        };
        this.toggle = this.toggle.bind(this);
        this.toggle1 = this.toggle1.bind(this);
       
    }

    componentWillMount(){
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(json => this.setState({ tableData: json }))
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    toggle1(tab) {
        if (this.state.activeTab1 !== tab) {
            this.setState({
                activeTab1: tab
            });
        }
    }

    render() {
            const columns = [{
                Header: 'userIdx',
                accessor: 'userIdx',
                show: false
            },
            {
                Header: 'sheetzIdx',
                accessor: 'sheetzIdx',
                maxWidth: 160,
                show: false
            },
            {
                Header: 'Name',
                accessor: 'name'
            },
            {
                Header: "Created Date",
                accessor: "creationTime",
                style: {
                    textAlign: 'left'
                },
                Cell: props => <div> {dateFormat(props.value, "longDate")} </div>,
                maxWidth: 250
            }
        ]

        return (
            <Fragment>

           <ReactCSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <div>
                        <PageTitle
                            heading="Data List"
                            subheading="Upload data, connect, analyze, model, and share"
                            icon="pe-7s-server icon-gradient bg-mean-fruit"
                        />

                        <ReactTable
                            className="-striped -highlight"
                            data={this.state.tableData}
                            columns={columns}
                            minRows= {3}
                            filterable = {true}
                            defaultPageSize={10}
                            defaultSorted={[
                                {
                                  id: "creationTime",
                                  desc: true
                                }
                            ]}

                            SubComponent = {row => {
                                return (
                                  <div style={{ padding: "20px" }}>
                                    <DataSources rowId = {row.original.userIdx}
                                    sheetId = {row.original.sheetzIdx} />
                                  </div>
                                );
                              }}
                        />
                    </div>
                </ReactCSSTransitionGroup>
            </Fragment>
        )
    }
}
