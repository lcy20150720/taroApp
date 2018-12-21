import Taro, { Component } from '@tarojs/taro'
import { View, Text, MovableArea, MovableView, Icon, Progress, RichText, Button, Checkbox, Label, Form, Switch, Input, RadioGroup, Radio } from '@tarojs/components'
import { Picker, Textarea, Audio, Image, Video, Camera, Swiper, SwiperItem} from '@tarojs/components'
import './login.css'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '登录'
  }


  render () {
    return (
      <View className='index'>
          <View className='header'>
            <Text>登录界面</Text>
          </View>
          <View className='login-panel'>
              <View className="login-row">
                <Input placeholder='您的邮箱/手机号'/>
              </View>
               <View className="login-row last">
                <Input placeholder='您的密码'/>
              </View>
              <Text className='forgot'>忘记密码</Text>
               <Button className='login-btn' size='default' type='primary'>登录</Button>
               <Button className='regist-btn' plain size='default' type='primary'>快速注册</Button>
          </View>
         
      </View>
    )
  }
}

