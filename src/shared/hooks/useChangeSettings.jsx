import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { getChannelSettings, updateChannelSettings } from "../../services";

export const useChannelSettings = () => {
<<<<<<< HEAD

    const [ channelSettings, setChannelSettings ] = useState();
=======
<<<<<<< HEAD

    const [ channelSettings, setChannelSettings ] = useState();
=======
    const [channelSettings, setChannelSettings] = useState(null);
>>>>>>> ced8c1673788d91d8a4dcc586718fcc825a845ce
>>>>>>> 710bc78b8353c52816afd73803aa55a587e4a6a3

    const fetchChannelSettings = async () => {
        const response = await getChannelSettings();

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 710bc78b8353c52816afd73803aa55a587e4a6a3
        if(response.error){
            return toast.error(
                response.e?.response?.data || 'Ocurrio un error al obtener la data del canal'
            )
<<<<<<< HEAD
=======
=======
        if (response.error) {
            return toast.error(
                response.e?.response?.data || 'Ocurrio un error al obtener la data del canal'
            );
>>>>>>> ced8c1673788d91d8a4dcc586718fcc825a845ce
>>>>>>> 710bc78b8353c52816afd73803aa55a587e4a6a3
        }

        setChannelSettings({
            username: response.data.username,
            title: response.data.title,
            description: response.data.description,
            avatarUrl: response.data.avatarUrl,
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 710bc78b8353c52816afd73803aa55a587e4a6a3
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
<<<<<<< HEAD
}
=======
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
>>>>>>> 710bc78b8353c52816afd73803aa55a587e4a6a3
