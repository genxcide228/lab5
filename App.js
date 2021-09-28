import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {
const [A, setInputA] = useState('');
const [B, setInputB] = useState('');
const [C, setInputC] = useState('');
const [result, setInputResult] = useState('');

const pressHandler = () =>{
let a = Number.parseInt(A);
let b = Number.parseInt(B);
let c = Number.parseInt(C);
if(A!='' && B!='' && C!=''){
let D = b*b-4*a*c;
if(D==0){
let res = (-c)/b;
setInputResult('x = '+res);
}
else if(D>0){
let x1 = (-b-Math.sqrt(D))/(2*a);
let x2 = (-b+Math.sqrt(D))/(2*a);
setInputResult('x1 = '+ x1+'\n\nx2 = '+x2);
}
else if(D<0){
setInputResult('Нет корней!');
}
}else{
Alert.alert("Поля не должны быть пустыми!");
}
}

return (
<View style = {{backgroundColor: '#E8E8E8', width: '100%', height: '100%'}}>
<View style ={styles.header}>
<Text style={styles.headerText}>Решение квадратных уравнений</Text>
</View>

<Text style = {{paddingTop:250, paddingBottom:10,color: '#000',fontWeight: 'bold', fontSize: 17, paddingLeft: 25}}
paddingTop>Заполните поля:</Text>

<View style = {styles.block}>

<TextInput style = {styles.input} keyboardType='numeric' placeholder= 'a' placeholderTextColor='#000'
value = {A} onChangeText={text => setInputA(text)+setInputResult('')}/>

<Text style = {styles.text}>x^2+</Text>
<TextInput style = {styles.input} keyboardType='numeric' placeholder= 'b' placeholderTextColor='#000'
value = {B} onChangeText={text => setInputB(text)+setInputResult('')}/>

<Text style = {styles.text}>x+</Text>
<TextInput style = {styles.input} keyboardType='numeric' placeholder= 'c' placeholderTextColor='#000'
value = {C} onChangeText={text => setInputC(text)+setInputResult('')}/>

<Text style = {styles.text}>= 0</Text>

<View style = {{alignItems: 'center', margin: 10, borderWidth: 2, borderColor: '#000', width: '35%'}}>
<Button title = "Вычислить" onPress = {pressHandler} color = '#000' />
</View>

</View>



<Text style = {{color:'#000', paddingTop: 10, fontSize: 25, paddingLeft: 20, fontWeight: 'bold'}}>Ответ:</Text>
<Text style = {styles.res}>{result}</Text>
</View>
);
}
const styles = StyleSheet.create({
block: {
flexDirection: 'row',
//justifyContent: 'center',
marginLeft: 25,
alignItems: 'center',
marginBottom: 15,
marginTop: 10
},
input: {
color: '#000',
width: '13%',
textAlign: 'center',
borderBottomWidth: 1,
borderBottomColor: '#000',
},
text: {
color: '#000',
fontWeight: 'bold'
},
res: {
color: '#000',
marginTop: 5,
marginLeft: 15,
fontSize: 17
},
header: {
height: '12%',
backgroundColor: '#757575',
},
headerText: {
color: '#fff',
fontWeight: 'bold',
fontSize: 22,
textAlign:'center',
paddingTop: 55,
paddingBottom: 20
}
});
