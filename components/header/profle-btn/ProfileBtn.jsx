import { TouchableOpacity, Image, View } from 'react-native'
import { images } from '../../../constant'

import style from './profileBtn.style'
import { useRouter } from 'expo-router'

const ProfileBtn = () => {

    const router = useRouter()

    return (
        <TouchableOpacity style={style.btnContainer} onPress={() => router.push('/my-profile')}>
            <Image source={images.profile} resizeMode="cover" style={style.btnImage} />
        </TouchableOpacity>
    )

}

export default ProfileBtn