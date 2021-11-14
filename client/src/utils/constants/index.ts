import { makeStyles } from '@material-ui/core/styles';
import { theme } from '@utils';

export const DRAWER_WIDTH = 240;
export const APP_BAR_HEIGHT = 80;
export const AUTO_HIDE_DURATION = 5000; // 5 seconds

export const useContentAreaStyles = makeStyles({
    contentArea: {
        [theme.breakpoints.up('lg')]: {
            width: `calc(100% - ${DRAWER_WIDTH}px)`,
            marginLeft: DRAWER_WIDTH,
        },
    },
});
