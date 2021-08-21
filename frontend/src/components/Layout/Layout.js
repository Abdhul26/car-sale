
import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import classnames from 'classnames'
import Icon from '@mdi/react'
import {
    mdiSettings as SettingsIcon,
    mdiFacebookBox as FacebookIcon,
    mdiTwitterBox as TwitterIcon,
    mdiGithubBox as GithubIcon,
} from '@mdi/js'
import {
    Fab,
    IconButton
} from '@material-ui/core'
import { connect } from 'react-redux';
// styles
import useStyles from './styles'

// components
import Header from '../Header'
import Sidebar from '../Sidebar'
import Footer from '../Footer'
import { Link } from '../Wrappers'
import ColorChangeThemePopper from './components/ColorChangeThemePopper'

import EditUser from '../../pages/user/EditUser';

// pages
import Dashboard from '../../pages/dashboard'
import BreadCrumbs from '../../components/BreadCrumbs'

// context
import { useLayoutState } from '../../context/LayoutContext'


import MAIN INPUTSFormPage from 'pages/CRUD/MAIN INPUTS/form/MAIN INPUTSFormPage';
import MAIN INPUTSTablePage from 'pages/CRUD/MAIN INPUTS/table/MAIN INPUTSTablePage';
import MAIN INPUTSViewPage from 'pages/CRUD/MAIN INPUTS/page/MAIN INPUTSViewPage';

import JOB INPUTSFormPage from 'pages/CRUD/JOB INPUTS/form/JOB INPUTSFormPage';
import JOB INPUTSTablePage from 'pages/CRUD/JOB INPUTS/table/JOB INPUTSTablePage';
import JOB INPUTSViewPage from 'pages/CRUD/JOB INPUTS/page/JOB INPUTSViewPage';

import UsersFormPage from 'pages/CRUD/Users/form/UsersFormPage';
import UsersTablePage from 'pages/CRUD/Users/table/UsersTablePage';
import UsersViewPage from 'pages/CRUD/Users/page/UsersViewPage';

import Openning ValueFormPage from 'pages/CRUD/Openning Value/form/Openning ValueFormPage';
import Openning ValueTablePage from 'pages/CRUD/Openning Value/table/Openning ValueTablePage';
import Openning ValueViewPage from 'pages/CRUD/Openning Value/page/Openning ValueViewPage';

import Application sizeFormPage from 'pages/CRUD/Application size/form/Application sizeFormPage';
import Application sizeTablePage from 'pages/CRUD/Application size/table/Application sizeTablePage';
import Application sizeViewPage from 'pages/CRUD/Application size/page/Application sizeViewPage';


function Layout(props) {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState(null)

    const open = Boolean(anchorEl)
    const id = open ? 'add-section-popover' : undefined
    const handleClick = event => {
        setAnchorEl(open ? null : event.currentTarget)
    }

    // global
    let layoutState = useLayoutState()

    return (
        <div className={classes.root}>
            <Header history={props.history} />
            <Sidebar />
            <div
                className={classnames(classes.content, {
                    [classes.contentShift]: layoutState.isSidebarOpened,
                })}
            >
                <div className={classes.fakeToolbar} />
                <BreadCrumbs />
                <Switch>

                    <Route path="/admin/dashboard" component={Dashboard} />
                    <Route path="/admin/user/edit" component={EditUser} />

                    <Route path={"/admin/MAIN INPUTS"} exact component={MAIN INPUTSTablePage} />
                    <Route path={"/admin/MAIN INPUTS/new"} exact component={MAIN INPUTSFormPage} />
                    <Route path={"/admin/MAIN INPUTS/:id/edit"} exact component={MAIN INPUTSFormPage} />
                    <Route path={"/admin/MAIN INPUTS/:id"} exact component={MAIN INPUTSViewPage} />

                    <Route path={"/admin/JOB INPUTS"} exact component={JOB INPUTSTablePage} />
                    <Route path={"/admin/JOB INPUTS/new"} exact component={JOB INPUTSFormPage} />
                    <Route path={"/admin/JOB INPUTS/:id/edit"} exact component={JOB INPUTSFormPage} />
                    <Route path={"/admin/JOB INPUTS/:id"} exact component={JOB INPUTSViewPage} />

                    <Route path={"/admin/users"} exact component={UsersTablePage} />
                    <Route path={"/admin/users/new"} exact component={UsersFormPage} />
                    <Route path={"/admin/users/:id/edit"} exact component={UsersFormPage} />
                    <Route path={"/admin/users/:id"} exact component={UsersViewPage} />

                    <Route path={"/admin/Openning Value"} exact component={Openning ValueTablePage} />
                    <Route path={"/admin/Openning Value/new"} exact component={Openning ValueFormPage} />
                    <Route path={"/admin/Openning Value/:id/edit"} exact component={Openning ValueFormPage} />
                    <Route path={"/admin/Openning Value/:id"} exact component={Openning ValueViewPage} />

                    <Route path={"/admin/Application size"} exact component={Application sizeTablePage} />
                    <Route path={"/admin/Application size/new"} exact component={Application sizeFormPage} />
                    <Route path={"/admin/Application size/:id/edit"} exact component={Application sizeFormPage} />
                    <Route path={"/admin/Application size/:id"} exact component={Application sizeViewPage} />

                </Switch>
                <Fab
                    color="primary"
                    aria-label="settings"
                    onClick={e => handleClick(e)}
                    className={classes.changeThemeFab}
                    style={{ zIndex: 100 }}
                >
                    <Icon path={SettingsIcon} size={1} color="#fff" />
                </Fab>
                <ColorChangeThemePopper
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                />
                <Footer>
                    <div>
                        <Link
                            color={'primary'}
                            href={'https://flatlogic.com/'}
                            target={'_blank'}
                            className={classes.link}
                        >
                            Flatlogic
                        </Link>
                        <Link
                            color={'primary'}
                            href={'https://flatlogic.com/about'}
                            target={'_blank'}
                            className={classes.link}
                        >
                            About Us
                        </Link>
                        <Link
                            color={'primary'}
                            href={'https://flatlogic.com/blog'}
                            target={'_blank'}
                            className={classes.link}
                        >
                            Blog
                        </Link>
                    </div>
                    <div>
                        <Link
                            href={'https://www.facebook.com/flatlogic'}
                            target={'_blank'}
                        >
                            <IconButton aria-label="facebook">
                                <Icon
                                    path={FacebookIcon}
                                    size={1}
                                    color="#6E6E6E99"
                                />
                            </IconButton>
                        </Link>
                        <Link
                            href={'https://twitter.com/flatlogic'}
                            target={'_blank'}
                        >
                            <IconButton aria-label="twitter">
                                <Icon
                                    path={TwitterIcon}
                                    size={1}
                                    color="#6E6E6E99"
                                />
                            </IconButton>
                        </Link>
                        <Link
                            href={'https://github.com/flatlogic'}
                            target={'_blank'}
                        >
                            <IconButton
                                aria-label="github"
                                style={{ padding: '12px 0 12px 12px' }}
                            >
                                <Icon
                                    path={GithubIcon}
                                    size={1}
                                    color="#6E6E6E99"
                                />
                            </IconButton>
                        </Link>
                    </div>
                </Footer>
            </div>
        </div>
    )
}

export default withRouter(connect()(Layout))
