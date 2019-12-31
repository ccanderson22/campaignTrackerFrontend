import React, {useState} from 'react'
import { Container, Paper, Typography, AppBar, Tabs, Box, Tab } from '@material-ui/core'
import NpcDetails from '../../Components/NPC/NpcDetails'
import NpcStats from '../../Components/NPC/NpcStats'
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Paper
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
        <Container maxWidth='xl'>
            <Paper>
                <Typography variant='h1'>
                    NPC Details
                </Typography>
                <AppBar position='static'>
                    <Tabs value={value} onChange={handleChange} centered>
                        <Tab label='NPC Details' {...a11yProps(0)}/>
                        <Tab label='NPC Stats' {...a11yProps(1)}/>
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    <NpcDetails />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <NpcStats />
                </TabPanel>
            </Paper>
        </Container>
    )
}