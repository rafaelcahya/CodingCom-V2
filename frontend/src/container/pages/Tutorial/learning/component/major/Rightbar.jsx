import React from 'react'

function Rightbar() {
    return (
        <div className='sticky top-10 inter text_14'>
            <p className='inter-600 uppercase red tracking-widest border-b pb-4'>Mastering on basic internet</p>
            <ul className='flex flex-col gap-4 my-4 pr-4 overflow-y-scroll h-screen'>
                <li className='flex justify-between items-center gap-5 border-l-4 border-red-400 pl-4'>
                    <p>Discover the WHY behind security awareness</p>
                    <p className='text_11 secondary_text whitespace-nowrap'>15 min</p>
                </li>
                <li className='group'>
                    <div className='group-hover:flex flex justify-between items-center gap-5'>
                        <p>Social engineering, what makes it work</p>
                        <p className='hidden group-hover:block text_11 secondary_text whitespace-nowrap'>15 min</p>
                    </div>
                </li>
                <li>How to spot the red flags before you get duped</li>
                <li>Hear password best practices you can actually follow</li>
                <li>Learn about ransomware</li>
                <li>Discover safe mobile device usage</li>
                <li>Why securing your desk or computer is important.</li>
                <li>How to build up your resilience to attacks</li>
                <li>Learn the fast and easy process to spot a fake email.</li>
                <li>How to browse the Internet safely</li>
                <li>Spot the differences between a real email and a scam email!</li>
                <li>Communicate through email more securely.</li>
                <li>Learn to avoid accidental data leakage!</li>
                <li>How to create security questions that aren't easily guessed.</li>
                <li>Learn about typosquatting, malicious websites, and more.</li>
                <li>Determine which data is regulated.</li>
                <li>How to avoid accidental disclosure (basically data leaking).</li>
                <li>Be able to communicate securely and effectively.</li>
                <li>How to talk to your IT friends or co-workers.</li>
                <li>Learn the fast and easy process to spot a fake email.</li>
                <li>How to browse the Internet safely</li>
                <li>Spot the differences between a real email and a scam email!</li>
            </ul>
        </div>
    )
}

export default Rightbar