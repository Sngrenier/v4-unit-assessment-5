import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Auth from './Components/Auth/Auth'
import Dash from './Components/Dash/Dash'
import Post from './Components/Post/Post'
import Form from './Components/Form/Form'


export default (
    <Switch>
        <Route exact path='/' component={Auth}></Route>
        <Route path='/dash' component={Dash}></Route>
        <Route path='/post/:id' component={Post}></Route>
        <Route path='/form' component={Form}></Route>
    </Switch>
)