import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../store/actions/actionCreators';

export default function useActions() {
   const dispatch = useDispatch();
   return bindActionCreators(actionCreators, dispatch);
}
