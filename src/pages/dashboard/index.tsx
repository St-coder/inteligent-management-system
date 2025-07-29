import { Row, Col, Card, Progress, Statistic, Timeline, Tag } from "antd"
import { RadarChartOutlined, SnippetsOutlined, DollarOutlined, LaptopOutlined } from "@ant-design/icons"
import "./index.scss"

function DashBoard() {
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
    </div>
}
export default DashBoard;