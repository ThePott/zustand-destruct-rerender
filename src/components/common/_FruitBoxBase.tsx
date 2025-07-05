import { Paper, Typography } from '@mui/material';
import { createContext, useContext } from 'react';
import type { FruitBoxProps } from '../../interfaces';
import { destructuredSummaryCode } from "./summaryCode";

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const FruitBoxContext = createContext<string | null>(null)

const useFruitBoxContext = () => {
    const context = useContext(FruitBoxContext)
    if (!context) {
        throw new Error('Fruit components must be used within FruitBox')
    }
    return context
}

const FruitBoxBase = ({ usage, children }: FruitBoxProps) => {
    const title = usage === "DESTRUCTURED" ? "구조 분해 할당" : "하나 씩 할당"

    return (
        <FruitBoxContext.Provider value={usage}>
            {/* <Paper component="pre" className='absolute'>
                <SyntaxHighlighter
                    language="tsx"
                    style={tomorrow} // Dark theme
                    customStyle={{
                        margin: 0,
                        padding: '16px',
                        fontSize: '0.875rem',
                        fontFamily: '"Fira Code", Monaco, "Lucida Console", monospace'
                    }}
                >
                    {destructuredSummaryCode}
                </SyntaxHighlighter>

            </Paper> */}
            <Paper sx={{ borderRadius: "12px" }} className='p-6 flex flex-col gap-3'>
                <Typography variant='h6' className='text-center'>{title}</Typography>
                {children}
            </Paper>
        </FruitBoxContext.Provider>
    )
}

export { useFruitBoxContext };
export default FruitBoxBase