import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux';
import { AtButton } from 'taro-ui'
import './index.scss'

@connect(({ index }) => ({
  index
}))

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { index } = this.props;
    const { page } = index;
    return (
      <View className='index'>
        <Text>Hello world!{ page }</Text>
        <AtButton type='primary'>按钮文案</AtButton>
      </View>
    )
  }
}
