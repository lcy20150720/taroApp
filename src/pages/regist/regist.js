import Taro, { Component } from '@tarojs/taro'
import { View, Text, MovableArea, MovableView, Icon, Progress, RichText, Button, Checkbox, Label, Form, Switch, Input, RadioGroup, Radio } from '@tarojs/components'
import { Picker, Textarea, Audio, Image, Video, Camera, Swiper, SwiperItem} from '@tarojs/components'
import './regist.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '注册'
  }


  render () {
    return (
      <View className='index'>
          <View className='header'>
            <Text>注册界面</Text>
          </View>
          <View className='login-panel'>
              <View className="login-row">
                <Input placeholder='您的邮箱/手机号'/>
              </View>
              <Button className='regist-btn' size='default' type='primary'>注册</Button>
              <Button className='login-btn' plain  size='default' type='primary'>登录</Button>
          </View>
         
      </View>
    )
  }
}

