import { useNavigate } from "react-router-dom";
import { ChannelCard } from "./ChannelCard";

export const Channels = ({channels}) => {
    
    const navigate = useNavigate()

    const navigateToChannel = (id) => {
        navigate (`/channel/${id}`)
    }

    return (
        <div className="channels-container">

            {channels.map((c) => (
                <ChannelCard
                key = {c.id}
                key = {c.id}
                
                
                
                
                />
            ))}

        </div>
    )
}