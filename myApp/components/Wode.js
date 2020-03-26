import React, { Component } from 'react'
import {StyleSheet,View,Text, Image,ScrollView,TouchableOpacity, AsyncStorage } from 'react-native';
import {Actions} from 'react-native-router-flux';
// import ImageCropPicker from 'react-native-image-crop-picker';
// import ImagePicker from 'react-native-image-picker';

// const options = {
//     title: 'Select Avatar',
//     customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
//     storageOptions: {
//       skipBackup: true,
//       path: 'images',
//     },
// };
export default class Wode extends Component {
    // constructor(){
    //     super();
    //     this.state={
    //         imageUrl:{'uri':''}
    //     }
    // }
    // componentDidMount(){
    //     AsyncStorage.getItem('userImage').then((res)=>{
    //         const source = {uri:res};
    //         this.setState({
    //             imageUrl:source,
    //         })
    //         // console.log(this.state.imageUrl);
    //     })
    // }
    // takephoto=()=>{
    //     // console.log('sdc');
    //     ImagePicker.showImagePicker(options, (response) => {
    //         if (response.didCancel) {
    //              return;
    //         } else if (response.error) {
    //             console.log('Error:', response.error);
    //         } else if (response.customButton) {
    //             console.log('custom:', response.customButton);
    //         } else {
    //             console.log(response.uri);
    //             AsyncStorage.setItem('userImage',response.uri,()=>{console.log('store success')})
    //             const source = { uri: response.uri };
    //             this.setState({
    //                     imageUrl: source,
    //             });
    //         }
    //       });
    // }
    back=()=>{
        Actions.login();
        AsyncStorage.clear();
    }
    render() {
        return (
            <ScrollView>
            <View>
                <View style={styles.header} >
                    {/* <TouchableOpacity style={{marginTop:40}}> */}
                        <Image style={styles.tou} source={require('../img/tou.png')}/>
                    {/* </TouchableOpacity> */}
                    <Text style={styles.ming}>BINNU DHILON</Text>
                </View>
                <View style={styles.first}>
                    <Image style={styles.biao} source={require('../img/z.png')}/>
                    <Text style={styles.zi}>我的个人中心</Text>
                </View>
                <View style={styles.ge}>
                    <View style={styles.ge1}>
                        <Image style={styles.biao1} source={require('../img/z1.png')}/>
                        <Text style={styles.zi1}>账户管理</Text>
                    </View>
                    <View style={styles.ge1}>
                        <Image style={styles.biao1} source={require('../img/z2.png')}/>
                        <Text style={styles.zi1}>收货地址</Text>
                    </View>
                    <View style={styles.ge1}>
                        <Image style={styles.biao1} source={require('../img/z3.png')}/>
                        <Text style={styles.zi1}>我的信息</Text>
                    </View>
                </View>
                <View style={styles.ge}>
                    <View style={styles.ge1}>
                        <Image style={styles.biao1} source={require('../img/z4.png')}/>
                        <Text style={styles.zi1}>我的订单</Text>
                    </View>
                    <View style={styles.ge1}>
                        <Image style={styles.biao1} source={require('../img/z5.png')}/>
                        <Text style={styles.zi1}>我的二维码</Text>
                    </View>
                    <View style={styles.ge1}>
                        <Image style={styles.biao1} source={require('../img/z6.png')}/>
                        <Text style={styles.zi1}>我的积分</Text>
                    </View>
                </View>
                <View style={styles.ge2}>
                    <View>
                        <Image style={styles.biao2} source={require('../img/z7.png')}/>
                        <Text style={styles.zi1}>我的收藏</Text>
                    </View>
                </View>

                <View style={{marginTop:15}}></View>
                <View style={styles.first}>
                    <Image style={styles.biao} source={require('../img/e.png')}/>
                    <Text style={styles.zi}>E族生活</Text>
                </View>
                <View style={styles.ge}>
                    <View style={styles.ge1}>
                        <Image style={styles.biao1} source={require('../img/e1.png')}/>
                        <Text style={styles.zi1}>居家维修保养</Text>
                    </View>
                    <View style={styles.ge1}>
                        <Image style={styles.biao1} source={require('../img/e2.png')}/>
                        <Text style={styles.zi1}>出行接送</Text>
                    </View>
                    <View style={styles.ge1}>
                        <Image style={styles.biao1} source={require('../img/e3.png')}/>
                        <Text style={styles.zi1}>我的受赠人</Text>
                    </View>
                </View>
                <View style={styles.ge}>
                    <View style={styles.ge1}>
                        <Image style={styles.biao1} source={require('../img/e4.png')}/>
                        <Text style={styles.zi1}>我的住宿优惠</Text>
                    </View>
                    <View style={styles.ge1}>
                        <Image style={styles.biao1} source={require('../img/e5.png')}/>
                        <Text style={styles.zi1}>我的活动</Text>
                    </View>
                    <View style={styles.ge1}>
                        <Image style={styles.biao1} source={require('../img/e6.png')}/>
                        <Text style={styles.zi1} onPress={()=>Actions.release()}>我的发布</Text>
                    </View>
                </View>
                <View style={{width:480,height:20,backgroundColor:'#fff'}}></View>
                <View style={styles.endv}>
                    <Text style={styles.endtst}>BINNU DHILON | </Text>
                    <Text style={styles.ending} onPress={this.back}>退出</Text>
                </View>
                
            </View>
            </ScrollView>

        )
    }
}
const styles = StyleSheet.create({
	header:{
        backgroundColor:'#f23030',
        width:480,
        height:250,
        alignItems:'center'
    },
    tou:{
        width:120,
        height:120,
        borderRadius:65,
        borderColor:'#fff',
        borderWidth:2,
        marginTop:40
    },
    ming:{
        marginTop:20,
        fontSize:18,
        color:'#fff'
    },
    first:{
        backgroundColor:'#fff',
        flexDirection:'row',
        width:480,
        height:65,
        borderBottomWidth:1,
        borderBottomColor:'#eeeeee'
    },
    biao:{
        marginTop:13,
        marginLeft:15,
        width:35,
        height:35
    },
    zi:{
        marginTop:18,
        marginLeft:20,
        fontSize:18,
        color:'#4f4e4e'
    },
    ge:{
        backgroundColor:'#fff',
        width:480,
        height:100,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    ge1:{
        // borderWidth:1,
        alignItems:'center'
    },
    biao1:{
        width:40,
        height:40,
        marginTop:25,
        resizeMode:'contain'
    },
    zi1:{
        fontSize:18,
        color:'#4f4e4e',
        marginTop:5
    },
    ge2:{
        backgroundColor:'#fff',
        width:480,
        height:130,
        paddingLeft:40
    },
    biao2:{
        width:40,
        height:40,
        marginTop:25,
        marginLeft:16,
        resizeMode:'contain'
    },
    endv:{
        height:90,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    endtst:{
        marginTop:10,
        fontSize:16,
        color:'#767676'
    },
    ending:{
        marginTop:10,
        fontSize:16,
        color:'#767676'
    }
});
