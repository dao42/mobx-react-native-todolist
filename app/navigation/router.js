import React from 'react'
import { View } from 'react-native'

export default {
  renderScene (route, navigator) {
    const titleConfig = {
      title: route.title
    };

    let leftButtonConfig = { title: '' };
    if(! route.hideBackButton) {
      leftButtonConfig = {
        title: ' <',
        handler: ()=>
          navigator.pop()
      }
    }
    let view = <route.component {...route.store} navigator={navigator}/>;

    return (
      <View style={{ flex: 1 }}>
        {view}
      </View>
    )
  }
}
