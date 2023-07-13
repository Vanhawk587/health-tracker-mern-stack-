// Import React
import React from 'react';
// Import UI components and style from material-ui-next.
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { ExpansionPanel } from '@material-ui/core';
import { ListItem } from '@material-ui/core'
import { ListItemText } from '@material-ui/core';
import { List } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { ExpansionPanelSummary } from '@material-ui/core';
import { ExpansionPanelDetails } from '@material-ui/core';

// Style/Theme
const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    marginLeft: 20,
    color: 'white',
  },
  logItem: {
    marginTop: 34,
    backgroundColor: '#33658A',
    color: 'white',
  },
  button: {
    marginTop: 10,
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#0a436e',
    color: 'white',
  },
});

// Log List component on the My health log page.
class LogList extends React.Component {
  render() {
    const { classes } = this.props;
    return [
        <ExpansionPanel className={classes.logItem} key={this.props._id}>
          <ExpansionPanelSummary>
            <i className="fas fa-plus"></i>
            <Typography className={classes.heading}>
              <b>Doctor notes from {this.props.date}</b>
            </Typography>
          </ExpansionPanelSummary>

          <ExpansionPanelDetails>
            <List>
              <ListItem>
                <ListItemText>
                  <b>Doctor:</b> {this.props.doctor}
                </ListItemText>
              </ListItem>

              <ListItem>
                <ListItemText >
                  <b>Reason for visit:</b> {this.props.visitPurpose}
                </ListItemText>
              </ListItem>

              <ListItem>
                <ListItemText >
                  <b>Height (inches):</b> {this.props.heightIn}
                </ListItemText>
              </ListItem>

              <ListItem>
                <ListItemText >
                  <b>Weight (pounds):</b> {this.props.weightLb}
                </ListItemText>
              </ListItem>

              <ListItem>
                <ListItemText >
                  <b>Visit notes:</b> {this.props.visitNotes}
                </ListItemText>
              </ListItem>
            </List>
          </ExpansionPanelDetails>
        </ExpansionPanel>,
        <Button size="small" color="primary" variant="raised" className={classes.button} onClick={() => { this.props.deleteLog(this.props.id); }}>Delete</Button>,
    ];
  }
}

export default withStyles(styles)(LogList);
 