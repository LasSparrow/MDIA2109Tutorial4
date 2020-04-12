import React from 'react';
import CustomButton from '../comps/CustomButton';
import Header from '../comps/Header';
import Input from '../comps/Input';
import Chat from '../comps/Chat';
import ChatPage from '../pages/ChatPage';

export default {
    title:"My comps",
    component: CustomButton
};

//const (constant) is the same as var (variable) but it CANNOT be changed
export const MyCustomButton = () => <CustomButton />;

function CancelClick(){
    alert("cancel");
}

export const MyCustomButtonWithOptions = () => <CustomButton 
    color="#999"
    text="Cancel"
    onClick={CancelClick}    
/>;

export const MyHeader = () => <Header />;

export const MyInput = () => <Input />;

export const MyInputWithPlaceholder = () => <Input 
placeholder="Custom placeholder"
/>;

export const MyChat = () => <Chat />;

export const MyChatPage = () => <ChatPage />;

/* export const PageWithCustomButtons = () => <div>
    <Header 
    fontSize={15}
    color="#ABC"
    onMouseOver={CancelClick}
    />    
    <Header 
    fontSize={25}
    color="red"
    onMouseOver={OkClick}
    />

    <CustomButton 
    color="#999"
    text="Cancel"
    onClick={CancelClick}    
    />
    <CustomButton 
    color="#3F5" 
    text="OK" 
    onClick={OkClick}
    />
    <CustomButton 
    color="#F3F"
    text="Submit" />
    <CustomButton 
    text="Menu" />
</div>

function OkClick(){
    alert("OK");
} */