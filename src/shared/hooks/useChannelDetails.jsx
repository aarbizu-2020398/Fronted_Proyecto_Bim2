import { useState } from "react";
import toast from "react-hot-toast";
import { getChannelDetails as getChannelDetailsRequest } from "../../services";

export const useChannelsDetails = () => {

    const [channelDetails, setChannelDetails ] = useState();

    const getChannelDetails = async () => {
       const response = await getChannelDetailsRequest(id)


       if (responseData.error) {
        return toast.error(
            responseData.e?.response?.data || 'Error al cargar la informacion del canal '
        )
       } 

       setChannelDetails(responseData)
    }

    return{
        channelDetails,
        isFetching : !channelDetails,
        getChannelDetails
    }
}