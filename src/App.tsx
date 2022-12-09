import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item'
import { ListItem } from './componets/ListItem';
import { AddArea } from './componets/AddArea';


const App = () => {
 const [list, setList] = useState<Item[]>([
  { id: 1, name: 'Comprar o Pão na Padaria', done: true },
  { id: 2, name: 'Comprar o Bolo na Padaria', done: false },
 ]);


 const handleAddTask = (taskName: string) => {
  let newList = [...list];
  newList.push({
    id: list.length + 1,
    name: taskName,
    done: false
  });
  setList(newList);
}

 return (
   <C.Container>
     <C.Area>
      <C.Header>Lista  de Tarefas</C.Header>

     <AddArea onEnter={handleAddTask} />

      {list.map((item, index)=>(
       <ListItem key={index} item={item} />
      ))}


     </C.Area>
   </C.Container>

 );

}

export default App;