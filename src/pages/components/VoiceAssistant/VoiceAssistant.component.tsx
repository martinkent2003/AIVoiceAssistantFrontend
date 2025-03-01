import VoiceRecorder from "../VoiceRecorder/VoiceRecorder.component"
import VoiceAssistantAvatar from "./VoiceAssistantAvatar/VoiceAssistantAvatar.component"
import styles from "@/styles/VoiceAssistant.module.css";
import useVoiceAssistant from "./useVoiceAssistant.hook";
import ReactLoading from "react-loading";
import AudioPlayer from "../AudioPlayer/AudioPlayer.component";

const VoiceAssistant = ()=>{
    const {handleUserVoiceRecorded, isWaitingAIOutput, lastAIReplyURL, handleOnAudioPlayEnd} = useVoiceAssistant()
    return (
        <div className={styles["voice-assistant-component"]}>
            <VoiceAssistantAvatar/>
            <VoiceRecorder onAudioRecordingComplete={handleUserVoiceRecorded}/>
            {isWaitingAIOutput &&  
                (<ReactLoading type={"bars"} color={"#4287f5"} width={200} />)
            }

            <AudioPlayer audioFileUrl={lastAIReplyURL} onAudioPlayEnd={handleOnAudioPlayEnd}/>
        </div>
    )
}

export default VoiceAssistant