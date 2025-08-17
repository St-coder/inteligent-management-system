import React, { use, useState,useCallback,useEffect } from "react"

// 出入查询参数， 获取数据的函数， 分页参数

type MyFormData = {
    [key: string]: any
}

interface DataFetcher<T> {
    (args: T & {page: number, pageSize: number}): Promise<any>
}


function useDataList<T extends MyFormData, H>(initialFormdata: T,  fetchData: DataFetcher<T>){
    const [formData,setFormData] = useState<T>(initialFormdata)
    const [dataList,setDataList] = useState<H[]>([])

    const [page,setPage] = useState<number>(1)
    const [pageSize,setPageSize] = useState<number>(10)

    const [total,setTotal] = useState<number>(0)
    const [loading,setLoading] = useState<boolean>(false)

    const loadData = useCallback(async () => {
        setLoading(true)
        try {
            const {data: {list,total}} = await fetchData({...formData, page, pageSize})
            setDataList(list)
            setTotal(total)
            setLoading(false)
        } catch (error) {
            console.log(error, 2222);
            
        } finally { 
            setLoading(false)
        }
    }, [formData, page, pageSize, fetchData])

    useEffect(() => {
        loadData()
    }, [loadData])


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData(prevstate=>{
            return {
                ...prevstate,
                [name]:value,
            }
        })
    }

    const onChangePage= (page: number, pageSize: number)=>{
        setPage(page);
        setPageSize(pageSize);

    }

    const reset = ()=>{
        setFormData(initialFormdata)
        onChangePage(1,10)
    }

    return {formData, handleChange, onChangePage, reset, dataList, total, loading, page, pageSize, loadData}

}

export default useDataList;