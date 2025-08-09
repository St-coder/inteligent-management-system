import{ Card, Col, Row,Image, Flex, Radio } from 'antd'
import { useState, useEffect } from 'react'
import "./index.scss"
import { getRoomList } from '@/api/room';
interface RoomItemProps {
    roomNumber: number;
    decorationType: '毛坯'|'精装',
    area: number,
    unitPrice: number,
    src: string;
}
interface RoomProps {
    label: string;
    value: string;
}


    const list: RoomProps[] = [
        { label: 'A1幢写字楼', value: 'a1' },
        { label: 'A2幢写字楼', value: 'a2' },
        { label: 'B1幢写字楼', value: 'b1' },
        { label: 'B2幢写字楼', value: 'b2' },
        { label: 'C1幢写字楼', value: 'c1' },
        { label: 'C2幢写字楼', value: 'c2' },
    ]
function Room() {
    const [visible, setVisible] = useState<boolean>(false);
    const [roomList, setRoomList] = useState<RoomItemProps[]>([])
    const [roomId, setRoomId] = useState<string>('a1')
    const changeRoomeId = (id: string) => {
        setRoomId(id)
        loadData(id)
    }

    const [previewSrc, setPreviewSrc] = useState<string>('')
    const setPreviewImageSrc = (src: string) => {
        if(!src) return
        setPreviewSrc(src)
        setVisible(true)
    }
    const loadData = async(id:string) => {
        const {data: {rooms} }  =await getRoomList(id)
        setRoomList(rooms)
    }
    useEffect(()=>{
        loadData(roomId)
    },[])
    return (
        <div className='room'>

            <Image
                width={200}
                style={{ display: 'none' }}
                preview={{
                    visible,
                    src: previewSrc ,
                    onVisibleChange: (value) => {
                        setVisible(value);
                    },
                }}
            />

            <Card className='mb'>
                <Flex vertical gap="middle">
                    <Radio.Group defaultValue={roomId} buttonStyle="solid" onChange={ (e)=>changeRoomeId(e.target.value) }>
                        {list.map((item: RoomProps) => {
                            return <Radio.Button key={item.value} value={item.value}>{item.label}</Radio.Button>
                        })}
                    </Radio.Group>


                </Flex>
            </Card>

            <Row gutter={16} >
                {
                    roomList.map((item: RoomItemProps, index: number) => (
                            <Col span={6} key={item.roomNumber || index} className='item'>
                                <Card title="房间号" extra={<a href='#' onClick={() => setPreviewImageSrc(item.src)}>户型图</a>}>
                                    <h1>{item.roomNumber}</h1>
                                    <div className="clearfix mt">
                                        <p className="fl">装修情况：</p>
                                        <p className="fr">{item.decorationType}</p>
                                    </div>
                                    <div className="clearfix mt">
                                        <p className="fl">房间面积</p>
                                        <p className="fr">{item.area}</p>
                                    </div>
                                    <div className="clearfix mt">
                                        <p className="fl">出租单价</p>
                                        <p className="fr">{item.unitPrice}</p>
                                    </div>
                                </Card>
                            </Col>
                        )
                    )
                }
            </Row>

        </div>
    )
}

export default Room