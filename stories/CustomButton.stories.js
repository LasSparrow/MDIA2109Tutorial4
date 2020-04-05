import React from 'react';
import CustomButton from '../comps/CustomButton';
import Header from '../comps/Header';

export default {
    title:"Custom Button",
    component: CustomButton
};

//const (constant) is the same as var (variable) but it CANNOT be changed
export const MyCustomButton = () => <CustomButton />;

export const PageWithCustomButtons = () => <div>
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

function CancelClick(){
    alert("cancel");
}

function OkClick(){
    alert("OK");
}