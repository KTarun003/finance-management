//import useState hook to create menu collapse state
import React, { useState } from "react";
import {Link} from "react-router-dom";

//import react pro sidebar components
import {
	ProSidebar,
	Menu,
	SubMenu,
	MenuItem,
	SidebarHeader,
	SidebarFooter,
	SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaThList, FaRegHeart, FaListUl, FaList, FaListAlt } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { BiCog, BiBookAdd } from "react-icons/bi";
import { MdAnalytics, MdPersonAdd, MdAccountBalance, MdEdit } from "react-icons/md";
import { AiOutlineFileAdd } from "react-icons/ai";


//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";


const Header = () => {
	return (
		<>
			<div id="header">
				<ProSidebar>
					<SidebarHeader>
						<div className="logotext">
							<p>Finance Management</p>
						</div>
					</SidebarHeader>
					<SidebarContent>
						<Menu iconShape="square">
							<MenuItem icon={<MdAnalytics />}> Dashboard <Link to="/" /> </MenuItem>
							<SubMenu title="New Records" icon={<MdAccountBalance />}>
								<MenuItem icon={<MdPersonAdd />}> Monthly <Link to="/monthly" /></MenuItem>
								<MenuItem icon={<MdPersonAdd />}> Weekly Interest <Link to="/weekly" /></MenuItem>
							</SubMenu>
							<SubMenu title="New Recovery" icon={<BiBookAdd />}>
								<MenuItem icon={<AiOutlineFileAdd />}> Principle <Link to="/principle" /></MenuItem>
								<MenuItem icon={<AiOutlineFileAdd />}> Interest <Link to="/interest" /></MenuItem>
								<MenuItem icon={<AiOutlineFileAdd />}> Complete <Link to="/complete" /></MenuItem>
							</SubMenu>
							<SubMenu title="Lists" icon={<FaThList />}>
								<MenuItem icon={<FaList />}> All Loans <Link to="/loans" /></MenuItem>
								<MenuItem icon={<FaListUl />}> Recoveries <Link to="/recoveries" /></MenuItem>
								<MenuItem icon={<FaListAlt />}> Pending Loans <Link to="/pending" /></MenuItem>
							</SubMenu>
							<SubMenu title="Admin Features" icon={<RiAdminFill />}>
								<MenuItem icon={<FaList />}> Edit <Link to="/edit" /></MenuItem>
							</SubMenu>
						</Menu>
					</SidebarContent>
					<SidebarFooter>
						<Menu iconShape="square">
							<MenuItem icon={<BiCog />}>Settings <Link to="/settings" /></MenuItem>
						</Menu>
					</SidebarFooter>
				</ProSidebar>
			</div>
		</>
	);
};

export default Header;