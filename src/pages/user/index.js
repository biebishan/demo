import React, { Component } from "react"
// import './About.less';
import UserList from './UserList'
class User extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		return (
			<div className={'aboutWrapper'}>
				<UserList/>
			</div>
		)
	}
}
export default User
