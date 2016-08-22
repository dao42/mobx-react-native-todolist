export default new class Routes {
  get WelcomeScreen () {
    return {
      title: 'Home',
      hideBackButton: true,
      component: require('../containers/welcome_screen').default,
      store: {
        todoListStore: require('../stores/todo_list_store').default,
      }
    }
  }
}
