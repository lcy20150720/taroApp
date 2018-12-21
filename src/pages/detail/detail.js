import Taro, { Component } from '@tarojs/taro'
import { View, Text, MovableArea, MovableView, Icon, Progress, RichText, Button, Checkbox, Label, Form, Switch, Input, RadioGroup, Radio } from '@tarojs/components'
import { Picker, Textarea, Audio, Image, Video, Camera, Swiper, SwiperItem} from '@tarojs/components'
import './detail.css'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '详情'
  }

  state={
     dateSel:'2018-12-20',
    imglist:[
      {
        url:'https://pic4.40017.cn/gny/line/2017/02/09/18/YMgFIb_600x320_00.jpg'
      },
      {
        url:'https://pic4.40017.cn/gny/line/2017/02/09/18/x7gDJh_600x320_00.jpg'
      },
      {
        url:'https://pic4.40017.cn/gny/line/2017/02/09/18/LZjUGE_600x320_00.jpg'
      },
    ]
  }

  onTimeChange = e => {
    this.setState({
      timeSel: e.detail.value
    })
  }

  render () {
    return (
      <View className='index'>
          <View className='header'>
            <Text>详情</Text>
          </View>
          <Swiper
            className='test-h'
            indicatorColor='#999'
            indicatorActiveColor='#333'
            circular
            indicatorDots
            >
            {
              this.state.imglist.map(item =>{
               return(
                <SwiperItem style='width: 100%!important;'>
                  <View className='demo-text-1'>
                    <Image src={item.url}/>
                  </View>
                </SwiperItem>
               )
            })
            }
          </Swiper>

          <View className="descripe">
              <Text className='goods-title'>珠海长隆海洋王国半自助1日游</Text>
              <Text className='goods-dec'>八大主题区 三大剧场表演 精彩烟花汇演 天天发班</Text>
              <View className='bom-price'>
                <View className='lf-txt'>¥ <Text className='goods-price'>399</Text></View><Text className='rg-txt'>起/人</Text>
              </View> 
              <View className='labels'>
                  <Text className='label-auto'>游乐场</Text>
                  <Text className='label-auto'>公园</Text>
              </View>
          </View>
          <View className='bom-bar'></View>

          <View className='travel-date'>
              <Icon className='icon-time' type='waiting' size='24' color='#ccc'/>
              <Picker className='picker-wrap' mode='date' onChange={this.onTimeChange}>
                <View className='picker'>
                  日期：{this.state.dateSel}
                </View>
              </Picker>
          </View>

          <View className='tabs'>
              <Text className='tab-in cur'>行程</Text>
              <Text className='tab-in'>产品特色</Text>
              <Text className='tab-in'>费用与须知</Text>
          </View>
          <View className='tabs-con'>
            <View className='tabs-adv'>
                <View className='top-con'>
                    <Icon size='20' type='info'/>
                    <Text className='tj'>推荐</Text>
                </View>
                <View className='tj-wrap'>
                     <Text className='tj-txt'>
                      疯玩八大主题区，观三大剧场表演，精彩烟花汇演！
                    </Text>
                     <Text className='tj-txt'>
                      天天发班，景区直达，往返接送！
                    </Text>
                     <Text className='tj-txt'>
                      老少适宜轻松出游！
                    </Text>
                </View>
                <View className='row-wrap'>
                       <View className='top-con'>
                          <Icon size='20' type='info'/>
                          <Text className='tj'>行程信息</Text>
                       </View>
                       <View className='simple-route'>
                          <View className='top'>
                              <View className='col'>
                                <Text className='num'>1</Text>
                                <Text className='b-txt'>景点</Text>
                              </View>
                              <View className='col'>
                                <Text className='num'>1</Text>
                                <Text className='b-txt'>景点</Text>
                              </View>
                              <View className='col'>
                                <Text className='num'>1</Text>
                                <Text className='b-txt'>景点</Text>
                              </View>
                              <View className='col'>
                                <Text className='num'>1</Text>
                                <Text className='b-txt'>景点</Text>
                              </View>
                          </View>
                          <View className='date-route'>
                              <View className='date-row clearfix'>
                                <Text className='date'>第1天</Text>
                                <Icon size='10' className='circle'/>
                                <Text className='rg-date-txt'>半自由行1天游</Text>
                              </View>
                              <View className='date-row dt-row'>
                                <Text className='left-tt'>汽车:</Text>
                                <Text className='right-tt'>乘巴士前往目标珠海长隆，途中远观港珠澳大桥！较晚返回广州</Text>
                              </View>
                              <View className='date-row dt-row'>
                                <Text className='left-tt'>汽车:</Text>
                                <Text className='right-tt'>返程</Text>
                              </View>
                              <View className='date-row dt-row'>
                                <Text className='left-tt'>景点:</Text>
                                <View className='right-tt'>
                                   <Text className='rg'>情侣路</Text>
                                   <Text className='rg'>珠海渔女</Text>
                                   <Text className='rg'>港珠澳大桥</Text>
                                   <Text className='rg'>游览珠海长隆海洋王国（自行进园自由活动）</Text>
                                </View>
                              </View>
                              <View className='date-row dt-row'>
                                <Text className='left-tt'>餐食:</Text>
                                <Text className='right-tt'>三餐均自理</Text>
                              </View>
                              <View className='date-row dt-row'>
                                <Text className='left-tt'>住宿:</Text>
                                <Text className='right-tt'>无</Text>
                              </View>
                          </View>
                       </View>
                       <View className='dt-route'>
                          <Text className='check'>查看详细行程</Text>
                       </View>
                </View>
               
               <View className='top-con get-on'>
                  <Icon size='20' type='info'/>
                  <Text className='tj'>上车地点</Text>
               </View>
               <View className='address-lit'>
                  <View className='address-row'>
                     <Text className='num'>1</Text>
                     <Text className='time'>08:30</Text>
                     <Text className='address'>海珠区地铁客村站A出口(海珠区)</Text>
                  </View>
                  <View className='address-row'>
                     <Text className='num'>2</Text>
                     <Text className='time'>08:30</Text>
                     <Text className='address'>海珠区地铁客村站A出口(海珠区)</Text>
                  </View>
               </View>

               <View className='top-con get-on'>
                  <Icon size='20' type='info'/>
                  <Text className='tj'>产品特色</Text>
               </View>
               <View className='desc'>
                      珠海长隆国际海洋度假区由广东长隆集团投资兴建的
                      超大型综合主题旅游度假区，首期投资规模超过
                      亿元，位于美丽的横琴岛南部，三面环海，山岚峻秀，绿树成林，与澳门仅一江之隔。
               </View>
            </View>
            <View className='tabs-adv' style='display:none'></View>
            <View className='tabs-adv' style='display:none'></View>
          </View>

          <View className='foo'>
            <View className='left-panel'>
              <View className='foo-col'><Icon className='icon-contact' type='info' size='20' color='#ccc'/><Text className='foo-txt'>客服</Text></View>
              <View className='foo-col'><Icon className='icon-travel' type='info' size='20' color='#ccc'/><Text className='foo-txt'>定制旅行</Text></View>
              <View className='foo-col'><Icon className='icon-collect' type='info' size='20' color='#ccc'/><Text className='foo-txt'>收藏</Text></View>
            </View>
            <View className='right-panel'>立即预定</View>
          </View>
         
      </View>
    )
  }
}

