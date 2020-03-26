import React,{useState,useEffect} from 'react';
import {StyleSheet,View,AsyncStorage,BackHandler,ToastAndroid} from 'react-native';
import {Router, Overlay, Scene, Tabs, Drawer, Lightbox, Modal, Actions} from 'react-native-router-flux';
import { Icon } from '@ant-design/react-native';

import Shouye from './components/Shouye'
import Type from './components/Type'
import Buy from './components/Buy'
import Wode from './components/Wode'
import Release from './components/Release';
import SwiperPage from './components/SwiperPage';
import Login from './components/Loginapp';
import Register from './components/Register';
import SplashScreen from 'react-native-splash-screen'

console.disableYellowBox = true;

const App = () => {
	let [isLogin,setLogin] = useState(false);
	let [isInstall,setInstall] = useState(true);
	let now = 0;
	let init = ()=>{
		AsyncStorage.getItem('isInstall')
		.then(res=>{
			console.log('isinstall',res)
			if(res){
				setInstall(false);
			}
		})
		AsyncStorage.getItem('user')
		.then(res=>{
			let user = JSON.parse(res)
			console.log(user)
			if(!user){
				SplashScreen.hide();
			}
			if(user&&user.token){
				setLogin(true);
				SplashScreen.hide();
			}
		})
	}
	useEffect(()=>{
		SplashScreen.hide();
		init();
	},[])
	let afterInstall = ()=>{
		console.log('after install')
		setInstall(false)
	}
	if(isInstall){
		return <View style={{flex:1}}>
			<SwiperPage afterInstall={afterInstall}/>
		</View>
	}
	return (
		<Router
			backAndroidHandler={()=>{
				if(Actions.currentScene == 'shouye' || Actions.currentScene == 'login'){
					if(new Date().getTime()-now<2000){
						BackHandler.exitApp();
					}else{
						ToastAndroid.show('确定要退出吗',100);
						now = new Date().getTime();
						return true;
					}
				}else{
					Actions.pop();
					return true;
				}
			}}
		>
		<Overlay>
			<Modal key="modal" hideNavBar>
				<Lightbox key="lightbox">
					<Drawer
						key="drawer"
						drawerIcon={()=><Icon name="menu"/>}
						drawerWidth={400}
					>
					<Scene key="root">
						<Tabs 
							key='tabbar'
							hideNavBar
							activeTintColor="#f33838"
							inactiveTintColor="#9d9d9d"
							tabBarStyle={{backgroundColor:'#fff',height:60,borderWidth:0}}
							>
								<Scene key='shouye'
									hideNavBar
									title='首页'
									icon={
									({focused})=><Icon 
									color={focused?'#f33838':'#9d9d9d'} 
									name="home"/>
									}
								>
									<Scene key='shouye' component={Shouye}/>
								</Scene>
								<Scene key='type'
									title='商品分类'
									icon={
									({focused})=><Icon 
									color={focused?'#f33838':'#9d9d9d'} 
									name="appstore"/>
									}
								>
									<Scene key='type' component={Type}/>

								</Scene>
								<Scene key='buy'
									title='购物车'
									icon={
									({focused})=><Icon 
									color={focused?'#f33838':'#9d9d9d'} 
									name="shopping-cart"/>
									}
								>
									<Scene key='buy' component={Buy}/>
								</Scene>
								<Scene key='wode'
									hideNavBar
									title='个人中心'
									icon={
									({focused})=><Icon 
									color={focused?'#f33838':'#9d9d9d'} 
									name="user"/>
									}
								>
									<Scene key='wode' component={Wode}/>
									<Scene key='release' component={Release} hideTabBar/>
								</Scene>
						</Tabs>
					</Scene>
				
				</Drawer>
			</Lightbox>
				<Scene key="login" initial={!isLogin} component={Login} />
				<Scene key="register" component={Register} />
			</Modal>
		</Overlay>
		</Router>
	);
};
const styles = StyleSheet.create({
	
});

export default App;