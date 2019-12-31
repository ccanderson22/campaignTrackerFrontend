import React from 'react'
import { makeStyles, Card, Avatar, CardContent, Typography, CardActionArea, Grid, CardHeader, Divider } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(8),
      height: theme.spacing(8),

    },
  }));

export default function NpcCard(props) {
    const classes = useStyles();
    const { npc } = props;


    return (//Maybe on this root class for the cards
      <div className={classes.root}>
        <Card elevation={3}>
            <CardActionArea> 
                      <CardHeader
                      avatar= {<Avatar className={classes.large} src="http://klubbsaga2015.wdfiles.com/local--files/half-orc/Half-Orc%2038%20%28Sir%20Albert%20Portrait%2C%20by%20artbytravis%29.jpg"/>}
                      title={<Typography noWrap>{npc.name}</Typography>} 
                      subheader={'Alignment: ' + npc.alignment}
                      />
                <CardContent>
                    <Grid container spacing={1}>
                        <Grid item xs={6}>  
                            <Typography>
                               <b>Race: </b> {npc.race}  
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography>
                               <b>Age:</b>  {npc.age}
                            </Typography>
                        </Grid>
                    </Grid>
                    </CardContent>
            </CardActionArea>
        </Card>
      </div>
    )
}

// {
//     '0': {
//       affiliations: {
//         organizations: [
//           'Lords Alliance',
//           'Theives Guild'
//         ],
//         people: [
//           'The King',
//           'The Kings Assassin'
//         ]
//       },
//       campaignId: [
//         '5dfd36250848d163483823d9',
//         '5dfd36390848d163483823da'
//       ],
//       profession: [
//         'Cobbler',
//         'Assassin'
//       ],
//       goals: [
//         'To make the best shoes in the kingdon',
//         'Have the king murdered'
//       ],
//       ticks: [
//         'Can\'t turn left',
//         'Pulls his ear when lying'
//       ],
//       flaws: [
//         'Cannot decline a free drink',
//         'Lets people walk al over him'
//       ],
//       oddities: [
//         'Missing his left eye',
//         'Missing his left hand'
//       ],
//       description: [
//         'Short for an elf with long red bushy hiar, dressed in fine clothes',
//         'Very handson'
//       ],
//       notes: [
//         'Doesn\'t like the party all too much',
//         'Knows many secrets of the king'
//       ],
//       _id: '5dfd38002f4ff54a10ca3b04',
//       proficiencies: [
//         'Stealth',
//         'Perception',
//         'Intimidation'
//       ],
//       image: 'placeholdimageurl.com',
//       name: 'Tester Testington III',
//       sex: 'Male',
//       race: 'Elf',
//       age: 135,
//       height: 65,
//       alignment: 'Chaotic Good',
//       stats: {
//         strength: 5,
//         dexterity: 12,
//         constitution: 18,
//         wisdom: 18,
//         intelligence: 20,
//         charisma: 18
//       },
//       __v: 0
//     }
//   }