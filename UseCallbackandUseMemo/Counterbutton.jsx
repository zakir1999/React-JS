import { useCallback, useMemo, useState } from 'react';
import Button from './Button.jsx';
import ShowCount from './showcount.jsx';
import Title from './title.jsx';


function Counterbutton() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    let count = count1 + count2;

    const incrementByOne = useCallback(() => {
        console.log(`Count2 From incrementByOne ${count2}`)
        setCount1((prevCount) => prevCount + 1);
    }, [count2]);

    const incrementByFive = useCallback(() => {

        setCount2((prevCount) => prevCount + 5);
    }, []);

    const isEventorOdd =useMemo(()=>{
        let i=0;
        while(i<1000000000)i+=1;
        return count1%2===0;

    },[count1]);



    return (
        <div>
            <Title />
            <ShowCount count={count1} title="Counter 1" />
            <span>{isEventorOdd ?'Even':'odd'}</span>

            <Button handleClick={incrementByOne}>Increment by one</Button>
            <hr />
            <ShowCount count={count2} title="Counter 2" />
            <Button handleClick={incrementByFive}>Increment by five</Button>
        </div>
    );
}

export default Counterbutton;