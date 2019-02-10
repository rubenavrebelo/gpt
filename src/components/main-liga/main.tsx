import * as React from 'react';
import {
    createStyles,
    Theme,
    withStyles,
    WithStyles,
    Typography,
    IconButton,
    Button,
} from '@material-ui/core';
import classNames from 'classnames';
import NavigationBar from '../navigation-bar/nav-bar';
import SvgBackground from './background';
import SvgRunningWild from './wild';
import Placeholder from './placeholder';
import * as Scroll from 'react-scroll';

const styles = (theme: Theme) =>
    createStyles({
        app: {
            minHeight: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#47abe2',
            backgroundSize: '100%',
        },
        runningWild: {
            position: 'absolute',
            width: '65%',
            height: '65%',
            right: '0',
            top: '15%'
        },
        title: {
            position: 'absolute',
            color: 'white',
            top: '30%',
            left: '10%',
            zIndex: 1,
            userSelect: 'none'
        },
        subtitle: {
            position: 'absolute',
            color: 'white',
            top: '37%',
            left: '10%',
            zIndex: 1,
            userSelect: 'none'
        },
        socialIcons: {
            position: 'absolute',
            bottom: 0,
            right: 0
        },
        learnMore: {
            position: 'absolute',
            width: '200px',
            height: '50px',
            top: '50%',
            left: '10%',
            background: 'white',
        }
    });

export class Main extends React.Component<WithStyles<typeof styles>> {
    private myRef = React.createRef<HTMLDivElement>();

    constructor(props: WithStyles<typeof styles>) {
        super(props);
    }

    jumpTo = () => (event: React.MouseEvent<HTMLButtonElement>) => {
        if (this.myRef.current) {
            this.myRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classNames(classes.app)}>
                <NavigationBar />
                <h1 className={classes.title}>{'Liga Portuguesa dos Direitos Humanos'}</h1>
                <h2 className={classes.subtitle}> Civitas</h2>
                <SvgRunningWild className={classNames(classes.runningWild)} />
                <SvgBackground />

                <Button variant={'text'} onClick={this.jumpTo()} className={classes.learnMore}>Saiba mais</Button>
                <Placeholder setRef={this.myRef} />
                <IconButton className={classNames(classes.socialIcons, 'fab fa-twitter')}></IconButton>
            </div>

        );
    }
}

export default withStyles(styles)(Main);