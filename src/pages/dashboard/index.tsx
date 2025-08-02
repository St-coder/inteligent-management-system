import { Row, Col, Card, Progress, Statistic, Timeline, Tag } from "antd"
import { RadarChartOutlined, SnippetsOutlined, DollarOutlined, LaptopOutlined } from "@ant-design/icons"
import ReactECharts from "echarts-for-react"
import { getEnergyData } from "@/api/dashboard"
import Company from "./components/Company"
// import ChargeTime from "./components/ChargeTime"
import LeaseCharge from "./components/LeaseCharge"
import "./index.scss"
import { useEffect, useState } from 'react';

function DashBoard() {
    const initalOption = {
        title: {
            text: '当日能源消耗'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: []
        },
        grid: {
            left: '%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['0：00', '4：00', '8：00', '12：00', '16：00', '20：00', '24：00']
        },
        yAxis: {
            type: 'value'
        },
        series: []
    };

    const [data, setData] = useState(initalOption);
    const [showLoading, setLoading] = useState(false);
    const [cardList, setCardList] = useState([
        {color:'green', title:'进场', time: '08:24', car: '京A66666'},
        {color:'red', title:'出场', time: '08:24', car: '京A66666'},
        {color:'green', title:'进场', time: '08:24', car: '京A66666'},
        {color:'red', title:'出场', time: '08:24', car: '京A66666'},
    ]);

    useEffect(() => {

        const loadData = async () => {
            setLoading(true);
            const { data: apiData } = await getEnergyData();
            const dataList = apiData.map((item: any) => ({
                name: item.name,
                data: item.data,
                type: "line",
                stack: "Total"
            }));
            const updataOption = {
                ...data,
                legend: {
                    data: dataList.map((item: any) => item.name),
                },
                series: dataList
            }
            setData(updataOption)
            setLoading(false);

        }
        loadData()
    }, []);

    return <div className="dashboard">
        <Row gutter={16}>
            <Col span={6}>
                <Card>
                    <div className="Card-wrap">
                        <div className="fl area">
                            <h2>13479</h2>
                            <p>园区总面积(平方米)</p>
                        </div>
                        <div className="fr">
                            <RadarChartOutlined className="icon" />
                        </div>
                    </div>
                </Card>
            </Col>
            <Col span={6}>
                <Card>
                    <div className="Card-wrap">
                        <div className="fl area">
                            <h2>8635</h2>
                            <p>总租赁面积(平方米)</p>
                        </div>
                        <div className="fr">
                            <SnippetsOutlined className="icon" style={{ color: "#81c452" }} />
                        </div>
                    </div>
                </Card>
            </Col>
            <Col span={6}>
                <Card>
                    <div className="Card-wrap">

                        <div className="fl area">
                            <h2>38764</h2>
                            <p>园区总产值(万元)</p>
                        </div>
                        <div className="fr">
                            <DollarOutlined className="icon" style={{ color: "#62c9cb" }} />
                        </div>
                    </div>
                </Card>
            </Col>
            <Col span={6}>
                <Card>
                    <div className="Card-wrap">

                        <div className="fl area">
                            <h2>2874</h2>
                            <p>入驻企业总数(家)</p>
                        </div>
                        <div className="fr">
                            <LaptopOutlined className="icon" style={{ color: "#e49362" }} />
                        </div>
                    </div>
                </Card>
            </Col>
        </Row>

        <Row gutter={16} className="charts-wrapper">
            <Col span={12}>
                <Card title="能源消耗情况">
                    <ReactECharts option={data} showLoading={showLoading} />
                </Card>
            </Col>
            <Col span={12}>
                <Card title="企业资质情况">
                    <Company />
                </Card>
            </Col>
        </Row>

        <Row gutter={16} className="charts-wrapper">
            <Col span={12}>
                <Card title="租赁情况">
                    <LeaseCharge />
                </Card>
            </Col>
            <Col span={6}>
                <Card title="充电空闲统计">
                    <div className="wrap">
                        <Progress type="circle" percent={75} />
                        <Statistic title="总充电桩数" value={75} suffix="/ 100" className="mt"/>
                    </div>
                </Card>
            </Col>
            <Col span={6}>
                <Card title="实时车辆信息">
                    <div className="timeline-wrap">
                        {/* <Timeline  items={[
                                {
                                    children: <><Tag color="green">进场</Tag>08:24车辆 京A66666</>
                                },
                            ]}/> */}

                            <Timeline>
                                { cardList.map((it, index)=>(
                                    <Timeline.Item  key={index} color={it.color}>
                                        {it.title}
                                        {it.time}
                                        {it.car}
                                    </Timeline.Item>
                                ))}
                            </Timeline>
                    </div>
                </Card>
            </Col>

        </Row>

    </div>
}
export default DashBoard;