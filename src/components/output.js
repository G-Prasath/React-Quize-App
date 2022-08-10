import React from 'react';
import Question from './Question';

function output() {
    return (
        <div>
            {
                Question.map((item) => {
                    return (
                        <>
                            <ul>
                                <li>{item.qa}&nbsp;&nbsp; :&nbsp;&nbsp; {item.ans}</li>
                            </ul>
                        </>
                    )
                })

            }
        </div>
    )
}

export default output;
