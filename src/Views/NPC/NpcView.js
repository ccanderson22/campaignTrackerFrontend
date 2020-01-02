import React, {useState} from 'react'
import { Container, Paper, Typography, AppBar, Tabs, Box, Tab } from '@material-ui/core'
import NpcDetails from '../../Components/NPC/NpcDetails'
import NpcStats from '../../Components/NPC/NpcStats'
import NpcPersonalDetailsEdit from '../../Components/NPC/NpcPersonalDetailsEdit'
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Paper
      elevation={4}
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Paper>
    );
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

export default function NpcView() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    return (
      <div>
                <AppBar position='static'>
                    <Tabs value={value} onChange={handleChange} centered>
                        <Tab label='Overview' {...a11yProps(0)}/>
                        <Tab label='Personality' {...a11yProps(1)}/>
                        <Tab label='Affiliations' {...a11yProps(2)}/>
                        <Tab label='Statistics' {...a11yProps(3)}/>
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    <NpcDetails />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <NpcPersonalDetailsEdit />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <NpcStats />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <NpcStats />
                </TabPanel>

      </div>
              
        
    )
}