import React, {useState} from 'react';
import * as Icon from '../../imgs/svg';
import TextInput from '../textInput'
import MainButton from '../mainButton';
import Sidebar from '../sidebar';


function Login({login = false, showLogin = true, choosePlan = false}){
    const [logedIn, setLogedIn] = useState(false);
    const [SignUp, setSignUp] = useState(false);
    const [unlock, setUnlock] = useState(false);


    if (logedIn){
        login = true;
        showLogin = false;
    } else {
        showLogin = true;
        login = false;
    }

    if (unlock) {
        choosePlan = true;
        login = false;
        showLogin = false;
    } else {
        choosePlan = false;
    }

    return (
<div style={{width:'100vw', height:'100vh', display:'flex'}}>
{
    showLogin&&(
    <div style={{ display:'flex', flex:1, flexDirection:'row'}}>
        <div style={{flex:1, alignItems:'center', justifyContent:'center', margin:'20px', display:'flex'}}>
        <Icon.BannerMan />
        </div>
        {/* Left side below */}
        <div style={{flex:1, flexDirection:'column', backgroundColor:'', display:'flex'}}>
            <div style={{flex:1, display:'flex', flexDirection:'column', textAlign:"left", marginLeft:'20px'}}>
            <div style={{ flex:0.5, marginTop:'10vh' }}>
                <p style={{fontSize:'29pt' ,color:'#8C93D5',}}>Posim</p>
            </div>
            <div style={{}}><p style={{margin:0, fontSize:'17pt', color:'#444B95'}}>Create an account</p></div>
            <div style={{}}><p style={{margin:0, fontSize:'10pt', color:'grey'}}>Create an account</p></div>
                <div style={{flex:2}}>

                <TextInput
                customTitle={'FirstName'}
                inputWidth={"30vw"} />
                <TextInput
                customTitle={'LastName'}
                inputWidth={"30vw"} />
                <TextInput
                customTitle={'Email'}
                inputWidth={"30vw"} />
                <TextInput
                customTitle={'Password'}
                inputWidth={"30vw"} />

                <div style={{display:'inline', width:'30vw'}}><input type="checkbox" /><div style={{display:'inline'}}>I have read the terms of service</div></div>

                <MainButton 
                click={()=>{setLogedIn(!logedIn)}}
                width={"30vw"}
                />

                <div style={{width:'30vw'}}><p style={{display:'inline'}}>Don't have and account?</p><a href="https://www.poop.com" style={{display:'inline'}}>SignUp</a></div>

                </div>
            </div>
        </div>
    </div>
    )
}
        {
            login&&(
                <div style={{display: 'flex', flex: 1, alignItems:'center', marginTop:'10vh', flexDirection:'column' ,flex:1, width: "100vw", height: '100vh'}}>
                    <div style={{fontSize:'29pt', flex:0.4}}>Welcome User</div>
                    <div style={{flex: 1}}>
                        <Icon.ThumbsUp />
                    </div>
                    
                    <div style={{fontSize:'19pt', flex:0.2}}>You signed up succesfully</div>
                    <div style={{fontSize:'19pt', flex:0.4}}>choose a plan to start your managment</div>

                    <div style={{flex: 1, width:'30vw'}}>
                        <MainButton
                    
                         click={()=>{setUnlock(!unlock)}}
                         width={'30vw'}
                         defaultText={"Choose Plan"} />
                    </div>
                 </div>
            )
        }
        {
            choosePlan&&(
                <Sidebar />

            )
        }
   
</div>
    )
}
Login.defaultProps = {

}   


export default Login;
