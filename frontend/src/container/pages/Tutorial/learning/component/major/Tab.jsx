import React, { useState } from 'react'

import Summary from '../Summary'
import Tools from '../Tools'
import Notes from '../Notes'

function Tab() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <>
            <div className="tabs">
                <input type="radio" id="tab1" name="tab-control" className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}/>
                <input type="radio" id="tab2" name="tab-control"className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}/>
                <input type="radio" id="tab3" name="tab-control"className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}/>  
                <input type="radio" id="tab4" name="tab-control"className={toggleState === 4 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(4)}/>

                <ul className='text-[#495057] dark:text-white duration-200'>
                    <li title="Summary">
                        <label for="tab1" role="button"><span>Summary</span></label>
                    </li>
                    <li title="Tools">
                        <label for="tab2" role="button"><span>Tools</span></label>
                    </li>
                    <li title="Notes">
                        <label for="tab3" role="button"><span>Notes</span></label>
                    </li>    
                    <li title="Instructors">
                        <label for="tab4" role="button"><span>Instructors</span></label>
                    </li>
                </ul>

                <div className="slider"><div className="indicator"></div></div>

                <div className="content-tabs">
                    <div className={toggleState === 1 ? "content  active-content" : "content"}>
                        <Summary/>
                    </div>
                    <div className={toggleState === 2 ? "content  active-content" : "content"}>
                        <Tools/>
                    </div>
                    <div className={toggleState === 3 ? "content  active-content" : "content"}>
                        <Notes/>
                    </div>
                    <div className={toggleState === 4 ? "content  active-content" : "content"}>
                        <Tools/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tab