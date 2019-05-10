import React, {useContext} from 'react';
import { SearchTabContext } from '../../SearchTabs';


const GuestTapDisplay = () => {
    
    const value = useContext(SearchTabContext);

    return (
        <div>
            {value.totalNum === 0 ? '인원' : value.totalNum > 0 ? `게스트 ${value.totalNum}` : ''}
            {value.toddlerNum > 0 ? `유아 ${value.toddlerNum}` : ''}
        </div>
    )
}

export { GuestTapDisplay };