import { Box, Divider, Grid, SxProps, Theme, Typography } from '@mui/material';
import search from '../../../assets/search.svg';
import alert from '../../../assets/alert.svg';
import genericLogo from '../../../assets/generic-logo-1.png';
import NavButton, { NavButtonProps } from '../../atoms/NavButton';


interface PageHeaderProps {
    tabList: NavButtonProps[];
    showSearch: boolean;
    showAlert: boolean;
    pageTitle: string;
    logo?: string;
    label?: string;
}

const outerBoxStyle: SxProps<Theme> = {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: '#F2F4F7',
    borderBottomWidth: '1px',
    margin: '0px',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    paddingX: '15px',
    paddingY: '16px',
    boxShadow: '0 4px 5px -2px silver'
};

const innerBoxStyle: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'row'
};

const PageHeader = ({ tabList, showSearch, showAlert, pageTitle, logo = genericLogo, label = '' }: PageHeaderProps) => {
    return (
        <Box sx={outerBoxStyle}>
            <Box sx={innerBoxStyle}>
                <Grid container spacing={2} direction='row' alignItems='center'>
                    <Grid>
                        <img src={logo} height={'64px'} aria-label={label} alt={label} />
                    </Grid>
                    <Grid sx={{ alignSelf: 'stretch'}}>
                        <Divider orientation='vertical' />
                    </Grid>
                    <Grid>
                        <Typography
                            variant='body1'
                            arial-label={pageTitle}
                            sx={{ fontWeight: 'bold', marginRight: '20px', fontFamily: 'Inter', fontSize: '24px'}}
                        >
                            {pageTitle}
                        </Typography>
                    </Grid>
                    {tabList.map((tab) => (
                        <Grid key={tab.id}>
                            <NavButton {...tab} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box sx={innerBoxStyle}>
                <Grid container spacing={1} direction='row' alignItems='center'>
                    {showSearch && <Grid><img src={search} aria-label='Search' /></Grid>}
                    {showAlert && <Grid><img src={alert} aria-label='Alert' /></Grid>}
                </Grid>
            </Box>
        </Box>
    );
};

export default PageHeader;
export type { PageHeaderProps };
