import Taro, { Component } from '@tarojs/taro'
import { View, Text, MovableArea, MovableView, Icon, Progress, RichText, Button, Checkbox, Label, Form, Switch, Input, RadioGroup, Radio } from '@tarojs/components'
import { Picker, Textarea, Audio, Image, Video, Camera, Swiper, SwiperItem} from '@tarojs/components'
import './personal.css'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '个人中心'
  }


  render () {
    return (
      <View className='index'>
          <View className='head'>
              尊敬的会员
          </View>
          <View className='bg'>
            <View className='head-img'>
              <Image className='photo' src='http://m.jinmalvyou.com/Public/theme/default/app/images/user_pic_default.png'/>
            </View>
            <Text className='member-num'>jm13527683495</Text>
          </View>
          <View className='icons'>
              <View className='col'>
                <Icon className='waiting' type='waiting' size='30' color='#ccc'/>
                <Text className='bom_txt'>全部订单</Text>
              </View>
              <View className='col'>
                <Icon className='waiting' type='waiting' size='30' color='#ccc'/>
                 <Text className='bom_txt'>待支付</Text>
              </View>
              <View className='col'>
                <Icon className='waiting' type='waiting' size='30' color='#ccc'/>
                 <Text className='bom_txt'>待出行</Text>
              </View>
              <View className='col'>
                <Icon className='waiting' type='waiting' size='30' color='#ccc'/>
                 <Text className='bom_txt'>已取消</Text>
              </View>
          </View>
          <View className='list'>
              <View className='row'>
                  <Icon className='icon-left' type='info' size='20' />
                  <Text className='row_txt'>个人信息</Text>
              </View>
               <View className='row'>
                  <Icon className='icon-left' type='info' size='20'/>
                  <Text className='row_txt'>个人信息</Text>
              </View>
              <View className='row'>
                  <Icon className='icon-left' type='info' size='20'/>
                  <Text className='row_txt'>个人信息</Text>
              </View>
              <View className='row'>
                  <Icon className='icon-left' type='info' size='20'/>
                  <Text className='row_txt'>个人信息</Text>
              </View>
              <View className='row'>
                  <Icon className='icon-left' type='info' size='20'/>
                  <Text className='row_txt'>个人信息</Text>
              </View>


          </View>
         
         
      </View>
    )
  }
}

