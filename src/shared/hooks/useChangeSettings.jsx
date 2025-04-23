import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { getChannelSettings, updateChannelSettings } from "../../services";

export const useChannelSettings = () => {
<<<<<<< HEAD

    const [ channelSettings, setChannelSettings ] = useState();
=======
    const [channelSettings, setChannelSettings] = useState(null);
>>>>>>> ced8c1673788d91d8a4dcc586718fcc825a845ce

    const fetchChannelSettings = async () => {
        const response = await getChannelSettings();

<<<<<<< HEAD
        if(response.error){
            return toast.error(
                response.e?.response?.data || 'Ocurrio un error al obtener la data del canal'
            )
=======
        if (response.error) {
            return toast.error(
                response.e?.response?.data || 'Ocurrio un error al obtener la data del canal'
            );
>>>>>>> ced8c1673788d91d8a4dcc586718fcc825a845ce
        }

        setChannelSettings({
            username: response.data.username,
            title: response.data.title,
            description: response.data.description,
            avatarUrl: response.data.avatarUrl,
<<<<<<< HEAD
            streamKey: response.data.streamKey
        })
    }

    const saveSettings = async (data) => {
        const response = await updateChannelSettings(data)

        if(response.error){
            return toast.error(
                response.e?.response?.data || 'Ocurrio un error al actualizar la información del canal'
            )
        }

        toast.success('Información actualizada correctamente')
    }

    useEffect(() => {
        fetchChannelSettings()
    },[])

    return ({
        isFetching: !channelSettings,
        channelSettings,
        saveSettings
    })
}
=======
            streamKey: response.data.streamKey,
        });
    };

    const saveSettings = async (data) => {
        const response = await updateChannelSettings(data);
        if (response.error) {
            return toast.error(
                response.e?.response?.data || 'Ocurrio un error al actualizar la informacion del canal'
            );
        }
        toast.success('Información actualizada correctamente');
    };

    useEffect(() => {
        fetchChannelSettings();
    }, []);

    return {
        isFetching: !channelSettings,
        channelSettings,
        saveSettings,
    };
};
>>>>>>> ced8c1673788d91d8a4dcc586718fcc825a845ce
