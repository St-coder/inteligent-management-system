import { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react"
import { getCompanyData } from "@/api/dashboard";

const option = {
    title: {
        text: '企业资质情况(家)'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {},
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: [0, 0.01],
        data: []
    },
    yAxis: {
        type: 'value',
    },
    series: []
};
const Company = () => {
    const [options, setOption] = useState(option);
    const [showLoading, setLoading] = useState(false);
    useEffect(() => {
        const loadCompanyData = async () => {
            setLoading(true);
            const {data:conpanyData } = await getCompanyData();
            conpanyData.series.forEach((item: any) => {
                item.type = 'bar';
            })
            const updateOption = {
                ...options,
                series: conpanyData.series,
                xAxis: {
                    ...options.xAxis,
                    data: conpanyData.years
                }
            }
            setOption(updateOption);
            setLoading(false);
        }
        loadCompanyData()
    }, [])
    return (
        <ReactECharts option={options} showLoading={showLoading} />
    )
}

export default Company;