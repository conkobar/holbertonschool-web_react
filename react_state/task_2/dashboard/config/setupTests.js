require('jsdom-global')();
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Configure Enzyme with the adapter
Enzyme.configure({ adapter: new Adapter() });