import React, { Component } from 'react'
import {StyleSheet,View,Text, Image,ScrollView,TextInput } from 'react-native';
import { Icon } from '@ant-design/react-native';
import Button from 'react-native-button';
import Swiper from 'react-native-swiper';

export default class Shouye extends Component {
    render() {
        return (
            <ScrollView>
            <View>
                <View style={styles.search}>
                    <View style={styles.search0} >
                        <Icon name="search" size='md' style={styles.ico}/>
                        <TextInput 
                        placeholder="请输入您要搜索的关键字"
                        placeholderTextColor="#fff"
                        style={styles.inp}></TextInput>
                        <Icon name="shopping-cart" size='md' style={styles.ico}/>

                    </View>
                </View>
                 <Swiper
                    style={{height:200}}
                    dot={<View style={{ backgroundColor: '#fff', width: 8, height: 8, borderRadius: 4, marginLeft: 8, marginRight: 8, marginTop: 3, marginBottom: 3 }} />}
                    activeDot={<View style={{ backgroundColor: '#f23030', width: 8, height: 8, borderRadius: 4, marginLeft: 8, marginRight: 8, marginTop: 3, marginBottom: 3 }} />}
                    paginationStyle={{
                        bottom: 10, left: 0
                    }} 
                    autoplay = {true}
                >
                    <View style={styles.slide1}>
                        <Image style={{height:200,width:480}}  source={require('../img/1.png')}/>
                    </View>
                    <View style={styles.slide1}>
                        <Image style={{height:200,width:480}}  source={require('../img/2.png')}/>
                    </View>
                    <View style={styles.slide1}>
                        <Image style={{height:200,width:480}}  source={require('../img/1.png')}/>
                    </View>
                </Swiper>
                <View style={styles.box}>
                    <Image style={styles.imgs} source={require('../img/r1.png')}/>
                    <Text style={styles.tet}>居家维修保养</Text>
                    <Image style={styles.right} source={require('../img/right.png')}/>
                </View>
                <View style={styles.box}>
                    <Image style={styles.imgs} source={require('../img/r2.png')}/>
                    <Text style={styles.tet}>住宿优惠</Text>
                    <Image style={styles.right} source={require('../img/right.png')}/>
                </View>
                <View style={styles.box}>
                    <Image style={styles.imgs} source={require('../img/r3.png')}/>
                    <Text style={styles.tet}>出行接送</Text>
                    <Image style={styles.right} source={require('../img/right.png')}/>
                </View>
                <View style={styles.box}>
                    <Image style={styles.imgs} source={require('../img/r4.png')}/>
                    <Text style={styles.tet}>E族活动</Text>
                    <Image style={styles.right} source={require('../img/right.png')}/>
                </View>
                <Button style={styles.btn}>发布需求</Button>
                <Text style={styles.endtet}>©E族之家 版权所有</Text>
                <View style={{height:40}}></View>
            </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
	search:{
        width:480,
        height:60,
        backgroundColor:'#f23030',
        flexDirection:'row',
    },
    search0:{
        marginTop:10,
        marginLeft:25,
        width:390,
        height:40,
        borderRadius:20,
        backgroundColor:'#fff',
        opacity:0.7,
        flexDirection:'row',
    },
    inp:{
        flexDirection:'row',
        marginLeft:8,
        color:'#999999',
        width:340,
        height:40,
    },
    ico:{
        marginTop:8,
        marginLeft:15,
        width:20,
        height:20,
        color:'#fff'
      },
      slide:{
        width:480,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    box:{
        width:480,
        height:90,
        marginTop:10,
        backgroundColor:'#fff',
        flexDirection:'row',
    },
    imgs:{
        width:70,
        height:70,
        marginTop:10,
        marginLeft:20,
        borderRadius:35
    },
    tet:{
        marginLeft:20,
        marginTop:32,
        fontSize:17,
        color:'#333',
        width:120,
    },
    right:{
        marginTop:40,
        marginLeft:210,
        width:11,
        height:20
    },
    btn:{
        backgroundColor:'#f23030',
        color:'#fff',
        marginTop:25,
        width:420,
        marginLeft:30,
        borderRadius:10,
        height:50,
        paddingTop:10
    },
    endtet:{
        marginTop:35,
        marginLeft:180,
        color:'#333'
    }
});
