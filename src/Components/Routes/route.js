import CampaignSelection from '../../Views/CampaignSelection/CampaignSelection'
import CampaignHome from '../../Views/CampaignHome/CampaignHome'
import Npcs from '../../Views/NPC/Npcs'
import NpcView from '../../Views/NPC/NpcView'
// import NpcDetails from '../NPC/NpcDetails'
import HomeIcon from '@material-ui/icons/Home';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import PeopleIcon from '@material-ui/icons/People';
import OrganizationView from '../../Views/Organizations/OrganizationsView';
import GroupWorkIcon from '@material-ui/icons/GroupWork';

const routes = [
    {
        path: "/",
        name: "Campaigns",
        component: CampaignSelection,
        icon: HomeIcon,
        navLink: true
    },
    {
        path: "/campaign",
        name: "Home Page",
        component: CampaignHome,
        icon: MenuBookIcon,
        navLink: true
    },
    {
        path: "/campaign/npcs",
        name: "NPCs",
        component: Npcs,
        icon: PeopleIcon,
        navLink: true
    },
    {
        path: "/campaign/npcs/details",
        name: "NPC Details",
        component: NpcView,
        icon: PeopleIcon,
        navLink: false
    },
    {
        path: "/campaign/organizations",
        name: "Organizations",
        component: OrganizationView,
        icon: GroupWorkIcon,
        navLink: true
    },
]

export default routes;