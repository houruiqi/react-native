import React, { Component } from 'react'
import { Text, View,StyleSheet,TextInput } from 'react-native'
import { Icon } from '@ant-design/react-native';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button'
import {myFetch} from './Utils'

let rootUrl = 'https://www.fastmock.site/mock/c5f999d231e756054c86ff3fcb47e82c/api';

export default class Register extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            pwd:'',
            isregister:false
        }
    }
    userhandle = (text)=>{
        this.setState({username:text})
    }
    pwdhandle = (text)=>{
        this.setState({pwd:text})
    }
    isregister = ()=>{
        this.setState({isregister:true})
        myFetch.post('/register',{
            username:this.state.username,
            pwd:this.state.pwd
        }
        ).then(res=>{
            console.log(res);
            Actions.pop();
        })
    } 
    render() {
        return (
            <View>
                <View style={styles.nav}>
                    <Icon style={{color:'#fff',marginLeft:5}} name="left" onPress={()=>Actions.pop()}></Icon>
                    <Text style={{color:'#fff',fontSize:18,marginLeft:190}}>注册</Text>
                </View>
                <View style={{marginTop:250,alignItems: 'center'}}>
                    <View style={styles.name}>
                        <Icon name="user" color="red"/>
                        <TextInput placeholder="用户名"
                            placeholderTextColor="grey" 
                            onChangeText={this.userhandle}
                        />
                    </View>
                    <View style={styles.name}>
                        <Icon name="lock" color="red"/>
                        <TextInput placeholder="密码"
                            placeholderTextColor="grey" 
                            onChangeText={this.userhandle}
                        />
                    </View>
                </View>
                <View style={styles.btn}>
                    <Button style={styles.tru} onPress={this.isregister}>确定</Button>
                    <Button style={styles.fal} onPress={()=>Actions.pop()}>取消</Button>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
	nav:{
        height:60,
        width:'100%',
        backgroundColor:'#f23030',
        flexDirection:'row',
        paddingLeft:10,
        paddingRight:10,
        paddingTop:15,
        color:'#fff',
    },
    name:{
        width: '80%',
        marginRight: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
    },
    btn:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:40,
    },
    tru:{
        width:120,
        height:40,
        paddingTop:8,
        borderRadius:20,
        backgroundColor:'#f23030',
        color:'#fff',
    },
    fal:{
        width:120,
        height:40,
        paddingTop:8,
        borderRadius:20,
        backgroundColor:'grey',
        color:'#fff',
    }
})
