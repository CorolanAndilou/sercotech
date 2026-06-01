import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { LoginForm } from './LoginForm';
import { ValidatedForm } from './ValidatedForm';
import { HookForm } from './ValidateForrmDos';

function App() {
   return (
       <div className="App">
           <Button variant="primary">Clic aquí</Button>
           <LoginForm/>
           <ValidatedForm/>
            <HookForm/>
       </div>
   );
}
export default App;