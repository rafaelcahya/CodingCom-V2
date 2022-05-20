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
                    <button
                        className={
                            "bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        }
                        type="button"
                        onMouseEnter={openLeftTooltip}
                        onMouseLeave={closeLeftTooltip}
                        ref={btnRef}
                    >
                        <img src={help_icon} alt="" width={17} />
                    </button>
                    <div
                        className={
                            (tooltipShow ? "" : "hidden ") +
                            "bg-red-600 border-0 mt-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg"
                          }
                        ref={tooltipRef}
                    >
                        <div>
                            <div
                                className={
                                    "bg-red-600 text-white opacity-75 font-semibold p-3 mb-0 border-b border-solid border-slate-100 uppercase rounded-t-lg"
                                  }
                            >
                                tooltip title
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
