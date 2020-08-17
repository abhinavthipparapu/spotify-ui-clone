import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from "@material-ui/icons/Home"
import SearchIcon from "@material-ui/icons/Search"
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic"
import { useStateProviderValue } from '../StateProvider'


function Sidebar() {
    const [{playlists},dispatch] = useStateProviderValue()
    console.log(playlists)
    return (
        <div className="sidebar">
            <img  src="https://crowdsurf.net/llcoolj/wordpress/wp-content/uploads/2016/04/spotify.png" className="logo" alt=""/>
            <SidebarOption Icon = {HomeIcon} title= "Home" />
            <SidebarOption Icon = {SearchIcon} title= "Search" />
            <SidebarOption Icon = {LibraryMusicIcon} title= "Library" />
            <br/>
            <strong className="sidebar_title">PLAYLISTS</strong>
            <hr/>

            {
                playlists?.items?.map(playlist => (
                    <SidebarOption title={playlist.name} />
                ))
            }
        </div>
    )
}

export default Sidebar
