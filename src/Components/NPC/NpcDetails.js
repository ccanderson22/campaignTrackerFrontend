import React from 'react'
import { Paper, Typography, Container, Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    center: {
        textAlign: 'center'
    }
})

export default function NpcDetails() {
    const npc = JSON.parse(sessionStorage.getItem('npc'))
    const classes = useStyles();

    return (
        <Container> 
            <Paper>
                <Grid container>
                    <Grid item xs={6}>
                        <Grid container>
                            <Grid item>   
                                <Typography variant='h1'>
                                    IMAGE WILL GO HERE
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}> 
                        <Grid container spacing={3}>
                            <Grid item xs={12}>    
                                <Typography className={classes.center} variant='h4'>
                                   {npc.name}
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography>
                                   <b> Alignment:</b> <br/> {npc.alignment}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Typography>
                   
                </Typography>
            </Paper>
        </Container>
    )
}
//TODO: Actually flesh out this page to show all details
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