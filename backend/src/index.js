import {server} from './server';
import { connect } from './database';

connect();
server.start({
    port: 3100},
    ({port}) => {console.log('Server en el puerto ', port);}
)