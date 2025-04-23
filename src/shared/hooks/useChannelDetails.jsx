import { useState } from "react";
import toast from "react-hot-toast";
<<<<<<< HEAD
import {  getChannelDetails as getChannelDetailsRequest } from "../../services";
 
export const useChannelDetails = () => {
   
    const  [ channelDetails, setChannelDetails ] = useState()
 
    const getChannelDetails = async (id) => {
        const responseData = await getChannelDetailsRequest(id)
 
        if (responseData.error) {
            return toast.error(
                responseData.e?.response?.data || 'Error al cargar la informacion del canal'
            )
        }
 
        setChannelDetails(responseData)
    }
 
    return{
        channelDetails,
        isFetching: !channelDetails,
=======
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
>>>>>>> 710bc78b8353c52816afd73803aa55a587e4a6a3
        getChannelDetails
    }
}