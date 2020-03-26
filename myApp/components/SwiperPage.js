import React, { Component } from 'react'
import { Text, View ,Image,StyleSheet,ScrollView,AsyncStorage,TouchableOpacity} from 'react-native'
import Swiper from 'react-native-swiper';

export default class SwiperPage extends Component {
    start =  () => {
        AsyncStorage.setItem('isInstall','true',()=>{
            this.props.afterInstall();
        });
    };
    render() {
        return (
                <Swiper 
                dot={<View style={{ backgroundColor: '#fff', width: 8, height: 8, borderRadius: 4, marginLeft: 8, marginRight: 8, marginTop: 3, marginBottom: 3 }} />}
                    activeDot={<View style={{ backgroundColor: '#f23030', width: 8, height: 8, borderRadius: 4, marginLeft: 8, marginRight: 8, marginTop: 3, marginBottom: 3 }} />}
                    paginationStyle={{
                        bottom: 50, left: 0
                    }} 
                    autoplay = {true}
                    // style={styles.wrapper}
                    // showsButtons={true}
                >
                    <View style={styles.slide1}>
                        <Image style={styles.pic} source={require('../assets/1.jpg')}/>
                    </View>
                    <View style={styles.slide1}>
                        <Image style={styles.pic} source={require('../assets/2.jpg')}/>
                    </View>
                    <View style={styles.slide1}>
                        <Image style={styles.pic} source={require('../assets/3.jpg')}/>
                        <TouchableOpacity onPress={
                            this.start
                        } style={styles.start}>
                            <Text style={{color:'#fff',fontSize:18}}>开始体验</Text>
                        </TouchableOpacity>
                    </View>
                </Swiper>
        )
        
    }
}
const styles = StyleSheet.create({
    slide1:{
        flex:1,
        alignItems:'center',
        height:'100%'
    },
    start:{
        bottom:170,
        width:150,
        height:50,
        backgroundColor:'#f23030',
        borderRadius:40,
        justifyContent:'center',
        alignItems:'center',
        textAlignVertical:'center',
    },
    pic:{
        width:'100%',
        height:'100%'
    }
})

