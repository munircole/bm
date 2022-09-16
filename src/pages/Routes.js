import { Switch, Route, Redirect } from 'react-router-dom';
import NavMenuDesktop from '../components/NavMenuDesktop';
import RightSidePanel from '../components/RightSidePanel';
import QuesListPage from './QuesListPage';
import AllTagsPage from './AllTagsPage';
import AllUsersPage from './AllUsersPage';
import QuestionPage from './QuestionPage';
import AskQuestionPage from './AskQuestionPage';
import UserPage from './UserPage';
import NotFoundPage from './NotFoundPage';
import About from './about/about';
import { useAuthContext } from '../context/auth';

import { Container, Grid } from '@material-ui/core';
import Privacy from './privacy-policy/privacy';
import Terms from './terms/terms';
import Contact from './contact/contact';
import Feedback from './feedback/feedback';

import Library from './library/library';
import Ad from './advertising/ad';
import Redeem from './redeem';


const Routes = () => {
  const { user } = useAuthContext();

  return (
    <Container disableGutters>
      <Grid container direction="row" wrap="nowrap" justify="space-between">
        <Switch>
          <Route exact path="/">
            <NavMenuDesktop />
            <QuesListPage />
            <RightSidePanel />
          </Route>
          <Route exact path="/ask">
            {user ? (
              <>
                <NavMenuDesktop />
                <AskQuestionPage />
                <RightSidePanel />
              </>
            ) : (
              <Redirect to="/" />
            )}
          </Route>

          <Route exact path="/tags">
            <NavMenuDesktop />
            <AllTagsPage />
          </Route>

          <Route exact path="/users">
            <NavMenuDesktop />
            <AllUsersPage />
          </Route>

          <Route exact path="/user/:username">
            <NavMenuDesktop />
            <UserPage />
          </Route>

          <Route exact path="/questions/:quesId">
            <NavMenuDesktop />
            <QuestionPage />
          </Route>

          <Route exact path="/tags/:tagName">
            <NavMenuDesktop />
            <QuesListPage tagFilterActive={true} />
            <RightSidePanel />
          </Route>

          <Route exact path="/search/:query">
            <NavMenuDesktop />
            <QuesListPage searchFilterActive={true} />
            <RightSidePanel />
          </Route>

          <Route exact path="/advertising">
            <NavMenuDesktop />
            <Ad/>
          </Route>

          <Route exact path="/about">
          <NavMenuDesktop />
            <About />
          </Route>

          <Route exact path="/privacy-policy">
            <Privacy/>
          </Route>

          <Route exact path="/terms-and-conditions">
            <Terms/>
          </Route>

          <Route exact path="/contact-us">
            <Contact/>
          </Route>

          <Route exact path="/give-us-feedback">
            <Feedback/>
          </Route>


          <Route exact path="/library">
            <NavMenuDesktop />
            <Library />
          </Route>

          <Route exact path="/redeem-bm-points">
            <NavMenuDesktop />
            <Redeem />
          </Route>

          <Route>
            <NavMenuDesktop />
            <NotFoundPage />
            <RightSidePanel />
          </Route>

        </Switch>
      </Grid>
    </Container>
  );
};

export default Routes;
