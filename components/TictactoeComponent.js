import React, {useState} from 'react';
import { Button, View, Text, StyleSheet, Modal, Alert } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import Instructions from './GameInstructionsComponent';
import AwesomeAlert from 'react-native-awesome-alerts';

const Game = () => {
    const [xOro, setxOro] = useState('X')
    const [winnerDisplyAlert, setwinnerDisplyAlert] = useState({display:false, winner: ''})
    const [toggleModel, setToggleModal] = useState(false)
    const [boxItem, setboxItem] = useState(
      {
        '00':'',
        '01':'',
        '02':'',
        '10':'',
        '11':'',
        '12':'',
        '20':'',
        '21':'',
        '22':''
      }
    );

    const checkResult = () => {
      for(let i=0; i<3; i++){
        //row check
        if(boxItem[i+'0'] != '' && boxItem[i+'0'] === boxItem[i+'1'] && boxItem[i+'1'] === boxItem[i+'2']){
          setwinnerDisplyAlert({display: true, winner: boxItem[i+'0'] + " Won the Match !!!"});
          resetGame();
          return;
        }
        //colomn check
        else if(boxItem['0'+i] != '' && boxItem['0'+i] === boxItem['1'+i] && boxItem['1'+i] === boxItem['2'+i]){
          setwinnerDisplyAlert({display: true, winner: boxItem['0'+i] + " Won the Match !!!"});
          resetGame();
          return;
        }
      }

      //Diagnol check 1
      if(boxItem['00'] != '' && boxItem['00'] === boxItem['11'] && boxItem['11'] === boxItem['22']){
        setwinnerDisplyAlert({display: true, winner: boxItem['00'] + " Won the Match !!!"});
        resetGame();
      }
      //Diagnol check 2
      else if(boxItem['02'] != '' && boxItem['02'] === boxItem['11'] && boxItem['11'] === boxItem['20']){
        setwinnerDisplyAlert({display: true, winner: boxItem['02'] + " Won the Match !!!"});
        resetGame();
      }
      //Match tie
      else if(boxItem['00'] != '' && boxItem['01'] != '' && boxItem['02'] != '' && boxItem['10'] != '' && boxItem['11'] != '' && boxItem['12'] != '' && boxItem['20'] != '' && boxItem['21'] != '' && boxItem['22'] != ''){
        setwinnerDisplyAlert({display: true, winner: "Match Tie"});
        resetGame();
      }

    }

    const toglePlayer = () => {
      xOro==='X' ? setxOro('O') : setxOro('X')
    }

    const handleBoxItem = (indx) =>{
      console.log(boxItem)
      if(boxItem[indx] === ''){
        boxItem[indx] = xOro 
        setboxItem({...boxItem})
        checkResult()
        toglePlayer()
      }
    }

    const resetGame = () => {
      setxOro('X')
      setboxItem({
        '00':'',
        '01':'',
        '02':'',
        '10':'',
        '11':'',
        '12':'',
        '20':'',
        '21':'',
        '22':''
      })
    }

    const boxDesign = (row) => {
      return (
        <View style={styles.container}>
          <View style={[styles.box, {backgroundColor: boxItem[row+'0']!= ''?"#eef":"#fff"}]} onTouchStart={() => handleBoxItem(row+'0')}>
            <Text style={{fontSize: 80, color: boxItem[row+'0']==='X'?'red':'blue'}}>{boxItem[row+'0']}</Text>     
          </View>
          <View style={[styles.box, {backgroundColor: boxItem[row+'1']!= ''?"#eef":"#fff"}]} onTouchStart={() => handleBoxItem(row+'1')}>
            <Text style={{fontSize: 80, color: boxItem[row+'1']==='X'?'red':'blue'}}>{boxItem[row+'1']}</Text>
          </View>
          <View style={[styles.box, {backgroundColor: boxItem[row+'2']!= ''?"#eef":"#fff"}]} onTouchStart={() => handleBoxItem(row+'2')}>
            <Text style={{fontSize: 80, color: boxItem[row+'2']==='X'?'red':'blue'}}>{boxItem[row+'2']}</Text>
          </View>
        </View>
      )
    }
 
    return(
      <View>
        <AwesomeAlert
          show={winnerDisplyAlert['display']}
          showProgress={false}
          title={winnerDisplyAlert['winner']}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showConfirmButton={true}
          confirmText="Okay"
          confirmButtonColor="red"
          onConfirmPressed={() => {
            setwinnerDisplyAlert(false)
          }}
          
        />
        <Modal
          visible={toggleModel}
          animationType={'fade'}
        >
          <View style={styles.modalContainer}>
            <View style={styles.innerContainer}>
              <Card 
                containerStyle={{borderRadius: 10}}
              >
                <Icon
                  name='remove'
                  color='red'
                  type='font-awesome'
                  onPress={() => setToggleModal(false)}
                  containerStyle={{paddingStart: 250}}
                />
                {boxDesign(0)}
                {boxDesign(1)}
                {boxDesign(2)}
                <Text style = {styles.textView}  onTouchStart={() => resetGame()}>
                    Reset Game
                </Text>
              </Card>
            </View>
          </View>
        </Modal>
        <View>
          <Instructions />
          <View style={styles.buttonStyle}>
            <Button
              onPress={() => setToggleModal(true)}
              title="Lets Play"
              color="#841584"
            />
          </View>
        </View>
      </View>
    )
}
  
const styles = StyleSheet.create({
  header: {
      height: 60,
      padding: 15,
      backgroundColor: 'darkslateblue'
  },
  textView: {
    width: 300,
    height: 40,
    backgroundColor: "#512DA8",
    paddingTop: 5,
    borderRadius: 10,
    paddingStart: 80,
    marginTop: 55,
    color: "#fff",
    fontSize: 25
  },
  box: {
    alignItems: 'center',
    borderWidth: 0.5,
    width: 100,
    height: 100,
  },
  container: {
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
    flexDirection: "row",
  },
  buttonStyle: {
    marginStart: 30,
    paddingTop: 30,
    width: 300
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingBottom: 80,
    paddingTop: 80,
  },
  innerContainer: {
    alignItems: 'center',
  }
})

export default Game;