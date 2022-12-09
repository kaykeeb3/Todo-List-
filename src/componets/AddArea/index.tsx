import { keyboardKey } from '@testing-library/user-event';
import { useState, KeyboardEvent } from 'react';
import * as C from './styles';

 type Props = {
    onEnter: (taskName: string) => void 
 }


export const AddArea = ( { onEnter }: Props) => {
   const [inputText, setInputText] = useState('');    

   const handleKeyUp = (e: keyboardKey) => {
     if (e.code === 'Enter' && inputText !== '') {
       onEnter(inputText);
       setInputText('');
     }
   }


    return (
     <C.Container>
        <div className="image">+</div>
        <input 
        type="text"
        placeholder="Adicione uma Tarefa"
        value={inputText}
        onChange={e=>setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
        />
     </C.Container>  
   

    );
}