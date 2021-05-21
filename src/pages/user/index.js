import React, { Component } from "react"
import { connect } from "react-redux"
// import './About.less';
import UserList from "./UserList"
import { Button } from "antd"
import { queryData } from "@/actions"
class User extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	componentDidMount() {
		console.log("queryData", queryData)
	}
	handleClick = () => {
		console.log("props", this.props)
	}

	render() {
		return (
			<div className={"aboutWrapper"}>
				<UserList />
				<Button onClick={this.handleClick}>111111</Button>
			</div>
		)
	}
}
//将store中的值取出来
const mapStateToProps = (state) => {
	return {
		value: state.initValue
	}
}
const mapDispatchToProps = (dispatch) => {
	return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(User)
// export default User
