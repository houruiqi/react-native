import React, {Component} from 'react';
import {View, Text, Image, TextInput, AsyncStorage, TouchableOpacity} from 'react-native';
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import {myFetch} from './Utils'

let rootUrl = 'https://www.fastmock.site/mock/c5f999d231e756054c86ff3fcb47e82c/api';

export default class Login extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            pwd:'',
            isloading:false
        }
    }
    userhandle = (text)=>{
        this.setState({username:text})
    }
    pwdhandle = (text)=>{
        this.setState({pwd:text})
    }
    login = ()=>{
        // myFetch.get('/topics',{limit:4,user:'sss'})
        //     .then(res=>console.log(res))
        this.setState({isloading:true})
        myFetch.post('/login',{
            username:this.state.username,
            pwd:this.state.pwd
        }
        ).then(res=>{
            console.log(res);
            // 根据返回状态进行判断，正确时跳转首页
            // if(res){

            // }
            AsyncStorage.setItem('user',JSON.stringify(res.data))
                .then(()=>{
                    this.setState({isloading:false})
                    Actions.lightbox();
                })
        })
    } 
    render() {
        return (
        <View style={{flex: 1,marginTop:270}}>
            <View
            style={{ alignItems: 'center'}}>
            <View
                style={{
                width: '80%',
                marginRight: 10,
                borderBottomColor: '#ccc',
                borderBottomWidth: 1,
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 20,
                }}>
                <Icon name="user" color="red"/>
                <TextInput placeholder="用户名"
                    placeholderTextColor="grey" 
                    onChangeText={this.userhandle}
                />
            </View>
            <View
                style={{
                width: '80%',
                marginRight: 10,
                borderBottomColor: '#ccc',
                borderBottomWidth: 1,
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 20,
                }}>
                <Icon name="lock" color="red"/>
                <TextInput 
                    onChangeText={this.pwdhandle}
                    placeholder="密码" 
                    placeholderTextColor="grey"
                    secureTextEntry={true}
                />
            </View>
                <TouchableOpacity 
                    style={{
                        width: '80%',
                        height: 40,
                        backgroundColor: '#f23030',
                        marginTop: 30,
                        alignItems: 'center',
                        justifyContent: 'center',

                    }}
                    onPress={this.login}>
                    <Text style={{color:"#fff"}}>登录</Text>
                </TouchableOpacity>
                <Text onPress={()=>Actions.register()} style={{marginLeft:330,marginTop:20}}>注册</Text>
            </View>
            {
                this.state.isloading
                ?<View style={{marginLeft:50,marginTop:20}}><Text>正在登录</Text></View>
                :null
            }
        </View>
    );
  }
}