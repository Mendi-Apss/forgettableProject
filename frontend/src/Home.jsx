import { Avatar, Chip, AppBar, Container } from '@mui/material'
import { useCookies } from "react-cookie";
import './stylesheet/appBar.css'


export const Home = () => {

    const [cookie, setCookie] = useCookies()

    const MenuBar = () => {

    }

    return (
        <AppBar id='app-bar'>
            <Chip id='user-chip' avatar={
                <Avatar id='user-avatar' sx={{ width: 70, height: 70 }}>
                    {localStorage.getItem('user-name').charAt(0).toUpperCase()}
                </Avatar>
            } label={`Hello ${localStorage.getItem('user-name')}`} />
        </AppBar>
    )
}