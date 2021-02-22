import { ChatEngine } from 'react-chat-engine';
import  ChatFeed from './components/ChatFeed.jsx';
import  LoginForm from './components/LoginForm.jsx';

import './App.css';

const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine
    height='100vh'
    projectID='174cd4f6-c0c2-4ded-b0c4-90315aed9d94'
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
  );
}

export default App;
