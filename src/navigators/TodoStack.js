import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import TodoListScreen from '../components/TodoListScreen'
import TodoDetailScreen from '../components/TodoDetailScreen'



const TodoStack = createAppContainer(
    createStackNavigator({
        TodoDetailScreen,
        TodoListScreen,
    },
    {
        headerMode: 'none'
    })
)

export default TodoStack