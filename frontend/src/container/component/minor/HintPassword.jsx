import React, { useState } from 'react'
import { createPopper } from "@popperjs/core";

import help_icon from '../../asset/icon/help-circle.svg'

export default function HintPassword() {
    const [tooltipShow, setTooltipShow] = useState(false);
    const btnRef = React.createRef();
    const tooltipRef = React.createRef();

    const openLeftTooltip = () => {
        createPopper(btnRef.current, tooltipRef.current, {
        placement: "right"
        });
        setTooltipShow(true);
    };

    const closeLeftTooltip = () => {
        setTooltipShow(false);
    };
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full text-center">
                        <img src={help_icon} alt="" width={17} 
                        onMouseEnter={openLeftTooltip}
                        onMouseLeave={closeLeftTooltip}
                        ref={btnRef}/>
                    <div
                        className={
                            (tooltipShow ? "" : "hidden ") +
                            "border-0 mt-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg"
                            }
                        ref={tooltipRef}
                    >
                        <div>
                            <div
                                className={
                                    "text-black opacity-75 font-semibold p-3 mb-0 border-b border-solid border-slate-100 rounded-t-lg"
                                }
                            >
                                Password must be 8 - 20 characters
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
