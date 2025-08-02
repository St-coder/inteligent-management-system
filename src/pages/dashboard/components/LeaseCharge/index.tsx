import { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react"

const option = {
  legend: {
        top: '0'
    },
    series: [
        {
            type: 'pie',
            radius: [30, 100],
            center: ['50%', '60%'],
            roseType: 'area',
            itemStyle: {
                borderRadius: 8
            },
            data: [
                { value: 40, name: '在营' },
                { value: 38, name: '已租' },
                { value: 32, name: '出租' },
                { value: 30, name: '续签' },
                { value: 28, name: '新签' },
                { value: 26, name: '待租' },
                { value: 22, name: '退租' },
            ]
        }
    ]
};
const LeaseCharge = () => {
    const [options, setOption] = useState(option);
    const [showLoading, setLoading] = useState(false);
    return (
        <ReactECharts option={options} showLoading={showLoading} />
    )
}

export default LeaseCharge;