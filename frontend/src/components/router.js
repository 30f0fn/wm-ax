import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link
} from "react-router-dom";

import Home from '../views/home.js';
import NewPost from '../views/new_post.js';
import PostDetail from '../views/post_detail.js';

const Router = ({className}) =>
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/compose">
              <NewPost/>
            </Route>
            <Route exact path="/articles/:slug" component={PostDetail}>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>;


export default Router;



