import { Route, Routes } from 'react-router-dom';
import { Channels } from '../channel/Channels'
import { Settings } from '../settings/Settings';
<<<<<<< HEAD
import { ChannelView } from '../channel/ChannelView';
import { getChannels } from '../../services';
export const Content = ({ channels, getChannels }) => {
=======
export const Content = ({ channels }) => {
>>>>>>> 710bc78b8353c52816afd73803aa55a587e4a6a3
    return (
        <div className="content-container">
            <Routes>
                <Route path='channels' element={<Channels channels={channels}/>}/>
                <Route path='settings' element={<Settings/>}/>
<<<<<<< HEAD
                <Route path='channel/:id' element={<ChannelView getChannels={getChannels}/>}/>
=======
>>>>>>> 710bc78b8353c52816afd73803aa55a587e4a6a3
            </Routes>
        </div>
    )
}