import Taro, { Component } from '@tarojs/taro'
import { View, Text, MovableArea, MovableView, Icon, Progress, RichText, Button, Checkbox, Label, Form, Switch, Input, RadioGroup, Radio } from '@tarojs/components'
import { Picker, Textarea, Audio, Image, Video, Camera, Swiper, SwiperItem} from '@tarojs/components'
import './goods.css'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '商品'
  }

  state = {
    slidegroup: [
        {
          txt: '国内'
        },
         {
          txt: '港澳台'
        },
         {
          txt: '日韩'
        },
         {
          txt: '东南亚'
        },
         {
          txt: '南亚'
        },
         {
          txt: '西亚'
        },
        {
          txt: '欧洲'
        },
        {
          txt: '美洲'
        },
         {
          txt: '澳洲'
        },
        {
          txt: '非洲'
        },

    ],
    goodslist: [
        {
            location: '北京',
            imgurl:'https://n4-q.mafengwo.net/s7/M00/2E/D4/wKgB6lSgx0KAAtuCAAVoSPI1DUk40.jpeg?imageMogr2%2Fthumbnail%2F%21206x170r%2Fgravity%2FCenter%2Fcrop%2F%21206x170%2Fquality%2F100'
        },
        {
            location: '三亚',
            imgurl:'https://b3-q.mafengwo.net/s9/M00/7F/37/wKgBs1dP15aAEhYRAARtahavugY95.jpeg?imageMogr2%2Fthumbnail%2F%21206x170r%2Fgravity%2FCenter%2Fcrop%2F%21206x170%2Fquality%2F100'
        },
        {
            location: '厦门',
            imgurl:'https://n3-q.mafengwo.net/s8/M00/A2/BA/wKgBpVYfQ3qAW4lGAADfj5rcROU25.jpeg?imageMogr2%2Fthumbnail%2F%21206x170r%2Fgravity%2FCenter%2Fcrop%2F%21206x170%2Fquality%2F100'
        },
        {
            location: '上海',
            imgurl:'https://p1-q.mafengwo.net/s5/M00/2B/FB/wKgB3FYu57iAeKCZAADn6gzPV2o53.jpeg?imageMogr2%2Fthumbnail%2F%21206x170r%2Fgravity%2FCenter%2Fcrop%2F%21206x170%2Fquality%2F100'
        },
        {
            location: '成都',
            imgurl:'https://n4-q.mafengwo.net/s8/M00/A5/44/wKgBpVYfRkqAIeUVAAIhvcm_97Y75.jpeg?imageMogr2%2Fthumbnail%2F%21206x170r%2Fgravity%2FCenter%2Fcrop%2F%21206x170%2Fquality%2F100'
        },
        {
            location: '丽江',
            imgurl:'https://b4-q.mafengwo.net/s6/M00/66/87/wKgB4lNYlJGAf371AAE58nN48GY90.jpeg?imageMogr2%2Fthumbnail%2F%21206x170r%2Fgravity%2FCenter%2Fcrop%2F%21206x170%2Fquality%2F100'
        },
         {
            location: '毛里求斯',
            imgurl:'https://b4-q.mafengwo.net/s10/M00/BF/7B/wKgBZ1ly1EyAAmYJABhb3ePxKhk68.jpeg?imageMogr2%2Fthumbnail%2F%21206x170r%2Fgravity%2FCenter%2Fcrop%2F%21206x170%2Fquality%2F100'
        },
         {
            location: '雪乡',
            imgurl:'https://n4-q.mafengwo.net/s7/M00/E4/F0/wKgB6lRYMq2AJGezAASKmjMaU7449.jpeg?imageMogr2%2Fthumbnail%2F%21206x170r%2Fgravity%2FCenter%2Fcrop%2F%21206x170%2Fquality%2F100'
        },
         {
            location: '漠河',
            imgurl:'https://p1-q.mafengwo.net/s7/M00/16/9E/wKgB6lS9vbOADtJEAAPwVcWXcsM31.jpeg?imageMogr2%2Fthumbnail%2F%21206x170r%2Fgravity%2FCenter%2Fcrop%2F%21206x170%2Fquality%2F100'
        },

    ]
 }
  

  render () {
    return (
      <View className='index'>
          <View className='header'>
            <Text>商品</Text>
          </View>
         <View className='searchbar'>
           <Input className='search_inp' placeholder='搜索目的地' />
         </View>
         <View>
            <Image className='goods-img' src='https://b4-q.mafengwo.net/s12/M00/09/3D/wKgED1wXk5mAFW94AAreMDFH4IE87.jpeg?imageMogr2%2Fthumbnail%2F%21750x422r%2Fgravity%2FCenter%2Fcrop%2F%21750x422%2Fquality%2F90'/>
         </View>
          <Swiper className='slider' >
          {
            this.state.slidegroup.map(item =>{
             return(
               
                  <SwiperItem className='swiper-slide'>
                    <View className='demo-text-1 slide-txt'>
                      {item.txt}
                    </View>
                  </SwiperItem>
             )
          })
          }
          </Swiper>

          <View className='goods'>
            {
                this.state.goodslist.map(item =>{
                return(
                    <View className='box'>
                        <Image className='box-img' src={item.imgurl}/>
                        <Text className='goods-txt'>{item.location}</Text>
                    </View>
                )
            })
            }
              
             
          </View>
          
      </View>
    )
  }
}

