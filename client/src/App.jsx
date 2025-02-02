import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import TodoList from './components/TodoList';

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',

  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <div className='d-flex justify-content-center'>  
          <div className='container mx-auto'>
            <h1>Todo App</h1>
            <TodoList />
          </div>
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
