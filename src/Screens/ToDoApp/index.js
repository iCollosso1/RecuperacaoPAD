import React, { useState, useEffect} from 'react';
import { TouchableOpacity, Keyboard, Alert, AsyncStorage} from 'react-native';
import { MaterialIcons} from "@expo/vector-icons";
import { Container, Header, TitleText, Box, Tarefa, Input, Button, List, TextButton, Body, ContentBox, ContentItem, TaskTitle, TextTask } from './styles';


export default function App() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState('')
        
  async function addTask() {
    if(newTask === "")
      { return; }
  
    const search = task.filter(task => task === newTask);  
    
    if(search.length !== 0){
      Alert.alert("Tarefa Repetida!");
      return;
    }
    
    setTask([... task, newTask]);
    setNewTask('');
    Keyboard.dismiss();
  }
    
  async function removeTask(item){
    Alert.alert("Deletar Task", "Tem certeza que deseja remover?",
    [
      {
        text: "Cancelar",
        onPress: () => { return;}, style: "cancel"
      },
      {
        text: "OK",
        onPress: () => setTask(task.filter(tasks => tasks !== item))
      }
    ], {cancelable: false})
  }
    
  useEffect(() => {
    async function carregaDados(){
      const task = await AsyncStorage.getItem("task");
      if(task)
        { setTask(JSON.parse(task)); }
    }
    
    carregaDados();
    
  }, []);
    
  useEffect(() => {
    async function salvaDados(){ 
      AsyncStorage.setItem("task", JSON.stringify(task));
    }
    
    salvaDados();
  }, [task]);
    
  return (
    <>
      <Container>
        <Header>
          <TitleText> Aplicativo ToDoList </TitleText>
        </Header>
      
        <Box>
          <Tarefa> Adicione aqui uma Tarefa </Tarefa>
          
          <Input placeholderTextColor="#999"
            autoCorrect={true} placeholder="Tarefa"
            maxLength={30} onChangeText=
            {text => setNewTask(text)} value={newTask}
          />

          <Button onPress={() => addTask()}>
            <TextButton> Adicionar Tarefa </TextButton>
          </Button>
        </Box>

        <Body>
          <List 
            data={task} keyExtractor={item => item.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              
              <ContentBox>
                
                  <ContentItem>
                      <TouchableOpacity >
                          <MaterialIcons name="storage" size={32} color="black" />
                      </TouchableOpacity>
                                    
                      <TaskTitle> Tarefa </TaskTitle>

                      <TouchableOpacity onPress={() => removeTask(item)}>
                          <MaterialIcons name="close" size={32} color="#f64c75" />
                      </TouchableOpacity>
                  </ContentItem> 
                                
                  <TextTask> {item} </TextTask>
                                {/* <Text>{item}</Text> */}
              </ContentBox>
            )}
          />
        </Body>
      </Container>
    </>
  );
}