import React, { Component } from 'react'
import { Text, View ,StyleSheet,ToastAndroid} from 'react-native'
import {Actions} from 'react-native-router-flux';
import { Icon } from '@ant-design/react-native';
import Button from 'react-native-button';
export default class Release extends Component {
    constructor(){
        super();
        this.state = {
            data:[],
            page:1,
            isresponse:[]
        }
    }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics?limit=10')
        .then(res=>res.json())
        .then(res=>{
            this.setState({data: res.data});
            // console.log(res.data);
        })
        var arr=[];
        for(var i=0;i<10;i++){
            arr.push(Math.random());
        }
        this.setState({
            isresponse:arr
        });
    }
    left=()=>{
        var arr=[];
        for(var i=0;i<10;i++){
            arr.push(Math.random());
        }
        this.setState({
            isresponse:arr
        });
        if(this.state.page!=1){
            this.setState({
                page : this.state.page-1
            })
            let url = 'https://cnodejs.org/api/v1/topics?limit=10&&page='+this.state.page;
            fetch(url)
            .then(res=>res.json())
            .then(res=>{
                this.setState({data: res.data});
                // console.log(res.data)
            })
        }
        else{
            this.setState({
                page : 1
            })
            ToastAndroid.show('不能再往前了',100);
            console.log(this.state.page);
        }
    }
    right=()=>{
        var arr=[];
        for(var i=0;i<10;i++){
            arr.push(Math.random());
        }
        this.setState({
            isresponse:arr
        });
        this.setState({
            page : this.state.page+1
        })
        // console.log(this.state.page);
        let url = 'https://cnodejs.org/api/v1/topics?limit=10&&page='+this.state.page;
        fetch(url)
        .then(res=>res.json())
        .then(res=>{
            this.setState({data: res.data});
            // console.log(res.data);
        })
    }
    render() {
        return (
            <View>
                <View style={styles.nav}>
                    <Icon style={{color:'#fff'}} name="left" onPress={()=>Actions.pop()}></Icon>
                    <Text style={{color:'#fff',fontSize:18}}>我的发布</Text>
                    <Icon style={{color:'#fff'}} name="ellipsis"></Icon>
                </View>
                {
                    this.state.data.map((item,idx)=>(
                        <View style={{flexDirection:'row'}}>
                            <Text numberOfLines={1} style={styles.content}>{item.title}</Text>
                            <Text style={styles.time}>{(item.create_at).substring(0,10)}</Text>
                            <Text ref='inside' style={this.state.isresponse[idx]<0.5?styles.response:styles.response2}>{this.state.isresponse[idx]<0.5?'待回复':'已回复'}</Text>
                        </View>
                    ))
                }
                <View style={styles.btn}>
                    <Button style={styles.lbtn} onPress={this.left}>上一页</Button>
                    <Text style={{marginTop:13,fontSize:15}}>第  {this.state.page}  页</Text>
                    <Button style={styles.lbtn} onPress={this.right}>下一页</Button>
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
        justifyContent:'space-between'
    },
    content:{
        height:60,
        paddingTop:18,
        paddingLeft:8,
        width:300,
        overflow:'hidden',
        color:'#4f4e4e',
    },
    time:{
        height:60,
        paddingTop:18,
        paddingLeft:35,
        color:'#4f4e4e'
    },
    response:{
        height:60,
        paddingTop:18,
        paddingLeft:15,
        color:'#f23030'
    },
    response2:{
        height:60,
        paddingTop:18,
        paddingLeft:15,
        color:'#4f4e4e'
    },
    btn:{
        marginTop:50,
        flexDirection:'row',
        justifyContent:'space-around',
    },
    lbtn:{
        backgroundColor:'#f23030',
        color:'#fff',
        width:100,
        paddingTop:10,
        height:50,
        borderRadius:25
    }
});