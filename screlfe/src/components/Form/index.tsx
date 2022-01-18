import { InputBaseProps } from "@material-ui/core";
import React, { CSSProperties, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";

export interface InputRefProps {
    getInputValue: () => string;
    setInputValue: (value: string) => void;
}

interface InputProps extends InputBaseProps{
    styleContainer:CSSProperties;
    label: String
}

const Input: React.ForwardRefRenderFunction<InputRefProps, InputProps> = ({ styleContainer, label}, ref) => {
    const inputRef = useRef<HTMLDivElement>(null)
    const [hoverError, setHoverError] = useState<boolean>(false)

    useEffect(() => {
        document.getElementsByClassName(label)[0].getElementsByTagName("input")[0].setAttribute("style", "line-height:120px");
    }, [])

    const getInputValue = useCallback(() => {
        return inputRef.current?.getElementsByTagName('input')[0].value ? inputRef.current?.getElementsByTagName('input')[0].value : ""
    }, [inputRef])

    const setInputValue = useCallback((newValue) => {
        document.getElementsByClassName(label)[0].getElementsByTagName("input")[0].value = newValue
    }, [])

    useImperativeHandle(ref, () => {
        return {
            getInputValue,
            setInputValue
        };
    });

    const focusInput = useCallback(() => {
        inputRef.current?.getElementsByTagName('input')[0].focus()
    }, [])

    return (
       <div></div>
    )
}

