import React, { Component, PropTypes } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import Routes from '../navigation/routes'
import { observer } from 'mobx-react/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import ApplicationStyles from '../styles'

@observer
export default class WeclomeScreen extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    todoListStore: PropTypes.object.isRequired
  }

  submitTodo(event) {
    let title = event.nativeEvent.text;
    this.props.todoListStore.todos.push({title: title, done: false});
    this.refs['1'].clear();
    this.refs['1'].focus();
  }

  toggleTodo(todo) {
    todo.done = !todo.done;
  }

  render() {
    let todoListView;
    if( this.props.todoListStore.todos.length > 0 ){
      todoListView = this.props.todoListStore.todos.map( (todo, index)=> {
        let text;
        if( todo.done ){
          text =
            <Text style={styles.todoTextDone} onPress={ ()=> this.toggleTodo(todo) }>
              <Icon name='check' />
              {todo.title}
            </Text>;
        } else {
          text =
            <Text style={styles.todoText} onPress={ ()=> this.toggleTodo(todo) }>
              {todo.title}
            </Text>;
        }
        return (
          <View key={index} style={styles.todo}>
            {text}
          </View>
        )
      })
    } else {
      todoListView = <View style={styles.noTodoList}><Text style={styles.noTodoListText}>No todoList Now!</Text></View>;
    }

    return (
      <View style={styles.container}>
        <Icon style={styles.welcome} name="home" size={30} />
        <View style={styles.listView}>
          {todoListView}
        </View>
        <Text style={styles.footer}>
          Total: {this.props.todoListStore.total}, Done: {this.props.todoListStore.doneTotal}
        </Text>
        <TextInput ref='1' autoCapitalize={'none'} autoCorrect={false} style={styles.textInput} onSubmitEditing={(event)=>this.submitTodo(event)}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  welcome: {
    textAlign: 'center',
    margin: 10,
    marginTop: 50
  },

  listView: {
    flex: 1,
    alignSelf: 'stretch',
  },

  noTodoList: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  noTodoListText: {
    color: '#666',
  },

  todo: {
    height: 40,
    borderColor: '#eee',
    borderWidth: 1,
  },

  todoText: {
    textAlign: 'center',
    lineHeight: 27,
  },

  todoTextDone: {
    textAlign: 'center',
    lineHeight: 27,
    textDecorationLine: 'line-through',
    color: '#aaa',
  },

  footer: {
    marginBottom: 10,
    color: '#666',
  },

  textInput: {
    height: 40,
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    borderColor: '#eee',
    borderWidth: 1,
    bottom: 0,
  },
});
