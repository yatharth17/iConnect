import React from "react";
import "./SideBar.css";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import RateReviewIcon from "@material-ui/icons/RateReview";
import SideBarChat from "./SideBarChat";
function SideBar() {
	return (
		<div className='sidebar'>
			<div className='sidebar__header'>
				<Avatar className="sidebar__avatar"/>
				<div className='sidebar__input'>
					<SearchIcon />
					<input placeholder='Search' />
				</div>
				<IconButton variant='outline' className='sidebar__inputButton'>
					<RateReviewIcon />
				</IconButton>
			</div>

			<div className='sidebar__chats'>
				<SideBarChat/>
				<SideBarChat/>
				<SideBarChat/>
				<SideBarChat/>
				<SideBarChat/>
				<SideBarChat/>
				<SideBarChat/>
			</div>
		</div>
	);
}

export default SideBar;
