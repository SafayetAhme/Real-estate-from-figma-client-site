import AgentSection from "./AgentSection"
import AnySection from "./AnySection"
import CliFdBkSection from "./CliFdBkSection"
import FeedbackSection from "./FeedbackSection"
import GetQuickSection from "./GetQuickSection"
import Hero from "./Hero"
import NewList from "./NewList"
import PopularLocation from "./PopularLocation"
import Secure from "./Secure"
import TextForFeedbackman from "./TextForFeedbackman"
import UnlockSection from "./UnlockSection"
import Werhere from "./Werhere"


const Home = () => {
    return (
        <div className="">
            <Hero></Hero>
            <CliFdBkSection></CliFdBkSection>
            <UnlockSection></UnlockSection>
            <Secure></Secure>
            <PopularLocation></PopularLocation>
            <NewList></NewList>
            <AgentSection></AgentSection>
            <TextForFeedbackman></TextForFeedbackman>
            <FeedbackSection></FeedbackSection>
            <GetQuickSection></GetQuickSection>
            <Werhere></Werhere>
            <AnySection></AnySection>
        </div>
    )
}

export default Home