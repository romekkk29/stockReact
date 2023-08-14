import { useSelector, useDispatch } from 'react-redux';

export const useGlobalState = () => {
    const dispatch = useDispatch();
    const autReducer = useSelector(state => state.autReducer);
    const langReducer = useSelector(state => state.langReducer);
    return { autReducer, langReducer, dispatch };
}