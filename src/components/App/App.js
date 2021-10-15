import { Switch, Route, Redirect } from 'react-router-dom';
import Posts from "../../pages/Posts";
import Post from '../../pages/Post';
import NotFound from '../../pages/NotFound';


const App = () => {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Redirect to="/posts" />
        </Route>
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/posts/:id" component={Post} />
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
