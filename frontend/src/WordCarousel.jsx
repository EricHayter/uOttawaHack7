import {useState, useEffect} from 'react';
import {StyledHeader} from './LandingPageBuffer'

export default function WordCarousel({values}){
    const [currentText, setCurrentText] = useState(values[0]);
    let index = Math.floor(Math.random() * values.length);

    function setText(){
        let newText = values[index];
        if(newText === currentText){
            index = (index + 1) % values.length;
            setCurrentText(values[index]);
        }
        else{
            setCurrentText(newText);
            }
            return;
        }

    useEffect(()=>{
        setTimeout(()=>{
            setText()
        }, 1000)
    }, [currentText])

    return(
        <>
        <StyledHeader>{currentText}</StyledHeader>
        </>
    )
    }

