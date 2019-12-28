import CampaignSelection from '../../Views/CampaignSelection/CampaignSelection'
import CampaignHome from '../../Views/CampaignHome/CampaignHome'
import Npcs from '../../Views/NPC/Npcs'
const routes = [
    {
        path: "/",
        name: "Campaign Selection",
        component: CampaignSelection,
    },
    {
        path: "/campaign",
        name: "Home Page",
        component: CampaignHome,
    },
    {
        path: "/campaign/npcs",
        name: "NPCs",
        component: Npcs,
    },
]

export default routes;