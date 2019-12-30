import CampaignSelection from '../../Views/CampaignSelection/CampaignSelection'
import CampaignHome from '../../Views/CampaignHome/CampaignHome'
import Npcs from '../../Views/NPC/Npcs'
import HomeIcon from '@material-ui/icons/Home';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import PeopleIcon from '@material-ui/icons/People';


const routes = [
    {
        path: "/",
        name: "Campaign Selection",
        component: CampaignSelection,
        icon: HomeIcon
    },
    {
        path: "/campaign",
        name: "Home Page",
        component: CampaignHome,
        icon: MenuBookIcon
    },
    {
        path: "/campaign/npcs",
        name: "NPCs",
        component: Npcs,
        icon: PeopleIcon
    },
]

export default routes;