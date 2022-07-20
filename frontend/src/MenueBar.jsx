import React from "react";
import { Avatar, Chip, AppBar } from '@mui/material'
import './stylesheet/appBar.css'

export const MenuBar = () => {

    return (
        <div id="MenuBar" >
            <AppBar id='app-bar'>
                <Chip id='user-chip' avatar={
                    <Avatar id='user-avatar' sx={{ width: 70, height: 70 }}>
                        {}
                    </Avatar>
                } label={`Hello user`} />
            </AppBar>
        </div>
    )
}
