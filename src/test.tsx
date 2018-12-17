import * as React from 'react';
import { AppBar, Toolbar, Avatar, createStyles, Theme, withStyles, WithStyles, Typography } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import putaria from './static/images/putaria.png';
import classNames from 'classnames';

const styles = (theme: Theme) => createStyles({
    AppBar: {
        background: '#FAFAFA',
    },
});

export class ComponentB extends React.Component<WithStyles<typeof styles>> {

    render() {
        return (<AppBar elevation={0} color={'default'}>
            <Toolbar>
                <Avatar src={putaria}/>
                <h2>Portugal Gaymers</h2>
            </Toolbar>
        </AppBar>);
    }
} 

export default withStyles(styles)(ComponentB);