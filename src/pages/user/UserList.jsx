import React, { useState, useEffect } from "react"
import { Table, Pagination } from "antd"
import qrBcg from "@assets/erWeiCode.png"
import QRCode from "qrcode-react"
import './UserList.less'
export default function UserList() {
	const columns = [
		{
			title: "姓名",
			dataIndex: "name",
			key: "name"
		},
		{
			title: "年龄",
			dataIndex: "age",
			key: "age"
		},
		{
			title: "住址",
			dataIndex: "address",
			key: "address"
		}
	]
	const data = [
		{
			name:'kiki',
			age:18,
			address:'xuhui'
		},
		{
			name:'linlin',
			age:19,
			address:'linlin'
		},
		{
			name:'cocoyu',
			age:20,
			address:'linlin'
		}
	]
	return (
		<div className={"userListWrapper"}>
			<Table
				columns={columns}
				dataSource={data}
				pagination={false}
			/>
			<Pagination
				total={50}
				showSizeChanger
			/>	 
		</div>
	)
}
