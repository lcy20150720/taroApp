import Taro, { Component } from '@tarojs/taro'
import { View, Text, MovableArea, MovableView, Icon, Progress, RichText, Button, Checkbox, Label, Form, Switch, Input, RadioGroup, Radio } from '@tarojs/components'
import { Picker, Textarea, Audio, Image, Video, Camera, Swiper, SwiperItem} from '@tarojs/components'
import './index.css'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  state={
      goodslist: [
        {
            title: '惠州双月湾檀悦豪生',
            con: '惠州双月湾檀悦豪生 无限次温泉 住公寓酒店海景房 纯玩2天'
        },
        {
            title: '惠州双月湾檀悦豪生',
            con: '惠州双月湾檀悦豪生 无限次温泉 住公寓酒店海景房 纯玩2天'
        },
        {
            title: '惠州双月湾檀悦豪生',
            con: '惠州双月湾檀悦豪生 无限次温泉 住公寓酒店海景房 纯玩2天'
        },
      ]
  }

  pageTo: function(){
    Taro.navigateTo({
      url: '/pages/goods/goods'
    })
  }

  render () {
    return (
      <View className='index'>
          <View className='header'>
            <Text>首页</Text>
          </View>
          <Swiper
            className='test-h'
            indicatorColor='#999'
            indicatorActiveColor='#333'
            circular
            indicatorDots
            autoplay>
            <SwiperItem>
              <View className='demo-text-1'>
                <Image src='https://b1-q.mafengwo.net/s12/M00/FB/B7/wKgED1wVoF-AMkhBAAeTxUoqxZc02.jpeg?imageMogr2%2Fthumbnail%2F%21750x422r%2Fgravity%2FCenter%2Fcrop%2F%21750x422%2Fquality%2F90'/>
              </View>
            </SwiperItem>
            <SwiperItem>
              <View className='demo-text-2'>
                <Image src='https://b4-q.mafengwo.net/s12/M00/09/3D/wKgED1wXk5mAFW94AAreMDFH4IE87.jpeg?imageMogr2%2Fthumbnail%2F%21750x422r%2Fgravity%2FCenter%2Fcrop%2F%21750x422%2Fquality%2F90'/>
              </View>
            </SwiperItem>
            <SwiperItem>
              <View className='demo-text-3'>
                <Image src='https://b4-q.mafengwo.net/s12/M00/7B/2B/wKgED1wZCpWAd75eAAbipin4k8U63.jpeg?imageMogr2%2Fthumbnail%2F%21750x422r%2Fgravity%2FCenter%2Fcrop%2F%21750x422%2Fquality%2F90'/>
              </View>
            </SwiperItem>
          </Swiper>

          <View className='icons-all'>
            <View className='icons-row'>
                 <View className='col' onClick={this.pageTo}><Icon size='50' type='waiting' className='icon' /><Label className='flag'>图标</Label></View> 
                 <View className='col'><Icon size='50' type='success' className='icon'/><Label className='flag'>图标</Label></View> 
                 <View className='col'><Icon size='50' type='info' className='icon'/><Label className='flag'>图标</Label></View> 
                 <View className='col'><Icon size='50' type='download' className='icon'/><Label className='flag'>图标</Label></View> 
            </View>
            <View className='icons-row'>
                 <View className='col'><Icon size='50' type='clear' className='icon' color='red'/><Label className='flag'>图标</Label></View> 
                 <View className='col'><Icon size='50' type='success' className='icon'/><Label className='flag'>图标</Label></View> 
                 <View className='col'><Icon size='50' type='success' className='icon'/><Label className='flag'>图标</Label></View> 
                 <View className='col'><Icon size='50' type='search' className='icon'/><Label className='flag'>图标</Label></View> 
            </View>
          </View>

          <View className='list'>
               {
                this.state.goodslist.map(item => {
                return(
                <View className='row'>
                    <View className='left_box'>
                          <Image src='https://b4-q.mafengwo.net/s12/M00/7B/2B/wKgED1wZCpWAd75eAAbipin4k8U63.jpeg?imageMogr2%2Fthumbnail%2F%21750x422r%2Fgravity%2FCenter%2Fcrop%2F%21750x422%2Fquality%2F90'/>
                    </View>
                    <View className='right_box'>
                        <Text className='top_title'>{item.title}</Text>
                        <Text className='bom_con'>{item.con}</Text>
                    </View> 
                </View>
                )
              })
               } 
          </View>

      </View>
    )
  }
}

