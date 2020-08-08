
import * as React from 'react';
import {
    createStyles,
    Theme,
    withStyles,
    WithStyles,
    Typography,
} from '@material-ui/core';
import classNames from 'classnames';
import SvgConversation from '../svgs/src/static/Conversation';

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
}

type PropsAndStyles = Props & WithStyles<typeof styles>;

export class Placeholder extends React.Component<PropsAndStyles> {
    constructor(props: PropsAndStyles) {
        super(props);
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classNames(classes.wrapper)} ref={this.props.setRef}>
                <div className={classNames(classes.div)}>
                    <Typography variant={'h6'} className={classNames(classes.title)}>Lorem Ipsum</Typography>
                    <Typography variant={'body1'} >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    <br />sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    <br />
                        Rhoncus dolor purus non enim praesent elementum facilisis leo.
                    <br />
                        Ut faucibus pulvinar elementum integer enim neque.
                    </Typography>
                </div>
                <SvgConversation className={classNames(classes.conversation)} />
            </div>
        );
    }
}

export default withStyles(styles)(Placeholder);