
import * as React from 'react';
import {
    createStyles,
    Theme,
    withStyles,
    WithStyles,
    Typography,
} from '@material-ui/core';
import classNames from 'classnames';
import SvgConversation from '../main-liga/conversation';

const styles = (theme: Theme) =>
    createStyles({
        div: {
            textAlign: 'left',
            position: 'absolute',
            marginTop: '5%',
            left: '10%',
            flex: 1
        },
        title: {
            fontSize: 36,
            color: 'white'
        },
        conversation: {
            position: 'absolute',
            right: 0,
            width: '50%',
            height: '50%',
        },
        wrapper: {
            minHeight: '350px',
            height: 'auto',
            flex: 1
        }
    });

export interface Props {
    setRef: React.RefObject<HTMLDivElement>;
    textToPresent: string;
    svg: JSX.Element;
}

type PropsAndStyles = Props & WithStyles<typeof styles>;

export class Placeholder extends React.Component<PropsAndStyles> {
    constructor(props: PropsAndStyles) {
        super(props);
    }

    render() {
        const { classes, textToPresent, svg } = this.props;

        return (
            <div className={classNames(classes.wrapper)} ref={this.props.setRef}>
                <div className={classNames(classes.div)}>
                    <Typography variant={'h6'} className={classNames(classes.title)}>Lorem Ipsum</Typography>
                    <Typography variant={'body1'} >
                        {textToPresent}
                    </Typography>
                </div>
                {svg}
            </div>
        );
    }
}

export default withStyles(styles)(Placeholder);